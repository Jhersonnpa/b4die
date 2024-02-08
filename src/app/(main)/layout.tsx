import { ModeToggle } from "@/components/modeToggle";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "B4die",
  description: "Encuentra tu deporte favorito y explora tus límites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav><ModeToggle/></nav>
      {children}
    </>
  );
}
