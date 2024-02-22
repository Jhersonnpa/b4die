"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const user = useCurrentUser();

  useEffect(() => {
    // Funcion async para verificar si falta algun campo
    const checkMissingFields = async () => {
      try{
        // Aquí puedes agregar la lógica para verificar campos faltantes en el usuario
        const areFieldsMissing = user ; // Ejemplo, ajusta según tu lógica
        console.log(user)
        // Abre el diálogo solo si hay campos faltantes
        setIsDialogOpen(areFieldsMissing);
      } catch(err){
        console.error("Error al verificar campos faltantes:", err);
      }
    };
    // Llama a la función para verificar campos faltantes
    checkMissingFields();

    setIsDialogOpen(true);
  }, [user]); // Ejecuta al montar el componente y cuando cambie la información del usuario

  const handleIrClick = () => {
    setIsDialogOpen(false); // Cierra el diálogo
    // href cuando le de al boton "Ir", enviar a perfil
  };

  const handleAhoraNoClick = () => {
    setIsDialogOpen(false);
  };

  return (
    <main className="w-full h-full">
      {
        user && !user.surname && !user.email && !user.image && !user.birthDate && !user.country && !user.phone ? (
          <AlertDialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Perfil incompleto!</AlertDialogTitle>
                <AlertDialogDescription>
                  Dirígete al perfil para terminar de rellenar todos tus datos y
                  poder disfrutar de <b>B4die</b> al máximo.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleAhoraNoClick}>Ahora no</AlertDialogCancel>
                <AlertDialogAction onClick={handleIrClick}>Ir</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <></>
        )
      }

      <section className="w-full min-h-52 h-52 md:min-h-[60vh] drop-shadow-sm flex items-center justify-center md:justify-normal lg:px-28 bg-[url('/home-banner4.webp')] bg-center bg-cover bg-no-repeat">
        <div className="w-[95%] md:w-[50%] p-2 lg:p-6 text-pretty bg-dark/55 rounded-sm flex flex-col gap-2">
          <h1 className="text-white text-extrabold text-2xl md:text-5xl drop-shadow-2xl text-center">
            La experiencia que siempre has{" "}
            <span className="text-yellowB4">deseado</span>
          </h1>
          <p className="text-white/95 md:text-2xl">
            No pierdas más tiempo y adentrate a tus aventuras llenas de
            adrenalina.
          </p>
          <Link href={"/experiencias"} className="mx-auto">
            <Button
              variant={"custom"}
              size={"sm"}
              className="bg-yellowB4 dark:bg-dark  text-dark dark:text-white font-bold dark:hover:bg-darkSecondary transition-all md:px-10 md:py-6 md:text-lg"
            >
              Explora
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
