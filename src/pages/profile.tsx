import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import Sections from "@/components/search/Sections";
import Image from "next/image";
const Profile = () => {
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col overflow-y-auto w-auto pb-[99px] md:py-[32px] relative min-w-max flex-grow">
        {/* Header */}
        <div className="flex w-full p-[16px] items-center justify-between">
          <Image
            src={"/icons/flat-arrow-left-active.svg"}
            width={16}
            height={16}
            alt=""
          />
          <span className="text-[16px] font-[700] leading-[20.8px]">
            Perfil
          </span>
          <div></div>
        </div>
        {/* info start */}
        <div className="py-[24px] px-[16px] flex flex-col gap-y-[8px]">
          <div className="w-fit border border-yellow-aura-accent rounded-full p-[4px] shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] relative">
            <Image
              src={"/no-photo.png"}
              className="rounded-full"
              alt=""
              width={80}
              height={80}
            />
            <span className="absolute bottom-0 right-0 translate-x-[10%] border-[1.5px] border-black translate-y-[5%] w-[24px] h-[24px] bg-yellow-aura-accent rounded-full flex justify-center items-center">
              <Image
                src={"/icons/camera-black.svg"}
                alt=""
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[18px] font-[600] leading-[27px]">
              @Jorge93
            </span>
            <span className="text-[12px] text-yellow-aura-accent leading-[18px] font-[500]">
              jorge.martinez@gmail.com
            </span>
          </div>
        </div>
        {/* info end */}
        {/* options start */}
        <div className="flex flex-col w-full px-[16px]">
          <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px]">
            <div className="flex items-center gap-x-[8px]">
              <Image src={"/icons/user.svg"} alt="" width={20} height={20} />
              <span>@Jorge93</span>
            </div>
            <Image
              src={"/icons/arrow-right-white.svg"}
              alt=""
              width={20}
              height={20}
            />
          </div>

          {/*  */}
          <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px]">
            <div className="flex items-center gap-x-[8px]">
              <Image
                src={"/login/icons/lock.svg"}
                alt=""
                width={20}
                height={20}
              />
              <span>Actualizar contraseña</span>
            </div>
            <Image
              src={"/icons/arrow-right-white.svg"}
              alt=""
              width={20}
              height={20}
            />
          </div>
          {/*  */}
          <div className="flex items-center justify-between w-full border-b border-b-border-otp py-[16px]">
            <div className="flex items-center gap-x-[8px]">
              <Image
                src={"/icons/settings.svg"}
                alt=""
                width={20}
                height={20}
              />
              <span>Ajustes</span>
            </div>
            <Image
              src={"/icons/arrow-right-white.svg"}
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* options end */}
      </div>
      <Footer />
    </DesktopLayout>
  );
};

export default Profile;
