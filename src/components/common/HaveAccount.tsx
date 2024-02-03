"use client";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  question: string;
  hide_question: boolean;
}

const HaveAccount = ({ question, hide_question }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-[16px] items-center justify-center leading-[120%] text-[14px]">
      {hide_question && (
        <span
          className="underline cursor-pointer"
          onClick={() => router.push("/login?step=recover")}
        >
          ¿Olvidaste tu contraseña?
        </span>
      )}
      <div className="flex gap-x-[5px]">
        <span>{question}</span>{" "}
        <span className="underline">Registrate aquí</span>
      </div>
    </div>
  );
};

export default HaveAccount;
