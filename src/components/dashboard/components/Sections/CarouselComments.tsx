"use client";
import MostComponent from "./MostComponent";
import ReviewVideo from "./ReviewVideo";
interface Props {
  text: string;
}

const CarouselComments = ({ text }: Props) => {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <MostComponent text={text} />
      <div className="flex w-full px-[16px] overflow-x-auto space-x-[16px] hidescroll">
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
