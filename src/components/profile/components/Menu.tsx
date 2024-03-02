"use client";
import Image from "next/image";
import {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { useSwipeable } from "react-swipeable";
import { classNamesCustom } from "@/utils/classes";
import useShowHideFooterStore from "@/store/showHideFooterStore";
import { useSession } from "next-auth/react";
import { updateUser } from "@/services/user";
import { uploadImage } from "@/services/files";
interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  index: number;
}

const Menu = ({ show, setShow, index }: Props) => {
  const { data, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const [h, setH] = useState<boolean>(false);
  const { toggleFooter } = useShowHideFooterStore();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
      setH(true);
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
      setH(false);
    },
    trackMouse: true,
  });

  const handlersComments = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
    },
    trackMouse: true,
  });

  const handlersMain = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
    },
    trackMouse: true,
  });

  const onUploadImage = async (file: File) => {
    if (uploading) return;

    try {
      setError(null);
      setUploading(true);
      const url = await uploadImage(file, "users");
      await updateUser({
        profile_img: url,
      });
      update({
        profile_img: url,
      });
      close();
    } catch (err: any) {
      console.error(err);
      setError(err.toString());
      //setError("Algo fallo al subir la imagen, intenta más tarde");
    } finally {
      const form: HTMLFormElement | null = document.querySelector("#form");
      if (form) {
        form.reset();
      }
      setUploading(false);
    }
  };

  const selectImage = () => {
    const input: HTMLInputElement | null =
      document.querySelector("#file_input");
    if (input) {
      input.click();
    }
  };

  const close = () => {
    setShow(false);
    toggleFooter(false);
  };

  return (
    <div
      className={classNamesCustom(
        "items-end justify-end w-screen flex flex-col top-0 bg-black-1D backdrop-blur-sm bg-opacity-10 z-50 ",
        {
          "h-custom-screen transition-all duration-500 absolute": show,
        },
        { "transition-all duration-500 hidden": !show }
      )}
      {...handlersMain}
    >
      <div
        className="w-full flex-1"
        onClick={close}
        {...handlersComments}
      ></div>

      {error && (
        <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-neutral-800 rounded-lg p-2 w-[60%]">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      )}

      <div
        className={classNamesCustom(
          "w-full bg-black-0D rounded-t-[16px] px-[16px] py-[24px] flex flex-col gap-y-[24px] items-center swipe-up",
          { "h-full transition-all duration-500 rounded-t-none": h },
          { "h-auto transition-all duration-500": !h }
        )}
        {...handlers}
      >
        <div
          className="flex flex-col gap-y-[24px] w-full justify-center items-center"
          {...handlers}
        >
          <div
            className="flex justify-between items-center w-full"
            {...handlers}
          >
            <div className="w-full"></div>
            <div className="w-[100px] h-[3px] bg-white bg-opacity-40 rounded-[100px]"></div>
            <div className="w-full flex justify-end">
              <Image
                src={"/icons/x.svg"}
                alt=""
                width={20}
                height={20}
                className=""
                onClick={close}
              />
            </div>
          </div>
          <span
            className="text-[14px] font-[500] leading-[130%] w-full text-center"
            {...handlers}
          >
            Cambia tu foto perfil
          </span>
        </div>
        <div className="flex flex-col gap-y-[32px] justify-start w-full overflow-y-auto hidescroll flex-1 z-50">
          <div className="flex gap-x-[8px] items-center" onClick={selectImage}>
            <Image
              src={"/icons/gallery-green.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <span className="text-[20px] font-[600] leading-[150%] capitalize">
              Subir foto
            </span>

            <form id="form" className="hidden">
              <input
                id="file_input"
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) =>
                  e.currentTarget.files &&
                  e.currentTarget.files.length > 0 &&
                  onUploadImage(e.currentTarget.files[0])
                }
              />
            </form>
          </div>
          <div className="flex gap-x-[8px] items-center">
            <Image
              src={"/icons/trash-red.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <span className="text-[20px] font-[600] leading-[150%] capitalize">
              Eliminar foto de perfil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
