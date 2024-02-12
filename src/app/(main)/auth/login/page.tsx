import LoginForm from "@/components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="w-full h-[96vh] md:h-[88vh] flex justify-center md:justify-between items-center">
      <div className="hidden md:flex md:w-1/2 h-full">
        <Image
          src={`/login-banner.webp`}
          width={334}
          height={500}
          alt="Login Image"
          className="aspect-auto w-full h-full bg-containt"
        />
      </div>

      <div className="w-full h-full bg-[url('/login-banner.webp')] md:bg-none md:w-1/2 bg-center bg-no-repeat bg-cover">
        <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 w-full h-full flex justify-center items-center dark:bg-darkSecondary/30 bg-white/60">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
