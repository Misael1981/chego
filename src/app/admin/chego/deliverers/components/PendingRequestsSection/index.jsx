import { Card, CardContent } from "@/components/ui/card";

const PendingRequestsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Pedidos para se tornar Entregador
      </h2>
      <div className="overflow-x-auto">
        <Card>
          <CardContent></CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PendingRequestsSection;
