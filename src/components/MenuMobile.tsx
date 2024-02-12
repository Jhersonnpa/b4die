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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          {/* <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription> */}
        </SheetHeader>

        <div className="w-full my-14">
          <ul className="w-full flex flex-col transition-opacity gap-6">
            <li>
              <Link href="/" className="md:hover:text-dark relative w-fit ">
                Home
              </Link>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="py-0">
                    <Link
                      href="/experiencias"
                      className="md:hover:text-dark relative w-fit "
                    >
                      Experiencias
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <Link
                                href="/experiencias/aereo"
                                className="md:hover:text-dark relative w-fit "
                              >
                                <li className="ml-2">Aéreo</li>
                              </Link>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul>
                                <li className="ml-4 py-1">
                                  <Link href="/experiencias/paracaidismo">
                                    Paracaidismo
                                  </Link>
                                </li>
                                <li className="ml-4 py-1">
                                  <Link href="/experiencias/aladelta">
                                    Ala delta
                                  </Link>
                                </li>
                                <li className="ml-4 py-1">
                                  <Link href="/experiencias/parapente">
                                    Parapente
                                  </Link>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <Link
                                href="/experiencias/terrestre"
                                className="md:hover:text-dark relative w-fit "
                              >
                                <li className="ml-2">Terrestre</li>
                              </Link>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul>
                                <li className="ml-4 py-1">Senderismo</li>
                                <li className="ml-4 py-1">Alpinismo</li>
                                <li className="ml-4 py-1">Tirolina</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <Link
                                href="/experiencias/acuatico"
                                className="md:hover:text-dark relative w-fit "
                              >
                                <li className="ml-2">Acuático</li>
                              </Link>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul>
                                <li className="ml-4 py-1">Surf</li>
                                <li className="ml-4 py-1">Kitesurf</li>
                                <li className="ml-4 py-1">Snorkel</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <Link
                                href="/experiencias/viajes"
                                className="md:hover:text-dark relative w-fit "
                              >
                                <li className="ml-2">Viajes</li>
                              </Link>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul>
                                <li className="ml-4 py-1">Gran Cañon</li>
                                <li className="ml-4 py-1">
                                  Piramides de Egipto
                                </li>
                                <li className="ml-4 py-1">
                                  Cataratas del Niagara
                                </li>
                                <li className="ml-4 py-1">Machu Picchu</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Link
                href="/ranking"
                className="md:hover:text-dark relative w-fit "
              >
                Ranking
              </Link>
            </li>
            <li>
              <Link href="/mapa" className="md:hover:text-dark relative w-fit ">
                Mapa
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="md:hover:text-dark relative w-fit "
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="grid gap-4 py-4">
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
        </div> */}
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
