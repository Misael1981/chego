import Login from "@/components/Login";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex p-4 flex-col w-full h-screen items-center justify-center gap-8">
        <Login />
      </div>
    );
  }

  return (
    <div>
      <h1>Seja bem-vindo, {session.user.name}!</h1>
    </div>
  );
}
