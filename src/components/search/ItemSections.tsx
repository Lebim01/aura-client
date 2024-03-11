import Image from "next/image";
import Link from "next/link";

const ItemSections = ({ props }: any) => {
  return (
    <Link href={"/detail/[slug]"} as={`/detail/${props.slug}`}>
      <div className="flex flex-col gap-y-[8px] min-w-[146px] md:min-w-[166px] md:max-w-[166px] justify-center items-center">
        <Image
          src={props.poster_path}
          width={166}
          height={250}
          alt=""
          className="bg-gray-400 rounded-[8px] w-[146px] h-[223px] md:w-[166px] md:h-[250px] hover:scale-110 transition-transform duration-200 ease-in-out object-cover"
        />

        <div className="flex flex-col text-left w-full px-[16px] md:px-0">
          <span className="font-[600] leading-[150%] text-[14px] truncate max-w-[100px]">
            {props.title}
          </span>
          <span className="text-[12px] font-[600] leading-[150%] opacity-60 truncate max-w-[100px]">
            {props.genres.map((genre: any) => genre.name).join(", ")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ItemSections;
