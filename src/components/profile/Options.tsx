import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Options = () => {
  const { data } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full px-[16px]">
      {/*<div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px]">
        <div className="flex items-center gap-x-[8px]">
          <Image src={"/icons/user.svg"} alt="" width={20} height={20} />
          <span className="text-[14px]">@Jorge93</span>
        </div>
        <Image
          src={"/icons/arrow-right-white.svg"}
          alt=""
          width={20}
          height={20}
        />
      </div>*/}
      <Link href="/profile/change-password">
        <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px] hover:cursor-pointer">
          <div className="flex items-center gap-x-[8px]">
            <Image
              src={"/login/icons/lock.svg"}
              alt=""
              width={20}
              height={20}
            />
            <span className="text-[14px]">Actualizar contraseña</span>
          </div>
          <Image
            src={"/icons/arrow-right-white.svg"}
            alt=""
            width={20}
            height={20}
          />
        </div>
      </Link>
      <div
        className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px] hover:cursor-pointer"
        onClick={() => {
          router.push("/profile?step=general");
        }}
      >
        <div className="flex items-center gap-x-[8px]">
          <Image src={"/icons/settings.svg"} alt="" width={20} height={20} />
          <span className="text-[14px]">Ajustes</span>
        </div>
        <Image
          src={"/icons/arrow-right-white.svg"}
          alt=""
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Options;
