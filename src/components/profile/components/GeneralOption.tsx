import Image from "next/image";
import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

const GeneralOption = ({ label, url }: Props) => {
  return (
    <Link href={url}>
      <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px] hover:cursor-pointer">
        <div className="flex items-center gap-x-[8px]">
          <span className="text-[14px]">{label}</span>
        </div>
        <Image
          src={"/icons/arrow-right-white.svg"}
          alt=""
          width={20}
          height={20}
        />
      </div>
    </Link>
  );
};

export default GeneralOption;
