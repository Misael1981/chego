import MenuTrigger from "@/components/MenuTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const dashboardMock = {
  status: "OFFLINE",
  totalDeliveries: 0,
  rating: 5.0,
  earnings: 0,
  lastDeliveries: [
    {
      id: 1,
      from: "Pizzaria Bella",
      to: "Rua das Flores",
      date: "Hoje",
      status: "Concluída",
    },
  ],
};

export default function DashboardCourierPage() {
  return (
    <div>
      <div>
        <header className="bg-white w-full px-6 pt-6 pb-10 flex flex-col gap-1 justify-center items-center">
          <MenuTrigger />
          <Image
            src="/logo-chego.svg"
            alt="Logo Chego"
            width={250}
            height={250}
          />
          <div className="flex flex-col justify-center items-center gap-0">
            <h1 className="text-[#081727] font-kanit text-3xl font-bold italic">
              Chegô
            </h1>
            <p className="text-[#081727] font-kanit text-center text-lg font-normal italic">
              Conectando quem vende a quem entrega.
            </p>
          </div>
        </header>
        <main className="-mt-6 relative space-y-4 z-50 bg-[#081727] rounded-t-3xl p-4 ">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className=" rounded-2xl p-3 text-center">
                <p className="text-sm text-muted-foreground">Entregas</p>
                <p className="text-xl font-bold">0</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className=" rounded-2xl p-3 text-center">
                <p className="text-sm text-muted-foreground">Avaliação</p>
                <p className="text-xl font-bold">5.0 ⭐</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className=" rounded-2xl p-3 text-center">
              <h2 className="font-semibold mb-3">Últimas entregas</h2>

              <div className="text-sm text-muted-foreground">
                Nenhuma entrega realizada ainda.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className=" rounded-2xl p-3 text-center">
              <p className="text-sm text-muted-foreground">Seu status</p>
              <p className="text-xl font-bold text-red-500">Offline</p>
              <Button className="mt-4 w-full" asChild>
                <Link href="/courier/pedidos">Acessar Pedidos</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
