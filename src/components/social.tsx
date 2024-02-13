import InstagramIcon from "@/components/socialIcons/InstagramIcon";
import GoogleIcon from "@/components/socialIcons/GoogleIcon";
import TwitterIcon from "@/components/socialIcons/TwitterIcon";
import AppleIcon from "@/components/socialIcons/AppleIcon";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <div className="w-full flex gap-3 justify-center">
      <Button
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <InstagramIcon className="size-6" />
      </Button>
      <Button
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <GoogleIcon className="size-6" />
      </Button>
      <Button
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <TwitterIcon className="size-6 text-white" />
      </Button>
      <Button
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <AppleIcon className="size-6" />
      </Button>
    </div>
  );
};

export default Social;
