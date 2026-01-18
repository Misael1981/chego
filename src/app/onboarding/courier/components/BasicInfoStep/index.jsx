import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { validatePhone } from "@/helpers/validate-phone";

const states = [
  "SP",
  "RJ",
  "MG",
  "PR",
  "SC",
  "RS",
  "BA",
  "PE",
  "CE",
  "GO",
  "DF",
  "PA",
  "AM",
  "MA",
  "PB",
  "RN",
  "AL",
  "SE",
  "PI",
  "TO",
  "RO",
  "RR",
  "AP",
  "AC",
  "MT",
  "MS",
  "ES",
];

const BasicInfoStep = ({ onNext }) => {
  const { control, trigger, setError, clearErrors } = useFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger([
      "username",
      "phone",
      "fixedJob",
      "city",
      "state",
    ]);

    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-6">
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="(11) 99999-9999"
                  {...field}
                  onBlur={(e) => {
                    field.onBlur();

                    const value = e.target.value;

                    if (!validatePhone(value)) {
                      setError("phone", {
                        type: "manual",
                        message: "Telefone inválido. Use (11) 99999-9999",
                      });
                    } else {
                      clearErrors("phone");
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="fixedJob"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="font-normal">
                Possui trabalho fixo
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua cidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estados</SelectLabel>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" className="w-full" onClick={handleNextStep}>
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;
