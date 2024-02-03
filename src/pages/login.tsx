"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import InputReturn from "@/components/common/InputReturn";
import Welcome from "@/components/login/Welcome";
import HaveAccount from "@/components/common/HaveAccount";
import SocialButton from "@/components/common/SocialButton";
import Separator from "@/components/common/Separator";
import ButtonCommon from "@/components/common/ButtonCommon";
import HeaderAuth from "@/components/common/HeaderAuth";
import { useRouter } from "next/router";
import SendEmail from "@/components/login/recover/SendEmail";
import CheckEmail from "@/components/login/recover/CheckEmail";
import NewPass from "@/components/login/recover/NewPass";
import PassChanged from "@/components/login/recover/PassChanged";

interface UserData {
  mail: string;
  pass: string;
}

const UserDataINIT = {
  mail: "",
  pass: "",
};

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState<UserData>(UserDataINIT);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const areValuesEmpty = Object.values(data).some(
      (value) => value.trim() === ""
    );
    setDisabled(areValuesEmpty);
  }, [data]);

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
          router.query.step === "signin") && (
          <div className="flex flex-col gap-y-[24px] w-full">
            <div className="flex flex-col gap-y-[16px] w-full">
              <InputReturn
                icon={"/login/icons/mail"}
                placeholder="CORREO ELECTRÓNICO"
                name="mail"
                value={data["mail"]}
                onChange={handleChange}
              />
              <InputReturn
                icon={"/login/icons/lock"}
                placeholder="CONTRASEÑA"
                name="pass"
                value={data["pass"]}
                type="password"
                onChange={handleChange}
              />

              <ButtonCommon
                text="INGRESAR"
                disabled={disabled}
                onClick={() => {}}
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
            <HaveAccount
              question="¿Aún no tienes cuenta?"
              hide_question={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
