import { ModeToggle } from "@/components/modeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex-col">
      <div className="w-full h-8 bg-yellow-300 text-black flex items-center justify-end space-x-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
        <ModeToggle />
      </div>

      <div className="w-full h-16 bg-white text-black flex">
          <div className="w-1/3 flex items-center justify-center">
            <p>B4die</p>
            {/* Imagen b4die, con link a la pagina principal? */}
          </div>

          <nav className="w-2/3 flex items-center">
            <ul className="w-full flex justify-center">
              <Link href="/" className="px-8">Home</Link>
              <Link href="/experiencias" className="px-8">Experiencias</Link>
              <Link href="/ranking" className="px-8">Ranking</Link>
              <Link href="/mapa" className="px-8">Mapa</Link>
              <Link href="/contacto" className="px-8">Contacto</Link>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;
