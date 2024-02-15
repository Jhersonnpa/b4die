import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ImageMenuMobile: React.FC = () => {
  const themeProvider = useTheme();
  const [theme, setTheme] = useState<string | undefined>(); // Ajuste destructuring aquí

  useEffect(() => {
    if (themeProvider.theme === "system") {
      setTheme(themeProvider.systemTheme);
    } else {
      setTheme(themeProvider.theme);
    }
  }, [themeProvider.systemTheme, themeProvider.theme]);

  return (
    <>
      <Image
        className="aspect-auto w-40 h-16"
        width={178}
        height={65}
        src={theme === "dark" ? "/logo-dark.webp" : "/logomobile.webp"} // Ajuste aquí
        alt="logo B4die"
      />
    </>
  );
};

export default ImageMenuMobile;
