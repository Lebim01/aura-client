import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import Large from "@/components/detail/HeaderDetail/Large";
import Tabs from "@/components/detail/Tabs";
import Sinopsis from "@/components/detail/Sinopsis";
import Cast from "@/components/detail/Cast";
import Middle from "@/components/detail/HeaderDetail/Middle";
import Reviews from "@/components/detail/Reviews";
import { api } from "@/hooks/axios";
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from "next";
import { Actor, Genre, Movie, Platform } from "@/types/movies";
import DesktopLayout from "@/components/common/DesktopLayout";

type Tabs = "credits" | "reviews" | "video";

type Props = {
  movie: Movie;
  genres: Genre[];
  platforms: Platform[];
  actors: Actor[];
};

export default function Detail({ movie, genres, platforms, actors }: Props) {
  const [tab, setTab] = useState<Tabs>("credits");

  return (
    <DesktopLayout>
      <div className="flex flex-col h-custom-screen-min w-screen h-fit bg-black-0D gap-y-[32px] hidescroll">
        <div className="flex flex-col gap-y-[32px] flex-1">
          {/* Cards */}
          {tab === "credits" && <Large movie={movie} genres={genres} />}
          {tab === "reviews" && <Middle movie={movie} genres={genres} />}

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

          {tab === "credits" && (
            <Sinopsis movie={movie} actors={actors} platforms={platforms} />
          )}
          {tab === "credits" && (
            <span className="text-[12px] font-[700] px-[16px]">Reparto</span>
          )}
          {tab === "credits" && <Cast actors={actors} />}
          {tab === "reviews" && <Reviews />}
        </div>
        <Footer />
      </div>
    </DesktopLayout>
  );
}

export const getStaticPaths = (async () => {
  const res = await api.get(`/movies/all-slugs`);
  return {
    paths: res.data.map((slug: string) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const slug = context?.params?.slug || "";
  const movie_result = await api.get(`/movies/slug/${slug}`);
  return {
    props: {
      movie: movie_result.data.movie,
      genres: movie_result.data.genres,
      platforms: movie_result.data.platforms,
      actors: movie_result.data.actors,
    },
  };
}) satisfies GetStaticProps<Props>;
