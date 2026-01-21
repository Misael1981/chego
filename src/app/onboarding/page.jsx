import MenuTrigger from "@/components/MenuTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <MenuTrigger />

      <div className="w-full max-w-2xl space-y-8">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="p-2 bg-white w-fit rounded-lg">
            <Image
              src="/logo-chego.svg"
              alt="Chegô Logo"
              width={72}
              height={72}
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl font-semibold">
            Como você vai usar o Chegô?
          </h1>
          <p className="text-sm text-muted-foreground">
            Escolha o perfil que melhor descreve você agora.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="hover:border-primary transition">
            <CardHeader>
              <CardTitle className="text-lg">Sou entregador</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Receba pedidos, aceite entregas e acompanhe tudo pelo app.
              </p>
              <Button className="w-full" asChild>
                <Link href="/onboarding/courier">
                  Continuar como entregador
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition">
            <CardHeader>
              <CardTitle className="text-lg">
                Tenho um estabelecimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Cadastre seu negócio e solicite entregadores quando precisar.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/onboarding/merchant">
                  Continuar como estabelecimento
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
