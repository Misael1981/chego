import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { defineUserRole } from "@/services/user/define-user-role";
import { UserRole } from "@prisma/client";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { role, data } = body;

  if (!Object.values(UserRole).includes(role)) {
    return NextResponse.json({ error: "Role inválido" }, { status: 400 });
  }

  await defineUserRole({
    userId: session.user.id,
    role,
    data,
  });

  return NextResponse.json({ success: true });
}
