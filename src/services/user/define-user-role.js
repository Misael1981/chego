import { db } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

export async function defineUserRole({ userId, role, data }) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  if (user.role) {
    throw new Error("Role já definido para este usuário");
  }

  if (role === UserRole.COURIER) {
    await db.courier.create({
      data: {
        userId,
        phone: data.phone ?? "",
      },
    });
  }

  if (role === UserRole.MERCHANT) {
    await db.merchant.create({
      data: {
        userId,
        phone: data.phone ?? "",
        businessName: data.businessName ?? "",
        address: data.address ?? "",
        city: data.city ?? "",
        state: data.state ?? "",
        name: "",
      },
    });
  }

  await db.user.update({
    where: { id: userId },
    data: {
      role,
      roleDefinedAt: new Date(),
    },
  });
}
