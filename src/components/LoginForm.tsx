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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-between w-full sm:w-3/6 md:w-2/3 p-4">
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
        <Link href={'/auth/newPassword'}><Button type="button" variant={"link"} className="p-0 ali">Se te olvido la contraseña?</Button></Link>
        <Button type="submit" variant={"custom"} className="w-full bg-darkSecondary hover:bg-darkSecondary/80 text-white dark:bg-yellowB4 dark:hover:bg-yellowB4/80 dark:text-dark font-semibold self-end">Entrar</Button>
        <div className="flex items-center gap-2">
            <hr className="flex-grow border-dark dark:border-white"/>
            <span className="">O continua con</span>
            <hr className="flex-grow border-dark dark:border-white"/>
        </div>
        <div className="w-full flex gap-3 justify-center">
          <Button type="button" className="bg-darkSecondary hover:bg-dark hover:shadow-xl"><InstagramIcon className="size-6" /></Button>
          <Button type="button" className="bg-darkSecondary hover:bg-dark hover:shadow-xl"><GoogleIcon className="size-6" /></Button>
          <Button type="button" className="bg-darkSecondary hover:bg-dark hover:shadow-xl"><TwitterIcon className="size-6 text-white" /></Button>
          <Button type="button" className="bg-darkSecondary hover:bg-dark hover:shadow-xl"><AppleIcon className="size-6" /></Button>
        </div>
        <p className="text-pretty text-center">No eres un miembro? <Link className="text-dark dark:text-white dark:hover:text-yellowB4/80 underline transition-all hover:text-yellowB4" href={'/auth/register'}>Regístrate ahora</Link></p>
      </form>
    </Form>
  );
};

export default LoginForm;
