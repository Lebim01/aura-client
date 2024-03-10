import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import AuthProvider from "@/components/common/ProtectAuth";
import { useRouter } from "next/router";
import VideosContextProvider from "@/context/VideosContext";

const ImageViewer = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <AuthProvider>
      <DesktopLayout>
        {router.isReady && (
          <VideosContextProvider
            url={`/dashboard/discovery`}
            shared={router.query.shared as string}
          >
            <div
              id="discovery-container"
              className="fixed md:relative w-full max-h-screen md:overflow-y-auto hidescroll md:max-w-[1056px]"
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
        )}
      </DesktopLayout>
    </AuthProvider>
  );
};

export default ImageViewer;
