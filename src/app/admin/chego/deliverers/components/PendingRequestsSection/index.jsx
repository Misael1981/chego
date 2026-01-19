import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PendingRequestCard from "../PendingRequestCard";

const PendingRequestsSection = ({ pendingCouriers, onApprove, onReject }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          Pedidos para se tornar Entregador
        </h2>
        <Badge variant="outline" className="text-sm">
          {pendingCouriers?.length || 0} pendentes
        </Badge>
      </div>

      {!pendingCouriers || pendingCouriers.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent>
            <p className="text-muted-foreground">
              Nenhum pedido pendente no momento.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pendingCouriers.map((courier) => (
            <PendingRequestCard
              key={courier.id}
              courier={courier}
              onApprove={onApprove}
              onReject={onReject}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PendingRequestsSection;
