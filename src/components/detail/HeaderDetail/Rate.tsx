import Image from "next/image";
import { FC, useState } from "react";
import { rateSerie } from "@/services/series";

type Props = {
  qualification: number;
  id: string;
};

const Rate: FC<Props> = ({ qualification, id }) => {
  const [myRate, setMyRate] = useState(qualification);
  console.log(qualification);
  const rateSerieSend = async (rate: number) => {
    try {
      setMyRate(rate);
      await rateSerie({ rating: rate, serieID: id });
    } catch (e) {
      setMyRate(qualification);
      console.log(e);
    }
  };

  return (
    <div className="flex items-center gap-x-[8px]">
      <span className="text-[12px] font-[600]">Calificar:</span>
      {Array(10)
        .fill(null)
        .map((_: any, index: number) => (
          <div
            key={index}
            className="cursor-pointer md:hover:scale-125 transition-transform duration-200 ease-in-out min-h-[20px] min-w-[20px]"
            onClick={() => {
              rateSerieSend(index + 1);
            }}
          >
            <Image
              width={20}
              height={20}
              src={
                index < myRate
                  ? "/icons/star-rate-fill.svg"
                  : "/icons/star-rate.svg"
              }
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default Rate;
