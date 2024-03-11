import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";
import useIsMobile from "@/hooks/useIsMobile";
import AuthProvider from "@/components/common/ProtectAuth";
import { sections } from "@/utils/sections";
import { GetServerSideProps } from "next";
import { VideoDashboardResponse, getVideosSection } from "@/services/dashboard";
import Link from "next/link";
import Image from "next/image";

import CategoryFilters from "@/components/dashboard/components/filters/CategoryFilters";
import SearchInput from "@/components/dashboard/components/filters/SearchInput";

type Props = {
  sections: Section[];
};

type Section = {
  name: string;
  slug: string;
  orientation: "vertical" | "horizontal";
  videos: VideoDashboardResponse[];
};

export default function Dashboard({ sections }: Props) {
  const isMobile = useIsMobile();
  return (
    <AuthProvider>
      <DesktopLayout>
        {isMobile && (
          <div className="flex flex-col space-y-[16px]">
            <SearchInput />
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
                videos={videos.slice(0, isMobile ? 2 : 3).map((v) => v.hsl)}
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
                <video controls preload="metadata" className="aspect-video">
                  <source src={`${videos[0].url}#t=0.1`} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
        <Footer />
      </DesktopLayout>
    </AuthProvider>
  );
}

export const getServerSideProps = (async () => {
  const sections_with_videos = [];
  for (const sec of sections) {
    sections_with_videos.push({
      name: sec.name,
      slug: sec.slug,
      orientation: sec.orientation as "vertical" | "horizontal",
      videos: await getVideosSection(sec.slug),
    });
  }

  return { props: { sections: sections_with_videos } };
}) satisfies GetServerSideProps<Props>;
