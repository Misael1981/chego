import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function PendingCourierPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-8 space-y-4">
          <div className="flex justify-center">
            <Clock className="h-10 w-10 text-muted-foreground" />
          </div>

          <h1 className="text-2xl font-semibold">Cadastro em análise</h1>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Recebemos suas informações e estamos revisando seu cadastro para
            garantir a qualidade do Chegô.
          </p>

          <p className="text-sm text-muted-foreground">
            Assim que a análise for concluída, você será notificado. Não é
            necessário realizar nenhuma ação agora.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
