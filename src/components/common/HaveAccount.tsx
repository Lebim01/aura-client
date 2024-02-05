"use client";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  question: string;
  sub_question: string;
  url: string;
  hide_question: boolean;
}

const HaveAccount = ({ question, hide_question, sub_question, url }: Props) => {
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
        <Link href={url} className="underline w-fit">
          {sub_question}
        </Link>
      </div>
    </div>
  );
};

export default HaveAccount;
