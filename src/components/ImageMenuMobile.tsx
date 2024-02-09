import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ImageMenuMobile = () => {
  const theme = useTheme();
  
  useEffect(() => {
    return
  }, [theme.theme]);

  return (
    <>
      <Image
        className="aspect-auto w-40 h-16"
        width={178}
        height={65}
        src={theme.theme == "dark" ? "/logo-dark.webp" : "/logomobile.webp"}
        alt="logo B4die"
      />
    </>
  );
};

export default ImageMenuMobile;
