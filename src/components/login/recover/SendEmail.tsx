"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import ButtonCommon from "@/components/common/ButtonCommon";
import InputReturn from "../../common/InputReturn";
import { useRouter } from "next/router";
const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setDisabled(() => (email !== "" ? false : true));
  }, [email]);

  return (
    <div className="flex flex-col gap-y-[32px] w-full text-center">
      <span className="text-[18px] font-[500] leading-[150%]">
        Le enviaremos instrucciones sobre cómo restablecer su contraseña por
        correo electrónico.
      </span>
      <div className="flex flex-col gap-y-[16px]">
        <InputReturn
          icon="/login/icons/mail"
          placeholder="INGRESA TU CORREO ELECTRÓNICO"
          type="text"
          name="mail"
          value={email}
          onChange={handleInputChange}
        />
        <ButtonCommon
          text="ENVIAR"
          disabled={disabled}
          onClick={() => {
            router.push("login?step=checkemail");
          }}
        />
      </div>
    </div>
  );
};

export default SendEmail;
