"use client";

import { signIn } from "next-auth/react";

const { Button } = require("@/components/ui/button");

const GoogleLoginButton = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <>
      <Button onClick={handleLoginWithGoogleClick}>Entrar com Google</Button>
    </>
  );
};

export default GoogleLoginButton;
