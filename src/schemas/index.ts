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
    message: "Nombre de usuario requerido.",
  }),
  email: z.string().email({
    message: "El formato del correo es incorrecto",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe ser como mínimo de 8 caracteres.",
  }).max(16, {
    message: "La contraseña debe ser como máximo de 16 caracteres.",
  }),
  confirmPassword: z.string().min(8, {
    message: "La contraseña debe ser como mínimo de 8 caracteres.",
  }).max(16, {
    message: "La contraseña debe ser como máximo de 16 caracteres.",
  }),
  name: z.string().min(1, {
    message: "El nombre es requerido.",
  }),
  surname: z.string().min(1, {
    message: "El apellido es requerido",
  }),
})
