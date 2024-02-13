"use client"
import Link from "next/link";

import {
  CircleUserRound,
  CheckCircle2,
  Bookmark,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/LogoutButton";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function DropdownProfile() {
  const user = useCurrentUser();

  if (user) {
    console.log(typeof user);
    console.log(user);
  } else {
    console.log("no existe usuario");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="custom" size="custom">
          <CircleUserRound className="text-dark/80 hover:text-dark/40" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-darkSecondary">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-gray-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleUserRound className="mr-2 h-4 w-4" />
            <Link href="/perfil">Jhersonnpa</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bookmark className="mr-2 h-4 w-4" />
            <Link href={`/guardadas`}>Guardadas</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            <Link href={`/realizadas`}>Realizadas</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="dark:bg-gray-700" />
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          <Link href={`/ayuda`}>Ayuda</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
