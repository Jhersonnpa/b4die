"use client";
import { X, Info } from "lucide-react";
import Link from "next/link";
import React from "react";

const AlertEditProfile = () => {
  const handleCloseAlert = () => {
    document.getElementById("alertInfoEditProfile")?.classList.add("hidden");
  };

  return (
    <div
      id="alertInfoEditProfile"
      className="w-full h-[80%] flex justify-between items-center text-dark text-[8px] md:text-sm border border-1 border-dark rounded-sm px-2"
    >
      <span className="flex items-center ">
        <Info className="size-6 md:size-4" />
        <p className="ml-2">
          Para disfrutar de tu experiencia con B4die al 100%, verifica tu
          correo{" "}
          <Link href="/" className="underline hover:text-dark/50 transition">
            aquí
          </Link>
          !
        </p>
      </span>
      <X className="h-4 w-4" onClick={handleCloseAlert} />
    </div>
  );
};

export default AlertEditProfile;
