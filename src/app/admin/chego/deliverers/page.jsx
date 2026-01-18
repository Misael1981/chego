import HeaderAdminPages from "@/components/HeaderAdminPages";
import PendingRequestsSection from "./components/PendingRequestsSection";

export default function DeliverersPage() {
  return (
    <div className="w-full h-full flex flex-col bg-background">
      {/* Header */}
      <HeaderAdminPages
        title="Gerenciamento de Entregadores"
        description="Gerencie os entregadores ativos e as solicitações pendentes."
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <PendingRequestsSection />
        <div className="space-y-6">
          {/* Active Deliverers Section */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Entregadores Ativos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Nome
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-accent">
                    <td className="py-3 px-4">João Silva</td>
                    <td className="py-3 px-4">joao@example.com</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-900 text-green-100 px-2 py-1 rounded text-xs">
                        Online
                      </span>
                    </td>
                    <td className="py-3 px-4 text-primary cursor-pointer">
                      Ver
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pending Requests Section */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Pedidos para se tornar Entregador
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Nome
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Data Solicitação
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-accent">
                    <td className="py-3 px-4">Maria Santos</td>
                    <td className="py-3 px-4">maria@example.com</td>
                    <td className="py-3 px-4">18/01/2026</td>
                    <td className="py-3 px-4 space-x-2">
                      <button className="text-green-400 hover:text-green-300">
                        Aprovar
                      </button>
                      <span className="text-muted-foreground">|</span>
                      <button className="text-red-400 hover:text-red-300">
                        Rejeitar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
