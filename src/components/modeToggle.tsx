"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="custom" size="custom">
          <Sun className="text-dark/80 hover:text-dark/40 h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="text-dark/80 hover:text-dark/40 absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-darkSecondary">
        <DropdownMenuItem
          className="dark:hover:bg-slate-700 hover:bg-yellowB4/90 mb-1"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <Separator className="dark:bg-slate-700/50" />
        <DropdownMenuItem
          className="dark:hover:bg-slate-700 hover:bg-yellowB4/90 my-1"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <Separator className="dark:bg-slate-700/50" />
        <DropdownMenuItem
          className="dark:hover:bg-slate-700 hover:bg-yellowB4/90 mt-1"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
