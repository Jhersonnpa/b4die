"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ImageMenuMobile from "@/components/ImageMenuMobile";

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="custom" size="custom">
          <AlignLeft />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="dark:bg-dark overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="mx-auto">
            <Link
              href={"/"}
              onClick={() =>
                document.getElementById("close-menu-responsive")?.click()
              }
            >
              <ImageMenuMobile />
            </Link>
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
