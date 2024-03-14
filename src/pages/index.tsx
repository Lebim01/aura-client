import Convocatoria from "@/components/index/Convocatoria";
import { GetServerSideProps } from "next";

const Video = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-0 overflow-hidden ">
      <video
        loop
        autoPlay
        playsInline
        controls
        className="object-cover md:min-w-[300px] md:max-h-[50vh] md:min-h-[50vh] cursor-pointer rounded-md h-full"
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
};

type Props = {
  isMobile: boolean;
};

export default function Home({ isMobile }: Props) {
  return process.env.NEXT_PUBLIC_REDIRECT ? (
    <Video />
  ) : (
    <Convocatoria isMobile={isMobile} />
  );
}

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { props: { isMobile } };
}) satisfies GetServerSideProps<Props>;
