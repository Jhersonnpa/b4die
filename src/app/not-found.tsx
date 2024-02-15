import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full h-[96vh] md:h-[88vh] flex justify-center items-center flex-col gap-4 bg-[url('/not-found.webp')] bg-center bg-cover bg-no-repeat text-white px-2">
        <h1 className="text-9xl font-bold font-mono mb-4">404</h1>
        <h2 className="text-2xl font-semibold">Huy! Algo salió mal</h2>
        <p className="text-lg">Lo siento, la página que solicitaste no fue encontrada.</p>
        <Link href={"/"}><Button>Volver a Inicio</Button></Link>
      </main>
    </div>
  )
}

export default NotFoundPage