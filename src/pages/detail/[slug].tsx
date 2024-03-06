import React, { useState, useEffect } from "react";
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
import Separator from "@/components/common/Separator";
import axiosInstance from "@/services";
import { getSerieBySlug } from "@/services/series";
import TrailerModal from "@/components/detail/HeaderDetail/TrailerModal";
import AuthProvider from "@/components/common/ProtectAuth";

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
  crew,
}: Props) {
  const [serie, setSerie] = useState<Serie>(JSON.parse(_serie));
  const [tab, setTab] = useState<Tabs>("credits");
  const [openTrailer, setOpenTrailer] = useState(false);

  useEffect(() => {
    setSerie(JSON.parse(_serie));
  }, [_serie]);

  return (
    <AuthProvider>
      <DesktopLayout>
        <div className="flex flex-col h-screen w-screen gap-y-[32px] hidescroll pb-[90px] overflow-y-auto ">
          <div className="flex flex-col gap-y-[24px] flex-1">
            {/* Cards */}
            {tab === "credits" && (
              <Large
                serie={serie}
                genres={genres}
                openTrailer={() => setOpenTrailer(true)}
              />
            )}
            {tab === "reviews" && <Middle serie={serie} genres={genres} />}
            {serie.trailer && openTrailer && (
              <TrailerModal
                url={serie.trailer}
                open={openTrailer}
                close={() => setOpenTrailer(false)}
              />
            )}
            <div className="px-[16px] hidden md:block">
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
                <Sinopsis
                  serie={serie}
                  actors={actors}
                  platforms={platforms}
                  crew={crew}
                />
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
    </AuthProvider>
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
    revalidate: 60,
  };
}) satisfies GetStaticProps<Props>;
