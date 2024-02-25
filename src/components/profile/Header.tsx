import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  const router = useRouter();

  return (
    <div className="flex w-full p-[16px] items-center justify-between">
      <Image
        src={"/icons/flat-arrow-left-active.svg"}
        width={16}
        height={16}
        alt=""
        className="hover:cursor-pointer"
        onClick={() => {
          router.back();
        }}
      />
      <span className="text-[16px] font-[700] leading-[20.8px]">{text}</span>
      <div></div>
    </div>
  );
};

export default Header;
