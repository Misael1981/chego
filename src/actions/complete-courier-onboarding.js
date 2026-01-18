"use server";

import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { onboardingCourierSchema } from "@/schemas/onboardingCourier-schemas";

export async function completeCourierOnboarding(formData) {
  //  Verifica sessão
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }

  const userId = session.user.id;

  //  Validação com Zod
  const parsed = onboardingCourierSchema.safeParse(formData);

  if (!parsed.success) {
    console.error(parsed.error.flatten());
    throw new Error("Dados inválidos");
  }

  const {
    username,
    phone,
    fixedJob,
    days,
    periods,
    vehicleType,
    plate,
    model,
    engineCc,
    expectations,
  } = parsed.data;

  // Transaction (tudo ou nada)
  await db.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: userId },
      data: {
        role: "COURIER",
        roleDefinedAt: new Date(),
        name: username,
      },
    });

    // Cria ou atualiza Courier
    const courier = await tx.courier.upsert({
      where: { userId },
      update: {
        phone,
        hasFixedJob: fixedJob ?? false,
      },
      create: {
        userId,
        phone,
        hasFixedJob: fixedJob ?? false,
      },
    });

    // Availability (remove e recria)
    await tx.courierAvailability.deleteMany({
      where: { courierId: courier.id },
    });

    const availabilityData = [];

    for (const day of days) {
      for (const period of periods) {
        availabilityData.push({
          courierId: courier.id,
          day,
          period,
        });
      }
    }

    if (availabilityData.length > 0) {
      await tx.courierAvailability.createMany({
        data: availabilityData,
      });
    }

    const engineCcNumber =
      engineCc !== undefined && engineCc !== null ? Number(engineCc) : null;

    // Vehicle
    if (vehicleType) {
      await tx.courierVehicle.upsert({
        where: { courierId: courier.id },
        update: {
          type: vehicleType,
          plate,
          model,
          engineCc: engineCcNumber,
        },
        create: {
          courierId: courier.id,
          type: vehicleType,
          plate,
          model,
          engineCc: engineCcNumber,
        },
      });
    }

    // Profile
    if (expectations) {
      await tx.courierProfile.upsert({
        where: { courierId: courier.id },
        update: {
          expectations,
        },
        create: {
          courierId: courier.id,
          expectations,
        },
      });
    }
  });

  return { success: true };
}
