"use client";
import Link from "next/link";

import {
  CircleUserRound,
  CheckCircle2,
  Bookmark,
  HelpCircle,
  LogIn,
  NotebookPen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "@/components/LogoutButton";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function DropdownProfile() {
  const user = useCurrentUser();
  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="custom" size="custom">
            <Avatar className="size-6 text-white">
              <AvatarImage src={`${user.image}`} alt={`Avatar de ${user.name}`}/>
              <AvatarFallback>B4</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 dark:bg-darkSecondary">
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator className="dark:bg-gray-700" />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <CircleUserRound className="mr-2 h-4 w-4" />
              <Link href={`/${user.username}`}>{user.username}</Link>
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
  } else {
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
              <LogIn className="mr-2 h-4 w-4" />
              <Link href={`/auth/login`}>Iniciar sesión</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NotebookPen className="mr-2 h-4 w-4" />
              <Link href={`/auth/register`}>Registrarse</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="dark:bg-gray-700" />
          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <Link href={`/ayuda`}>Ayuda</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
