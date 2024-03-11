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
      <DesktopLayout forceDisplay>
        {isMobile && (
          <div className="flex flex-col space-y-[16px]">
            <SearchInput />
            <CategoryFilters />
          </div>
        )}
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
