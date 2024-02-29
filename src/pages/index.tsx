import DesktopLayout from "@/components/common/DesktopLayout";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <video
        loop
        autoPlay
        playsInline
        className="object-cover min-w-[300px] min-h-50vh cursor-pointer rounded-md"
        preload="metadata"
      >
        <source
          src={
            "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fproximamente.mp4#t=3"
          }
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>
    </div>
  );
}
