import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import AuthProvider from "@/components/common/ProtectAuth";
import VideosContextProvider from "@/context/VideosContext";

const ImageViewer = () => {
  const slug = "lo-que-nadie-te-dice-de";
  const { width } = useWindowSize();

  return (
    <AuthProvider>
      <DesktopLayout>
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

export default ImageViewer;
