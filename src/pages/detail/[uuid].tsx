"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonCommon from "@/components/common/ButtonCommon";
import Footer from "@/components/common/Footer";
import Large from "@/components/detail/HeaderDetail/Large";
import Tabs from "@/components/detail/Tabs";
import Sinopsis from "@/components/detail/Sinopsis";
import Cast from "@/components/detail/Cast";
import Middle from "@/components/detail/HeaderDetail/Middle";
import Reviews from "@/components/detail/Reviews";
type Tabs = "credits" | "reviews" | "video";

export default function Detail() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [tab, setTab] = useState<Tabs>("credits");

  return (
    <div className="flex flex-col h-custom-screen-min w-screen h-fit bg-black-0D gap-y-[32px] hidescroll">
      <div className="flex flex-col gap-y-[32px] flex-1">
        {tab === "credits" && <Large />}
        {tab === "reviews" && <Middle />}
        <Tabs option={tab} setTab={setTab} />
        <div className="px-[16px]">
          <ButtonCommon
            text="AÑADIR A LISTA"
            onClick={() => {}}
            disabled={false}
          />
        </div>
        {tab === "credits" && <Sinopsis />}
        {tab === "credits" && (
          <span className="text-[12px] font-[700] px-[16px]">Reparto</span>
        )}
        {tab === "credits" && <Cast />}
        {tab === "reviews" && <Reviews />}
      </div>
      <Footer />
    </div>
  );
}
