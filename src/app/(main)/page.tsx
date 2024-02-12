import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="w-full min-h-52 h-52 md:min-h-[60vh] drop-shadow-sm flex items-center justify-center" style={{background: 'url(/banner.webp) top center no-repeat', backgroundSize: 'cover'}}>
        <div className="w-[95%] p-2 text-pretty bg-dark/5 rounded-sm flex flex-col gap-2">
          <h1 className="text-white text-extrabold text-2xl md:text-5xl drop-shadow-2xl">La experiencia que siempre has <span className="text-yellowB4">deseado</span></h1>
          <p className="text-white/95 md:text-2xl">No pierdas más tiempo y adentrate a tus aventuras llenas de adrenalina.</p>
          <Link href={'/experiencias'} className="mx-auto"><Button variant={"custom"} size={"sm"} className="bg-yellowB4 dark:bg-dark  text-dark dark:text-white font-bold dark:hover:bg-darkSecondary transition-all md:px-10 md:py-6 md:text-lg">Explora</Button></Link>
        </div>
      </section>
    </main>
  );
}
