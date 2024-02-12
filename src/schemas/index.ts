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

export const RegisterSchema = z.object({
  email: z.string({
    invalid_type_error: "Must be a string"
  }).email({
    message: "Email is required"
  }),
  username: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(6, {
    message: "Minimun 6 characters required"
  }),
  confirmPassword: z.string().min(6, {
    message: "Minimun 6 characters required"
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  surname: z.string().min(1, {
    message: "Name is required",
  }),
  date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  image: z.optional(z.string())
})