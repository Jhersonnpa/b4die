import LoginForm from "@/components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="w-full h-[96vh] flex justify-center md:justify-between items-center">
      <div className="hidden md:flex">
        <Image
          src={`/login-banner.webp`}
          width={334}
          height={500}
          alt="Login Image"
          className="aspect-auto w-full h-full"
        />
      </div>

      <div
        className="w-full h-full"
        style={{
          background: "url(/login-banner.webp) top center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 w-full h-full flex justify-center items-center">
          <LoginForm/>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
