"use server";

import { db } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { revalidatePath } from "next/cache";

export async function approveCourier(courierId) {
  try {
    const courier = await db.$transaction(async (tx) => {
      const courier = await tx.courier.update({
        where: { id: courierId },
        data: { status: "ACTIVE" },
        include: { user: true },
      });

      await tx.user.update({
        where: { id: courier.userId },
        data: {
          role: "COURIER",
          roleDefinedAt: new Date(),
        },
      });

      return courier;
    });

    if (courier.user?.email) {
      await resend.emails.send({
        from: "Chegô <no-reply@chego.app>",
        to: courier.user.email,
        subject: "Cadastro aprovado 🎉",
        html: `
          <h2>Olá, ${courier.user.name}</h2>
          <p>Seu cadastro como entregador foi aprovado.</p>
          <p>Agora você já pode acessar a plataforma 🚀</p>
        `,
      });
    }

    revalidatePath("/admin/deliverers");
  } catch (error) {
    console.error("Erro ao aprovar entregador:", error);
    throw new Error("Não foi possível aprovar o entregador.");
  }
}

export async function rejectCourier(courierId) {
  try {
    await db.courier.update({
      where: { id: courierId },
      data: {
        status: "BLOCKED",
      },
    });

    revalidatePath("/admin/deliverers");
  } catch (error) {
    console.error("Erro ao rejeitar entregador:", error);
    throw new Error("Não foi possível rejeitar o entregador.");
  }
}
