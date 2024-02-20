import Image from "next/image";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import useShowHideFooterStore from "@/store/showHideFooterStore";

const Info = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleFooter } = useShowHideFooterStore();

  useEffect(() => {
    if (showMenu) {
      toggleFooter(true);
    } else {
      toggleFooter(false);
    }
  }, [showMenu]);

  return (
    <>
      {showMenu && <Menu show={showMenu} setShow={setShowMenu} index={1} />}
      <div className="py-[24px] px-[16px] flex flex-col gap-y-[8px]">
        <div
          className="w-fit border border-yellow-aura-accent rounded-full p-[4px] shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] relative"
          onClick={() => {
            setShowMenu(true);
          }}
        >
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
    </>
  );
};

export default Info;
