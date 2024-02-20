import Image from "next/image";

interface Props {
  label: string;
  url: string;
}

const GeneralOption = ({ label, url }: Props) => {
  return (
    <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px]">
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
  );
};

export default GeneralOption;
