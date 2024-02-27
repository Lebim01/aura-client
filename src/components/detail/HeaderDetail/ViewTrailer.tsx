import Image from "next/image";
import Link from "next/link";

interface Props {
  trailer: string;
}
const ButtonTrailer = ({ trailer }: Props) => {
  return (
    <Link
      href={trailer?.toString() || ""}
      target="_blank"
      className="flex gap-x-[8px] w-full items-center justify-end md:justify-start hover:cursor-pointer group md:w-max"
    >
      <span className="font-[600] leading-[150%] text-[12px] group-hover:text-green-enlaces">
        Ver Trailer
      </span>
      <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-bg-trailer-button ">
        <Image
          width={16}
          height={16}
          src="/icons/flat-arrow-right.svg"
          alt=""
        />
      </div>
    </Link>
  );
};

export default ButtonTrailer;
