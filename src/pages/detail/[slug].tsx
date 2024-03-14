import React, { useState, useEffect, useMemo } from "react";
import Footer from "@/components/common/Footer";
import Large from "@/components/detail/HeaderDetail/Large";
import Tabs from "@/components/detail/Tabs";
import Sinopsis from "@/components/detail/Sinopsis";
import Cast from "@/components/detail/Cast";
import Reviews from "@/components/detail/Reviews";
import { GetStaticPaths, GetStaticProps } from "next";
import { Actor, Genre, Serie, Platform, Crew } from "@/types/series";
import DesktopLayout from "@/components/common/DesktopLayout";
import Separator from "@/components/common/Separator";
import axiosInstance from "@/services";
import { getSerieBySlug } from "@/services/series";
import TrailerModal from "@/components/detail/HeaderDetail/TrailerModal";
import AuthProvider from "@/components/common/ProtectAuth";
import { Video } from "@/types/video";
import VideoReviews from "@/components/detail/VideoReviews";
import useIsMobile from "@/hooks/useIsMobile";

type Tabs = "credits" | "reviews" | "video";

type Props = {
  serie: string;
  genres: Genre[];
  platforms: Platform[];
  actors: Actor[];
  crew: Crew[];
  videos: Video[];
};

export default function Detail({
  serie: _serie,
  genres,
  platforms,
  actors,
  crew,
  videos,
}: Props) {
  const isMobile = useIsMobile();
  const [serie, setSerie] = useState<Serie>(JSON.parse(_serie));
  const [tab, setTab] = useState<Tabs>("credits");
  const [openTrailer, setOpenTrailer] = useState(false);

  useEffect(() => {
    setSerie(JSON.parse(_serie));
  }, [_serie]);

  return (
    <AuthProvider>
      <DesktopLayout isMobile={isMobile}>
        <div className="flex flex-col h-auto w-full md:w-screen gap-y-[32px] md:px-[16px] pb-[100px]">
          <div className="flex flex-col gap-y-[24px] flex-1">
            {/* Cards */}

            <Large
              serie={serie}
              genres={genres}
              openTrailer={() => setOpenTrailer(true)}
            />
            {/*tab === "reviews" && <Middle serie={serie} genres={genres} />*/}
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
            {videos.length > 0 && <Tabs option={tab} setTab={setTab} />}
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
            {tab === "video" && <VideoReviews videos={videos} />}
          </div>
        </div>
      </DesktopLayout>
      <Footer />
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

export const getStaticProps = (async (context) => {
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
      isMobile: false,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<Props>;
