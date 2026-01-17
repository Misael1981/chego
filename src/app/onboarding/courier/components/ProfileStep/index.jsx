import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ProfileStep = ({ onBack }) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="expectations"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Conte um pouco sobre o que você espera do aplicativo
            </FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                className="bg-gray-800 border-gray-700"
                placeholder="Ex: Procuro um complemento de renda nas horas vagas..."
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
          className="flex-1 border-gray-700"
        >
          Voltar
        </Button>

        <Button
          type="submit"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium"
        >
          Finalizar Cadastro
        </Button>
      </div>
    </div>
  );
};

export default ProfileStep;
