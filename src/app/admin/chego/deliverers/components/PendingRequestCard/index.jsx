import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, MapPin, Motorbike, Phone } from "lucide-react";
import { formatDate } from "@/helpers/format-date";
import PendingRequestActions from "../PendingRequestActions";

const PendingRequestCard = ({ courier, onApprove, onReject }) => {
  // Função para traduzir o tipo de veículo
  const getVehicleType = (type) => {
    const types = {
      MOTO: "Moto",
      CAR: "Carro",
      BIKE: "Bicicleta",
    };
    return types[type] || type;
  };

  return (
    <Card className="overflow-hidden border border-border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        {/* Cabeçalho com foto e informações principais */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={courier.user?.image}
              alt={courier.user?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            />
            <Badge
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs"
              variant={courier.status === "PENDING" ? "secondary" : "outline"}
            >
              Pendente
            </Badge>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{courier.user?.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {courier.user?.email}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                ID: {courier.id.slice(-6)}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <Badge
                variant="outline"
                className="text-xs flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                {courier.city} - {courier.state}
              </Badge>

              <Badge
                variant="outline"
                className="text-xs flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                {courier.phone}
              </Badge>
            </div>
          </div>
        </div>

        {/* Informações do veículo */}
        {courier.vehicle && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Motorbike className="w-4 h-4" />
              <span className="font-medium">Veículo</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Tipo:</span>
                <span className="ml-2 font-medium">
                  {getVehicleType(courier.vehicle.type)}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Placa:</span>
                <span className="ml-2 font-medium">
                  {courier.vehicle.plate}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Modelo:</span>
                <span className="ml-2 font-medium">
                  {courier.vehicle.model}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Cilindrada:</span>
                <span className="ml-2 font-medium">
                  {courier.vehicle.engineCc}cc
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Expectativas */}
        {courier.profile?.expectations && (
          <div className="mb-4">
            <h4 className="font-medium mb-1">Expectativas</h4>
            <p className="text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
              {courier.profile.expectations}
            </p>
          </div>
        )}

        {/* Informações adicionais */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Solicitado em: {formatDate(courier.createdAt)}</span>
          </div>
          <div>
            <span>Trabalho fixo: </span>
            <Badge
              variant={courier.hasFixedJob ? "default" : "outline"}
              className="ml-1"
            >
              {courier.hasFixedJob ? "Sim" : "Não"}
            </Badge>
          </div>
        </div>

        {/* Botões de ação */}
        <PendingRequestActions
          courierId={courier.id}
          onApprove={onApprove}
          onReject={onReject}
        />
      </CardContent>
    </Card>
  );
};

export default PendingRequestCard;
