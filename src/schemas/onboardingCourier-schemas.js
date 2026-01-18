import { z } from "zod";

export const onboardingCourierSchema = z
  .object({
    username: z.string().min(2, {
      message: "O nome de usuário deve ter pelo menos 2 caracteres.",
    }),

    phone: z.string().min(10, {
      message: "O número de telefone deve ter pelo menos 10 dígitos.",
    }),

    fixedJob: z.boolean().optional(),

    days: z
      .array(
        z.enum([
          "SUNDAY",
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY",
        ]),
      )
      .min(1, "Selecione ao menos um dia"),

    periods: z
      .array(z.enum(["MORNING", "AFTERNOON", "NIGHT"]))
      .min(1, "Selecione ao menos um período"),

    vehicleType: z.enum(["BIKE", "MOTO", "CARRO"], {
      errorMap: () => ({ message: "Selecione o tipo de veículo" }),
    }),

    plate: z.string().optional(),

    model: z.string().min(2, "Informe o modelo do veículo").optional(),

    engineCc: z.preprocess((val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      return String(val);
    }, z.string().optional()),

    expectations: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.vehicleType !== "BIKE" && !data.plate) {
      ctx.addIssue({
        path: ["plate"],
        message: "Placa é obrigatória para moto ou carro",
        code: z.ZodIssueCode.custom,
      });
    }
  });
