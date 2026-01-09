import { db } from "@/lib/prisma";

export async function setCourierOnlineUseCase({ courierId }) {
  // 1️⃣ Verifica se o entregador existe
  const courier = await db.courier.findUnique({
    where: { id: courierId },
  });

  if (!courier) {
    throw new Error("Courier not found");
  }

  // 2️⃣ Verifica se está ativo
  if (!courier.isActive) {
    throw new Error("Courier is not active");
  }

  // 3️⃣ Atualiza status para ONLINE
  const updatedCourier = await db.courier.update({
    where: { id: courierId },
    data: {
      status: "ONLINE",
      lastOnlineAt: new Date(),
    },
  });

  // 4️⃣ Retorna resultado
  return {
    courier: updatedCourier,
  };
}
