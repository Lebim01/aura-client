"use client";
import MostComponent from "./MostComponent";
import ReviewVideo from "./ReviewVideo";
interface Props {
  text: string;
}

const CarouselComments = ({ text }: Props) => {
  return (
    <div className="flex flex-col  gap-y-[12px]">
      <MostComponent text={text} />
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-[32px] w-full px-[16px] relative">
        <ReviewVideo />
        <div className="hidden lg:block">
          <ReviewVideo />
        </div>
        <div className="hidden lg:block">
          <ReviewVideo />
        </div>
        <div className="hidden xl:block">
          <ReviewVideo />
        </div>
      </div>
    </div>
  );
};

export default CarouselComments;
