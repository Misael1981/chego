import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // Não logado
  if (!session?.user?.id) {
    redirect("/login");
  }
  const user = await db.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    redirect("/login");
  }

  // Admin
  if (user.role === "ADMIN") {
    redirect("/admin/chego");
  }

  // Usuário sem role definida
  if (!user.role) {
    redirect("/onboarding");
  }

  // Courier
  if (user.role === "COURIER") {
    const courier = await db.courier.findUnique({
      where: { userId: user.id },
      select: { status: true },
    });

    if (!courier) {
      redirect("/onboarding");
    }

    if (courier.status === "PENDING") {
      redirect("/pending");
    }

    if (courier.status === "ACTIVE") {
      redirect("/courier");
    }

    // Rejeitado / bloqueado
    redirect("/rejected");
  }

  // Fallback de segurança
  redirect("/login");
}
