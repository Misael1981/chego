import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardOrder({ orders }) {
  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <Card
          key={order.id}
          className="bg-[#112233] border-slate-800 text-slate-100 shadow-md"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50">
                  {order.source}
                </span>
                <CardTitle className="text-lg font-semibold leading-tight">
                  {order.pickupName}
                </CardTitle>
              </div>
              <div className="text-right">
                <span className="block text-xl font-bold text-emerald-400">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(order.totalValue)}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="relative pl-4 border-l-2 border-slate-700 space-y-6 ml-1 py-1">
              {/* Bolinha decorativa na linha do tempo - Retirada */}
              <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-slate-500 ring-4 ring-[#112233]" />

              <div>
                <p className="text-xs text-slate-400 mb-0.5 uppercase tracking-wide">
                  Retirada
                </p>
                <p className="leading-snug text-slate-300">
                  {order.pickupAddress}
                </p>
              </div>

              <div className="relative">
                {/* Bolinha decorativa na linha do tempo - Entrega */}
                <span className="absolute -left-[21px] top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-[#112233]" />
                <p className="text-xs text-slate-400 mb-0.5 uppercase tracking-wide">
                  Entrega para{" "}
                  <span className="text-slate-200 font-bold">
                    {order.dropoffName}
                  </span>
                </p>
                <p className="leading-snug text-slate-300">
                  {order.dropoffAddress}
                </p>
              </div>
            </div>

            {order.notes && (
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800 text-xs text-slate-400 italic">
                "{order.notes}"
              </div>
            )}

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
              Aceitar Corrida
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
