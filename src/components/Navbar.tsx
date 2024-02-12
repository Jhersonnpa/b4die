import { ModeToggle } from "@/components/modeToggle";
import Link from "next/link";
import { DropdownProfile } from "@/components/DropdownProfile";
import { CommandSearch } from "@/components/CommandSearch";
import { MenuMobile } from "@/components/MenuMobile";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full flex-col">
      <div className="w-full h-[4vh] bg-yellowB4 text-dark flex items-center justify-between md:justify-end space-x-4 px-2">
        <div className="h-full flex items-center justify-center md:hidden">
          <MenuMobile />
        </div>
        <div className="h-full flex items-center justify-center gap-2">
          <CommandSearch />
          <DropdownProfile />
          <ModeToggle />
        </div>
      </div>

      <div className="w-full h-[8vh] hidden bg-white text-dark/75 font-medium hover: md:flex justify-around items-center space-y-2">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/logo.webp"}
              alt="Logo"
              className="aspect-auto"
              width={148}
              height={75}
            />
          </Link>
        </div>

        <nav className="flex items-center justify-center">
          <ul className="w-full flex justify-center items-center transition-opacity gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-dark relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experiencias"
                className="hover:text-dark relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Experiencias
              </Link>
            </li>
            <li>
              <Link
                href="/ranking"
                className="hover:text-dark relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Ranking
              </Link>
            </li>
            <li>
              <Link
                href="/mapa"
                className="hover:text-dark relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Mapa
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="hover:text-dark relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
