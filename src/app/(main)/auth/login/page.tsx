import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <section className="w-full min-h-[96vh] h-[96vh] md:min-h-[88vh] md:h-[88vh] flex justify-center md:justify-between">
      <div className="hidden md:flex md:w-1/2 h-full bg-[url('/login-banner.webp')] bg-cover bg-center">
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
