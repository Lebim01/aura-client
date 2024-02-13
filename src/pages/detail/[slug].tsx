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
import { getMovieBySlug } from "@/utils/neo4j";

type Tabs = "credits" | "reviews" | "video";

type Props = {
  movie: string;
  genres: Genre[];
  platforms: Platform[];
  actors: Actor[];
};

export default function Detail({
  movie: _movie,
  genres,
  platforms,
  actors,
}: Props) {
  const [movie] = useState<Movie>(JSON.parse(_movie));
  const [tab, setTab] = useState<Tabs>("credits");

  return (
    <DesktopLayout>
      <div className="flex flex-col h-custom-screen-min w-screen h-fit bg-black-0D gap-y-[32px] hidescroll pb-[90px]">
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
            <div className="flex flex-col md:flex-row gap-y-[32px]">
              <Sinopsis movie={movie} actors={actors} platforms={platforms} />
              <div className="flex flex-col gap-y-[16px] md:pt-[32px]">
                <span className="text-[12px] font-[700] px-[16px] md:hidden">
                  Reparto
                </span>

                <Cast actors={actors} />
              </div>
            </div>
          )}

          {tab === "reviews" && <Reviews />}
        </div>
        <Footer />
      </div>
    </DesktopLayout>
  );
}

export const getStaticPaths = (async () => {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await api.get(`/movies/all-slugs`);
  return {
    paths: res.data.map((slug: string) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const slug = context?.params?.slug || "";
  const movie_result = await getMovieBySlug(slug as string);
  return {
    props: {
      movie: JSON.stringify(movie_result.movie),
      genres: movie_result.genres || [],
      platforms: movie_result.platforms || [],
      actors: movie_result.actors || [],
      languages: movie_result.languages || [],
      videos: movie_result.videos || [],
    },
  };
}) satisfies GetStaticProps<Props>;
