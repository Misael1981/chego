"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const PendingRequestActions = ({ courierId, onApprove, onReject }) => {
  const [isPending, startTransition] = useTransition();

  const onAction = (action) => {
    startTransition(async () => {
      await action(courierId);
    });
  };

  return (
    <div className="flex gap-3 pt-4 border-t">
      <Button
        onClick={() => onAction(onApprove)}
        disabled={isPending}
        className="flex-1 bg-green-600 hover:bg-green-700"
      >
        {isPending ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <CheckCircle className="w-4 h-4 mr-2" />
        )}
        Aprovar
      </Button>
      <Button
        onClick={() => onAction(onReject)}
        disabled={isPending}
        variant="destructive"
        className="flex-1"
      >
        {isPending ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <XCircle className="w-4 h-4 mr-2" />
        )}
        Rejeitar
      </Button>
    </div>
  );
};

export default PendingRequestActions;
