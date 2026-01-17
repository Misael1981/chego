import z from "zod";

export const basicInfoStepSchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário deve ter pelo menos 2 caracteres.",
  }),
  phone: z.string().min(10, {
    message: "O número de telefone deve ter pelo menos 10 dígitos.",
  }),
  fixedJob: z.boolean().optional(),
});
