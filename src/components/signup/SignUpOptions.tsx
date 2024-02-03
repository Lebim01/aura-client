"use client";
import React from "react";

import SocialButton from "../common/SocialButton";
import Separator from "../common/Separator";
import ButtonCommon from "../common/ButtonCommon";
import { useRouter } from "next/router";
const SignUpOptions = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-[16px] w-full">
      <ButtonCommon
        text="REGISTRO CON CORREO ELECTRÓNICO"
        disabled={false}
        onClick={() => router.push("/signup?step=form")}
      />
      <Separator />
      <SocialButton
        icon="/login/icons/google.svg"
        textcolor="text-black text-opacity-50"
        text="Continue with Google"
        background="bg-white"
      />

      <SocialButton
        icon="/login/icons/facebook.svg"
        textcolor="text-white"
        text="Continue with Facebook"
        background="bg-blue-facebook"
      />

      <SocialButton
        icon="/login/icons/apple.svg"
        textcolor="text-white"
        text="Continue with Apple"
        background="bg-black"
      />
    </div>
  );
};

export default SignUpOptions;
