import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("O nome de usuário é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "São necessários pelo menos oito caracteres")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
    .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
    .regex(/[0-9]+/, "É necessário pelo menos um número"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatória"),
    bio: z.string().nonempty("A sua bio é obrigatória"),
    contact: z.string().nonempty("Insira um meio de contato,é obrigatório"),
    course_module:z.string().nonempty("Insira qual modulo você deseja"),
}).refine(({password , confirmPassword})=> password === confirmPassword , {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
})