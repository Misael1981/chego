import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpa dados (opcional no MVP)
  await prisma.deliveryOrder.deleteMany();
  await prisma.courier.deleteMany();

  // Cria um entregador
  const courier = await prisma.courier.create({
    data: {
      name: "João Motoca",
      phone: "35999999999",
      password: "123456", // depois você faz hash
    },
  });

  // Cria pedidos abertos
  await prisma.deliveryOrder.createMany({
    data: [
      {
        pickupAddress: "Rua Central, 100",
        deliveryAddress: "Av. Brasil, 500",
        fee: 10,
        source: "EXTERNAL",
      },
      {
        pickupAddress: "Farmácia Popular",
        deliveryAddress: "Rua das Flores, 22",
        fee: 12,
        source: "EXTERNAL",
      },
      {
        pickupAddress: "Rangooo - Pizzaria",
        deliveryAddress: "Rua São José, 90",
        fee: 15,
        source: "RANGOOO",
      },
    ],
  });

  console.log("🌱 Seed do Chegô rodou com sucesso");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
