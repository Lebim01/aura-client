import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import AuthProvider from "@/components/common/ProtectAuth";
import VideosContextProvider from "@/context/VideosContext";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { useRouter } from "next/router";
import { getSection } from "@/services/sections";
import { Section } from "@/utils/sections";

type Props = {
  isMobile: boolean;
  section: Section;
};

const SectionSlug: FC<Props> = ({ isMobile, section }) => {
  const router = useRouter();
  const slug = router.query?.slug || "";
  const { width } = useWindowSize();

  return (
    <AuthProvider>
      <DesktopLayout isMobile={isMobile}>
        <VideosContextProvider url={"/dashboard/section/" + slug}>
          <div
            id="discovery-container"
            className="fixed md:relative w-full max-h-screen md:overflow-y-auto hidescroll"
          >
            {(width || 0) < 768 && (
              <div className="md:hidden">
                <VerticalMobileVideos />
              </div>
            )}
            {(width || 0) >= 768 && (
              <div className="hidden md:block">
                <VerticalDesktopVideos />
              </div>
            )}
          </div>
        </VideosContextProvider>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default SectionSlug;

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  const section = await getSection(context.query?.slug as string);

  return { props: { isMobile, section } };
}) satisfies GetServerSideProps<Props>;
