import VideoDesktop from "./VideoDesktop";

const videos = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
];

const VerticalDesktopVideos = () => {
  return (
    <div className="flex flex-col space-y-8 items-center py-4 overflow-y-auto">
      {videos.map((video, i) => (
        <>
          <VideoDesktop video_url={video} videoIndex={i} key={i} />
          <div className="h-[1px] w-[600px] bg-gray-50 bg-opacity-20"></div>
        </>
      ))}
    </div>
  );
};

export default VerticalDesktopVideos;
