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
  { label: "Domingo", value: "SUNDAY" },
  { label: "Segunda", value: "MONDAY" },
  { label: "Terça", value: "TUESDAY" },
  { label: "Quarta", value: "WEDNESDAY" },
  { label: "Quinta", value: "THURSDAY" },
  { label: "Sexta", value: "FRIDAY" },
  { label: "Sábado", value: "SATURDAY" },
];

const periods = [
  { label: "Manhã", value: "MORNING" },
  { label: "Tarde", value: "AFTERNOON" },
  { label: "Noite", value: "NIGHT" },
];

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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dias disponíveis</FormLabel>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {days.map((day) => (
                <FormItem
                  key={day.value}
                  className="flex items-center gap-2 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(day.value)}
                      onCheckedChange={(checked) => {
                        checked
                          ? field.onChange([...field.value, day.value])
                          : field.onChange(
                              field.value.filter((v) => v !== day.value),
                            );
                      }}
                    />
                  </FormControl>

                  <FormLabel className="font-normal cursor-pointer">
                    {day.label}
                  </FormLabel>
                </FormItem>
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Períodos</FormLabel>

            <div className="flex gap-4 mt-2">
              {periods.map((period) => (
                <FormItem
                  key={period.value}
                  className="flex items-center gap-2 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(period.value)}
                      onCheckedChange={(checked) => {
                        checked
                          ? field.onChange([...field.value, period.value])
                          : field.onChange(
                              field.value.filter((v) => v !== period.value),
                            );
                      }}
                    />
                  </FormControl>

                  <FormLabel className="font-normal cursor-pointer">
                    {period.label}
                  </FormLabel>
                </FormItem>
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
