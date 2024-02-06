import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import InfoReview from "@/components/discover/InfoReview";
import { useRouter } from "next/router";

const images = ["/bgaura.png", "/no-photo.png", "/pexels-photo-268533.webp"];

const ImageViewer = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedUp: () =>
      setIndex((currentIndex) => Math.min(currentIndex + 1, images.length - 1)),
    onSwipedDown: () =>
      setIndex((currentIndex) => Math.max(currentIndex - 1, 0)),
    trackMouse: true,
  });

  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-between p-[16px] bg-black-0D">
        <div onClick={() => router.back()}>
          <Image
            src="/icons/flat-arrow-left-active.svg"
            alt="Volver"
            width={24}
            height={24}
          />
        </div>
        <h1 className="text-lg font-semibold">Descubrir</h1>
        <div style={{ width: 24, height: 24 }} />
      </div>
      <div {...handlers} className="image-viewer">
        {images.map((image, i) => (
          <div key={i}>
            <div
              className="image-slide bg-bg-gradient-discover"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%), url(${image})`,
                transform: `translateY(${(i - index) * 100}%)`,
              }}
            />
            <InfoReview />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImageViewer;
