"use client";
import React, { useState, useEffect } from "react";
import Input from "../common/InputRegister";
import Separator from "../common/Separator";
import ButtonCommon from "../common/ButtonCommon";
import Select from "../common/Select";
import useUserRegistrationStore from "@/store/userRegistrationStore";
import { useRouter } from "next/router";
import PasswordFeedback from "../common/PasswordFeedback";
import InputPassword from "../common/InputPassword";

const SignUpForm = () => {
  const { userData, setUserField } = useUserRegistrationStore();
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setDisabled(() => {
      return !(
        Object.values(userData)
          .slice(0, -1)
          .every((value) => value.trim() !== "") &&
        userData.pass === userData.confirm_pass
      );
    });
  }, [userData]);

  return (
    <div className="flex w-full gap-y-[24px] flex-col ">
      <span className="font-[600] leading-[150%]">
        ¿Cuál es tu fecha de nacimiento?
      </span>
      <div className="flex gap-x-[8px]">
        <Select type="Mes" name="month" />
        <Select type="Dia" name="day" />
        <Select type="Año" name="year" />
      </div>
      <Input
        icon="/login/icons/mail"
        placeholder="CORREO ELECTRÓNICO"
        name="mail"
      />
      <PasswordFeedback
        pass={userData.pass}
        confirm_pass={userData.confirm_pass}
      />
      <InputPassword
        LeftIcon="/login/icons/lock"
        value={userData.pass}
        onChange={(value) => {
          setUserField("pass", value);
        }}
        placeholder="CONTRASEÑA"
        name="pass"
      />
      <InputPassword
        LeftIcon="/login/icons/lock"
        value={userData.confirm_pass}
        onChange={(value) => {
          console.log("change", value);
          setUserField("confirm_pass", value);
        }}
        placeholder="REPETIR CONTRASEÑA"
        name="confirm_pass"
      />

      <Separator />

      <ButtonCommon
        text="CONTINUAR"
        disabled={disabled}
        onClick={() => {
          router.push("/signup?step=username");
        }}
      />
    </div>
  );
};

export default SignUpForm;
