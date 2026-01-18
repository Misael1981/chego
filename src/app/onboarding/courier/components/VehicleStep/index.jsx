import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const VehicleStep = ({ onBack, onNext }) => {
  const { control, trigger, watch } = useFormContext();

  // "Watch" monitora o tipo de veículo para esconder/mostrar campos (ex: placa)
  const selectedVehicle = watch("vehicleType");

  const handleNextStep = async () => {
    const isValid = await trigger([
      "vehicleType",
      "plate",
      "model",
      "engineCc",
    ]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="vehicleType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de Veículo</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Selecione o veículo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="BIKE">Bicicleta</SelectItem>
                <SelectItem value="MOTO">Moto</SelectItem>
                <SelectItem value="CARRO">Carro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Só mostra Placa e Cilindrada se não for BIKE */}
      {selectedVehicle !== "BIKE" && (
        <>
          <FormField
            control={control}
            name="plate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ABC-1234"
                    className="bg-gray-800 border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="engineCc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cilindradas (apenas números)</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="160"
                    className="bg-gray-800 border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}

      <FormField
        control={control}
        name="model"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Modelo / Marca</FormLabel>
            <FormControl>
              <Input
                placeholder="Ex: Honda CG 160 ou Caloi Explorer"
                className="bg-gray-800 border-gray-700"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Voltar
        </Button>
        <Button type="button" onClick={handleNextStep} className="flex-1">
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default VehicleStep;
