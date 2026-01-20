import CardOrder from "./components/CardOrder";
import OrdersMap from "./components/OrdersMap";

const mockOrders = [
  {
    id: "1",
    source: "RANGOOO",
    externalOrderId: "xyz-123",
    pickupName: "Pizzaria do Zé",
    pickupAddress: "Rua Principal, 123, Centro, Congonhal - MG",
    dropoffName: "João Silva",
    dropoffAddress: "Rua das Flores, 456, Jardim Bela Vista, Congonhal - MG",
    totalValue: 55.0,
    notes: "Deixar na portaria.",
    status: "OPEN",
  },
  {
    id: "2",
    source: "MANUAL",
    externalOrderId: null,
    pickupName: "Farmácia Central",
    pickupAddress: "Avenida Brasil, 789, Centro, Congonhal - MG",
    dropoffName: "Maria Oliveira",
    dropoffAddress: "Rua das Pedras, 101, Morro Alto, Congonhal - MG",
    totalValue: 30.5,
    notes: "Urgente!",
    status: "OPEN",
  },
  {
    id: "3",
    source: "RANGOOO",
    externalOrderId: "abc-789",
    pickupName: "Lanchonete da Praça",
    pickupAddress: "Praça da Matriz, 10, Centro, Congonhal - MG",
    dropoffName: "Carlos Pereira",
    dropoffAddress: "Sítio Palmeiras, Zona Rural, Congonhal - MG",
    totalValue: 25.0,
    notes: "Cachorro bravo, cuidado.",
    status: "OPEN",
  },
];

export default function OrdersPage() {
  return (
    <div>
      <div className="bg-slate-400 pb-4">
        <OrdersMap orders={mockOrders} />
      </div>
      <main className="-mt-4 relative space-y-4 z-50 bg-[#081727] rounded-t-3xl p-4 ">
        <h1>Pedidos</h1>
        <CardOrder orders={mockOrders} />
      </main>
    </div>
  );
}
