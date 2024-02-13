import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full h-fit px-4 py-10 flex flex-col text-white items-center gap-2 bg-[url('/contact-banner.webp')] bg-center bg-no-repeat bg-cover">
        <h1 className="text-7xl font-bold drop-shadow-xl">Hola,</h1>
        <h2 className="text-lg drop-shadow-xl">Cómo te podemos ayudar</h2>
        <Link href={"mailto:b4die@gmail.com"}>
          <Button type="button">b4die@gmail.com</Button>
        </Link>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11944.216716710529!2d2.1053272324348513!3d41.54642414239182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49505f2440cb9%3A0x89ed91813bdf3479!2sSabadell%20Centre!5e0!3m2!1ses!2ses!4v1707823744875!5m2!1ses!2ses"
          height="600"
          className="w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div></div>
    </main>
  );
};

export default ContactPage;
