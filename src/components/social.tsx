"use client"

import InstagramIcon from "@/components/socialIcons/InstagramIcon";
import GoogleIcon from "@/components/socialIcons/GoogleIcon";
import TwitterIcon from "@/components/socialIcons/TwitterIcon";
import AppleIcon from "@/components/socialIcons/AppleIcon";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "instagram" | "twitter" | "apple") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex gap-3 justify-center">
      {/* <Button
        onClick={() => onClick("instagram")}
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <InstagramIcon className="size-6" />
      </Button> */}
      <Button
        onClick={() => onClick("google")}
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <GoogleIcon className="size-6" />
      </Button>
      <Button
        onClick={() => onClick("twitter")}
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <TwitterIcon className="size-6 text-white" />
      </Button>
      {/* <Button
        onClick={() => onClick("apple")}
        type="button"
        className="bg-darkSecondary hover:bg-dark hover:shadow-xl"
      >
        <AppleIcon className="size-6" />
      </Button> */}
    </div>
  );
};

export default Social;
