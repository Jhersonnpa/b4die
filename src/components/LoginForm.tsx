"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InstagramIcon from "./socialIcons/InstagramIcon";
import GoogleIcon from "./socialIcons/GoogleIcon";
import TwitterIcon from "./socialIcons/TwitterIcon";
import AppleIcon from "./socialIcons/AppleIcon";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-between w-full p-4">
        <h1 className="text-center text-3xl">Inicia sesión</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href={'/auth/newPassword'}><Button variant={"link"} className="p-0 ali">Se te olvido la contraseña?</Button></Link>
        <Button type="submit" variant={"custom"} className="w-full bg-darkSecondary text-white dark:bg-yellowB4 dark:text-dark font-semibold self-end">Entrar</Button>
        <div className="flex items-center gap-2">
            <hr className="flex-grow"/>
            <span className="">O continua con</span>
            <hr className="flex-grow"/>
        </div>
        <div className="w-full flex gap-3 justify-center">
          <Button type="button" className="bg-darkSecondary"><InstagramIcon className="size-6" /></Button>
          <Button type="button" className="bg-darkSecondary"><GoogleIcon className="size-6" /></Button>
          <Button type="button" className="bg-darkSecondary"><TwitterIcon className="size-6 text-white" /></Button>
          <Button type="button" className="bg-darkSecondary"><AppleIcon className="size-6" /></Button>
        </div>
        <p className="text-pretty text-center">No eres un miembro? <Link className="text-yellowB4/80 hover:underline transition-all hover:text-yellowB4" href={'/auth/register'}>Regístrate ahora</Link></p>
      </form>
    </Form>
  );
};

export default LoginForm;
