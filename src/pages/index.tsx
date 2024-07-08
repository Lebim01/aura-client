"use client";
import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";
import AuthProvider from "@/components/common/ProtectAuth";
import { GetServerSideProps } from "next";
import { VideoDashboardResponse, getVideosSection } from "@/services/dashboard";
import Link from "next/link";
import Image from "next/image";

import CategoryFilters from "@/components/dashboard/components/filters/CategoryFilters";
import SearchInput from "@/components/dashboard/components/filters/SearchInput";
import HLSPlayer from "@/components/common/HLSPlayer";
import { classNamesCustom } from "@/utils/classes";
import { getSections } from "@/services/sections";

type Props = {
  sections: Section[];
  isMobile: boolean;
};

type Section = {
  name: string;
  slug: string;
  orientation: "vertical" | "horizontal";
  videos: VideoDashboardResponse[];
};

export default function Dashboard({ sections, isMobile }: Props) {
  return (
    <AuthProvider>
      <DesktopLayout isMobile={isMobile}>
        {isMobile && (
          <div className="flex flex-col space-y-[16px]">
            <SearchInput />
            <Link href="/premios">
              <div
                className={classNamesCustom(
                  "rounded-[6px] border border-transparent md:hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer relative overflow-hidden select-none hover:cursor-pointer"
                )}
              >
                <Image
                  src="/bgganadores.jpeg"
                  width={0}
                  height={62}
                  sizes="100vw"
                  style={{ width: "100%", height: 102 }}
                  alt=""
                  className={classNamesCustom("select-none object-cover")}
                />
                <div
                  className="absolute top-0 left-0 h-full w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(56,56,56,0.9) 0%, rgba(32,26,26,0.8) 0%)",
                  }}
                ></div>
                <label className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm hover:cursor-pointer">
                  Premios Auras
                </label>
              </div>
            </Link>
            <CategoryFilters />
          </div>
        )}
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen pb-[99px] relative hidescroll md:max-w-[1056px] pt-[32px] md:pt-0">
          {sections
            .filter((r) => r.orientation == "vertical")
            .filter((r) => r.videos.length > 0)
            .map(({ name, slug, videos }, index) => (
              <VideoCaroussel
                key={slug}
                videos={videos.slice(0, isMobile ? 3 : 3).map((v) => v.hsl)}
                title={name}
                sectionId={slug}
              />
            ))}

          {sections
            .filter((r) => r.orientation == "horizontal")
            .filter((r) => r.videos.length > 0)
            .map(({ name, slug, videos }, index) => (
              <div
                className="flex flex-col gap-y-[8px] relative p-4"
                key={index}
              >
                <div className="flex justify-between">
                  <label className="text-[16px] font-[600] leading-[150%]">
                    {name}
                  </label>
                  <Link
                    href={"/sections/" + slug}
                    className="flex gap-x-[4px] items-center hover:underline"
                  >
                    <span className="text-[12px] leading-[150%] ">
                      Ver todo
                    </span>

                    <Image
                      src={"/icons/arrow-right.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                </div>
                <HLSPlayer
                  loop
                  playsInline
                  webkit-playsinline="true"
                  controls
                  muted
                  className={classNamesCustom(
                    "cursor-pointer object-contain",
                    "aspect-video w-auto h-auto"
                  )}
                  manifest={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videos[0].hsl}/manifest/video.m3u8`}
                  poster={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videos[0].hsl}/thumbnails/thumbnail.jpg?time=2s&height=600`}
                />
              </div>
            ))}
        </div>
      </DesktopLayout>
      <Footer />
    </AuthProvider>
  );
}

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  const sections = await getSections();
  const sections_with_videos = [];
  for (const sec of sections) {
    sections_with_videos.push({
      name: sec.name,
      slug: sec.slug,
      orientation: sec.orientation as "vertical" | "horizontal",
      videos: await getVideosSection(sec.slug),
    });
  }

  return { props: { sections: sections_with_videos, isMobile } };
}) satisfies GetServerSideProps<Props>;
