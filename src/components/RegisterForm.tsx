"use client";

import {useState, useTransition} from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Social from "@/components/social";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [passMatch, setPassMatch] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      surname: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setPassMatch("")
    setError("")
    setSuccess("")
    console.log(values)
    if (values.password !== values.confirmPassword) {
      return setPassMatch("No coinciden las contraseñas");
    }
    console.log("Usuario creado")
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-between w-full sm:w-2/3 lg:w-1/2  px-4 py-16 h-full">
        <h1 className="text-center text-3xl md:text-4xl">Registro</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Nombre de usuario</FormLabel> <FormMessage className="place-self-end leading-none"/></div>
              <FormControl>
                <Input placeholder="Example" {...field} />
              </FormControl>
              
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Correo</FormLabel> <FormMessage className="place-self-end leading-none"/></div>
              <FormControl>
                <Input type="email" placeholder="ejemplo@gmail.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Contraseña</FormLabel> <FormMessage className="place-self-end leading-none"/></div>
              <FormControl>
                <Input type="password" placeholder="*******" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Confirmar Contraseña</FormLabel> <FormMessage className="place-self-end leading-none">{passMatch}</FormMessage></div>
              <FormControl>
                <Input type="password" placeholder="*******" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Nombre</FormLabel> <FormMessage className="place-self-end leading-none"/></div>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex justify-between"><FormLabel>Apellido</FormLabel> <FormMessage className="place-self-end leading-none"/></div>
              <FormControl>
                <Input placeholder="Apellido" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant={"custom"} className="w-full bg-darkSecondary hover:bg-darkSecondary/80 text-white dark:bg-yellowB4 dark:hover:bg-yellowB4/80 dark:text-dark font-semibold self-end">Registrar</Button>
        <div className="flex items-center gap-2">
            <hr className="flex-grow border-dark dark:border-white"/>
            <span className="">O continua con</span>
            <hr className="flex-grow border-dark dark:border-white"/>
        </div>
        <Social />
        <p className="text-pretty text-center">Ya eres miembro? <Link className="text-dark dark:text-white dark:hover:text-yellowB4/80 underline transition-all hover:text-yellowB4" href={'/auth/login'}>Inicia sesión</Link></p>
      </form>
    </Form>
  );
};

export default RegisterForm;
