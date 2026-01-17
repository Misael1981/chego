import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const periods = ["Manhã", "Tarde", "Noite"];

const AvailabilityStep = ({ onBack, onNext }) => {
  const { control, trigger } = useFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger(["days", "periods"]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-6">
      {/* SEÇÃO DE DIAS */}
      <FormField
        control={control}
        name="days"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Dias disponíveis</FormLabel>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {days.map((day) => (
                <FormField
                  key={day}
                  control={control}
                  name="days"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={day}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(day)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, day])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== day,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {day}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* SEÇÃO DE PERÍODOS */}
      <FormField
        control={control}
        name="periods"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Períodos</FormLabel>
            </div>
            <div className="flex gap-4">
              {periods.map((period) => (
                <FormField
                  key={period}
                  control={control}
                  name="periods"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={period}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(period)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, period])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== period,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {period}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Voltar
        </Button>
        <Button onClick={handleNextStep} className="flex-1">
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default AvailabilityStep;
