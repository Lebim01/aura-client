"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ButtonCommon from "@/components/common/ButtonCommon";
import Footer from "@/components/common/Footer";
import Large from "@/components/detail/HeaderDetail/Large";
import Tabs from "@/components/detail/Tabs";
import Sinopsis from "@/components/detail/Sinopsis";
import Cast from "@/components/detail/Cast";
import Middle from "@/components/detail/HeaderDetail/Middle";
import Reviews from "@/components/detail/Reviews";
import { api } from "@/hooks/axios";
import MovieCardSkeleton from "@/components/detail/Skeleton/MovieCardSkeleton";
import SinopsisSkeleton from "@/components/detail/Skeleton/SinopsisSkeleton";
import TabsSkeleton from "@/components/detail/Skeleton/TabsSkeleton";
import ButtonSkeleton from "@/components/detail/Skeleton/ButtonSkeletoon";

type Tabs = "credits" | "reviews" | "video";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [tab, setTab] = useState<Tabs>("credits");
  const [movie, setMovie] = useState<any>({});

  const getMovie = async (slug:string) => {
    try {
      const movie_result = await api.get(
        `/movies/slug/${slug}`
      );
      setMovie(movie_result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    if(router && router.query.uuid){
      getMovie(router.query.uuid.toString())
    }
  },[router])

  useEffect(()=>{
    console.log(movie)
  },[movie])

  return (
    <div className="flex flex-col h-custom-screen-min w-screen h-fit bg-black-0D gap-y-[32px] hidescroll">
      <div className="flex flex-col gap-y-[32px] flex-1">
        {/* Cards */}
        {loading && <MovieCardSkeleton/>}
        {tab === "credits" && !loading && <Large props={movie} />}
        {tab === "reviews" && !loading && <Middle props={movie}/>}

       {/*  {!loading && <Tabs option={tab} setTab={setTab} />}
        {loading && <TabsSkeleton/>}
        <div className="px-[16px]">
          {!loading && <ButtonCommon
            text="AÑADIR A LISTA"
            onClick={() => {}}
            disabled={false}
          />}
          {loading && <ButtonSkeleton/>}
        </div> */}

        {loading && <SinopsisSkeleton/>}
        {tab === "credits" && !loading && <Sinopsis props={movie}/>}
        {tab === "credits" && !loading && (
          <span className="text-[12px] font-[700] px-[16px]">Reparto</span>
        )}
        {tab === "credits" && !loading && <Cast props={movie}/>}
        {tab === "reviews" && !loading && <Reviews />}
      </div>
      <Footer />
    </div>
  );
}
