import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string({
    invalid_type_error: "Must be a string"
  }).email({
    message: "No has introducido el correo"
  }),
  password: z.string().min(1, {
    message: "La contraseña es requerida"
  }),
})

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
}

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Requerido.",
  }),
  email: z.string().email({
    message: "Formato del correo invalido.",
  }),
  password: z.string().min(8, {
    message: "mínimo 8 caracteres.",
  }).max(16, {
    message: "máximo 16 caracteres.",
  }),
  confirmPassword: z.string().min(8, {
    message: "mínimo 8 caracteres.",
  }).max(16, {
    message: "máximo 16 caracteres.",
  }),
  name: z.string().min(1, {
    message: "Nombre requerido.",
  }),
  surname: z.string().min(1, {
    message: "Apellido requerido",
  }),
})
