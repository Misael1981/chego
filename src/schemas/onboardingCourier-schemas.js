import z from "zod";

export const onboardingCourierSchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário deve ter pelo menos 2 caracteres.",
  }),
  phone: z.string().min(10, {
    message: "O número de telefone deve ter pelo menos 10 dígitos.",
  }),
  fixedJob: z.boolean().optional(),
  days: z.array(z.string()).min(1, "Selecione pelo menos um dia"),
  periods: z.array(z.string()).min(1, "Selecione pelo menos um período"),
  vehicleType: z.enum(["BIKE", "MOTO", "CARRO"], {
    errorMap: () => ({ message: "Selecione o tipo de veículo" }),
  }),
  plate: z.string().optional(),
  model: z.string().min(2, "Informe o modelo do veículo").optional(),
  engineCc: z.preprocess((val) => Number(val), z.number().min(50).optional()),
  expectations: z.string().optional(),
});
