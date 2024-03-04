import React from "react";
import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";
import useIsMobile from "@/hooks/useIsMobile";
import AuthProvider from "@/components/common/ProtectAuth";
import { sections } from "@/utils/sections";
import { GetServerSideProps } from "next";
import { VideoDashboardResponse, getVideosSection } from "@/services/dashboard";

type Props = {
  sections: Section[];
};

type Section = {
  name: string;
  slug: string;
  videos: VideoDashboardResponse[];
};

export default function Dashboard({ sections }: Props) {
  const isMobile = useIsMobile();
  return (
    <AuthProvider>
      <DesktopLayout forceDisplay>
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen w-auto pb-[99px] md:pb-[32px] relative hidescroll ">
          {sections.map(({ name, slug, videos }, index) => (
            <VideoCaroussel
              key={index}
              videos={videos.slice(0, isMobile ? 2 : 3).map((v) => v.url)}
              title={name}
              sectionId={slug}
            />
          ))}

          <div className="flex flex-col gap-y-[8px] relative md:min-w-[1056px] p-4">
            <label className="text-[16px] font-[600] leading-[150%]">
              Video Magistrales
            </label>
            <video controls preload="metadata" className="aspect-video">
              <source
                src={
                  "https://pub-9eaa456ff98b4bb0a1e8636ea9c0de4b.r2.dev/Trailer%20-%20Mi%20vida%20en%20Series.mp4#t=0.1"
                }
                type="video/mp4"
              />
            </video>
          </div>
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
      videos: await getVideosSection(sec.slug),
    });
  }

  return { props: { sections: sections_with_videos } };
}) satisfies GetServerSideProps<Props>;
