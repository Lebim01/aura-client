"use client";
import React from "react";
import Welcome from "@/components/login/Welcome";
import HeaderAuth from "@/components/common/HeaderAuth";
import { useRouter } from "next/router";
import SendEmail from "@/components/login/recover/SendEmail";
import CheckEmail from "@/components/login/recover/CheckEmail";
import NewPass from "@/components/login/recover/NewPass";
import PassChanged from "@/components/login/recover/PassChanged";
import Options from "@/components/login/Options";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex w-screen h-custom-screen bg-dark-aura px-[27px] items-center justify-center  bg-aura bg-cover bg-no-repeat md:bg-auradesktop bg-center">
      {router.query.step === "welcome" && <Welcome />}

      <div className="flex flex-col bg-brown-aura py-[40px] px-[16px] gap-y-[32px] w-full items-center rounded-[16px] backdrop-blur-md border border-border-container md:max-w-[368px]">
        <HeaderAuth
          title={
            !router.query.step ||
            Object.keys(router.query.step).length === 0 ||
            router.query.step === "signin"
              ? "iniciar sesión"
              : "Recuperar contraseña"
          }
        />

        {router.query.step === "recover" && <SendEmail />}

        {router.query.step === "checkemail" && <CheckEmail />}

        {router.query.step === "newpass" && <NewPass />}

        {router.query.step === "passchanged" && <PassChanged />}

        {(!router.query.step ||
          Object.keys(router.query.step).length === 0 ||
          router.query.step === "signin") && <Options />}
      </div>
    </div>
  );
}
