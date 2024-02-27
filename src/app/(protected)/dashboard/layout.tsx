"use client"
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useCurrentUser()
  const router = useRouter()
  if (user?.role !== "ADMIN") return router.push("/") 
  return (
    <div>{children}</div>
  );
}
