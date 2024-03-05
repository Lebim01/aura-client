"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/components/signup/Loader";
import HaveAccount from "@/components/common/HaveAccount";
import SignUpOptions from "@/components/signup/SignUpOptions";
import SignUpForm from "@/components/signup/SignUpForm";
import OTP from "@/components/signup/OTP";
import UserName from "@/components/signup/UserName";
import Success from "@/components/signup/Success";
import { useRouter } from "next/router";
import HeaderAuth from "@/components/common/HeaderAuth";
import { useSession } from "next-auth/react";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status == "authenticated") {
      router.replace("/dashboard");
    }
  }, [status]);

  return (
    <div className="flex w-screen h-custom-screen bg-dark-aura px-[27px] items-center justify-center bg-aura bg-cover bg-no-repeat md:bg-auradesktop  bg-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col bg-brown-aura py-[40px] px-[16px] gap-y-[32px] w-full items-center rounded-[16px] backdrop-blur-md border border-border-container md:max-w-[368px]">
          <HeaderAuth title="Registro" />
          <div className="flex flex-col gap-y-[24px] w-full">
            {(!router.query.step ||
              Object.keys(router.query.step).length === 0 ||
              router.query.step === "options") && <SignUpOptions />}
            {router.query.step === "form" && <SignUpForm />}
            {router.query.step === "otp" && <OTP />}
            {router.query.step === "username" && <UserName />}
            {router.query.step === "success" && <Success />}
            {router.query.step !== "success" && (
              <HaveAccount
                question="¿Ya tienes una cuenta?"
                hide_question={false}
                sub_question="Ingresa aquí"
                url="/login"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
