import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const BasicInfoStep = ({ onNext }) => {
  const { control, trigger } = useFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger(["username", "phone", "fixedJob"]);

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
                <Input placeholder="(11) 99999-9999" {...field} />
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

        <Button className="w-full" onClick={handleNextStep}>
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;
