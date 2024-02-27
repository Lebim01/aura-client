import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import Large from "@/components/detail/HeaderDetail/Large";
import Tabs from "@/components/detail/Tabs";
import Sinopsis from "@/components/detail/Sinopsis";
import Cast from "@/components/detail/Cast";
import Middle from "@/components/detail/HeaderDetail/Middle";
import Reviews from "@/components/detail/Reviews";
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from "next";
import { Actor, Genre, Serie, Platform, Crew } from "@/types/series";
import DesktopLayout from "@/components/common/DesktopLayout";
import { getSerieBySlug } from "@/utils/neo4j";
import Separator from "@/components/common/Separator";
import axiosInstance from "@/services";

type Tabs = "credits" | "reviews" | "video";

type Props = {
  serie: string;
  genres: Genre[];
  platforms: Platform[];
  actors: Actor[];
  crew: Crew[];
};

export default function Detail({
  serie: _serie,
  genres,
  platforms,
  actors,
  crew
}: Props) {
  const [serie] = useState<Serie>(JSON.parse(_serie));
  const [tab, setTab] = useState<Tabs>("credits");

  return (
    <DesktopLayout>
      <div className="flex flex-col h-screen w-screen gap-y-[32px] hidescroll pb-[90px] overflow-y-auto">
        <div className="flex flex-col gap-y-[32px] flex-1">
          {/* Cards */}
          {tab === "credits" && <Large serie={serie} genres={genres} />}
          {tab === "reviews" && <Middle serie={serie} genres={genres} />}
          <div className="px-[16px]">
            <Separator />
          </div>
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
              <Sinopsis serie={serie} actors={actors} platforms={platforms} crew={crew} />
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

  const res = await axiosInstance.get(`/series/all-slugs`);
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
  const serie_result = await getSerieBySlug(slug as string);
  return {
    props: {
      serie: JSON.stringify(serie_result.serie),
      genres: serie_result.genres || [],
      platforms: serie_result.platforms || [],
      actors: serie_result.actors || [],
      crew: serie_result.crew || [],
      languages: serie_result.languages || [],
      videos: serie_result.videos || [],
    },
  };
}) satisfies GetStaticProps<Props>;
