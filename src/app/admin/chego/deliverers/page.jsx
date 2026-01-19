import HeaderAdminPages from "@/components/HeaderAdminPages";
import PendingRequestsSection from "./components/PendingRequestsSection";
import { db } from "@/lib/prisma";
import { approveCourier, rejectCourier } from "@/actions/courier-actions";

export default async function DeliverersPage() {
  const pendingCouriers = await db.courier.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
      vehicle: true,
      profile: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="w-full h-full flex flex-col bg-background">
      {/* Header */}
      <HeaderAdminPages
        title="Gerenciamento de Entregadores"
        description="Gerencie os entregadores ativos e as solicitações pendentes."
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <PendingRequestsSection
          pendingCouriers={pendingCouriers}
          onApprove={approveCourier}
          onReject={rejectCourier}
        />
      </div>
    </div>
  );
}
