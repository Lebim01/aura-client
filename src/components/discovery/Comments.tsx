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
import useVideoCommentsStore from "@/store/useVideoCommentsStore";
import CommentsItem from "./components/CommentsItem";
import InputComment from "./components/InputComment";
import { useCommentMenuState } from "@/store/useCommentMenuState";
import useIsMobile from "@/hooks/useIsMobile";
interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  index: number;
  id_video: string;
}

const Comments = ({ show, setShow, index, id_video }: Props) => {
  const [h, setH] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { closeMenu } = useCommentMenuState();
  const { toggleFooter } = useShowHideFooterStore();
  const {
    getVideoComments,
    commentsVideos,
    loading,
    fetchMoreComments,
    hasMore,
  } = useVideoCommentsStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    getVideoComments(id_video, 1);
  }, [id_video]);

  useEffect(() => {
    /*     scrollToTop(); */
  }, [commentsVideos]);

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

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

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
      /* setShow(false); */
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
      /*  setShow(false); */
    },
    trackMouse: true,
  });

  const handleScroll = useCallback((e: any) => {
    const target = e.target;
    const isAtBottom =
      Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) <
      1;

    if (isAtBottom) {
      setH(true);
    } else if (target.scrollTop === 0) {
      setH(false);
    }
  }, []);

  return (
    <div
      className={classNamesCustom(
        " items-end justify-end w-full flex flex-col top-0 bg-black-1A bg-opacity-80 z-50",
        {
          "h-custom-screen transition-all duration-500 absolute":
            show && isMobile,
        },
        { "transition-all duration-500 hidden": !show },
        {
          "h-full transition-all duration-500 absolute": show && !isMobile,
        }
      )}
      {...handlersMain}
    >
      <div
        className="w-full flex-1"
        onClick={() => {
          closeMenu();
          setShow(false);
          toggleFooter(false);
        }}
        {...handlersComments}
      ></div>
      <div
        className={classNamesCustom(
          "w-full bg-black-0D rounded-t-[16px] px-[16px] py-[24px] flex flex-col gap-y-[24px] items-center swipe-up",
          { "h-full transition-all duration-500 rounded-t-none": h },
          { "h-[437px] transition-all duration-500": !h }
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
                onClick={() => {
                  closeMenu();
                  setShow(false);

                  toggleFooter(false);
                }}
              />
            </div>
          </div>
          <span
            className="text-[14px] font-[500] leading-[130%] w-full text-center"
            {...handlers}
          >
            Comentarios
          </span>
        </div>
        <div
          className="flex flex-col gap-y-[21px] justify-start w-full overflow-y-auto hidescroll flex-1 z-50"
          {...handlersComments}
          onScroll={handleScroll}
          ref={scrollContainerRef}
        >
          {commentsVideos.map((item: any, index: number) => {
            return (
              <CommentsItem
                key={index}
                comment={item.comment.comment}
                date={item.comment.created_at}
                name={item.comment.user_name}
                last_name={item.comment.user_lastname}
                user_img={item.comment.user_img || "/no-photo.png"}
                id_comment={item.comment.id}
                user_id={item.comment.user_id}
              />
            );
          })}
          {hasMore && (
            <span
              className={classNamesCustom(
                "flex w-full justify-center text-[12px] opacity-70 cursor-pointer",
                { "pointer-events-none": loading }
              )}
              onClick={() => fetchMoreComments(id_video)}
            >
              Ver más comentarios
            </span>
          )}
        </div>
        <InputComment id_video={id_video} />
      </div>
    </div>
  );
};

export default Comments;
