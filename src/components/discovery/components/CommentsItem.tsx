import React, { useState } from "react";
import Image from "next/image";
import { useCommentMenuState } from "@/store/useCommentMenuState";
import useVideoCommentsStore from "@/store/useVideoCommentsStore";
import { humanizeDate } from "@/utils/humanizeDate";
import { useSession } from "next-auth/react";

interface Props {
  comment: string;
  date: any;
  name: string;
  last_name: string;
  user_img: string;
  id_comment: string;
  user_id: string;
}

const CommentsItem = ({
  comment,
  date,
  name,
  last_name,
  user_img,
  id_comment,
  user_id,
}: Props) => {
  const { isOpen, activeMenuId, openMenu, closeMenu } = useCommentMenuState();
  const { deleteComment } = useVideoCommentsStore();
  const { data } = useSession();
  const isOwner = data?.user.id === user_id;

  const handleMenuClick = () => {
    if (activeMenuId === id_comment) {
      closeMenu();
    } else {
      openMenu(id_comment);
    }
  };

  return (
    <div className="flex gap-x-[8px] items-start">
      <Image
        src={user_img}
        alt=""
        width={24}
        height={24}
        className="bg-gray-400 rounded-full min-w-[24px] min-h-[24px]"
      />
      <div className="flex flex-col gap-y-[8px] w-full relative">
        <div className="flex flex-col">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-x-[4px] items-center">
              <span>
                {name} {last_name}
              </span>
              <span>•</span>
              <span className="text-[10px]">{humanizeDate(date)}</span>{" "}
            </div>
            <button
              className="flex justify-center items-center text-[19px] leading-[19px]"
              onClick={handleMenuClick}
            >
              ...
            </button>
            {isOpen && activeMenuId === id_comment && (
              <div className="absolute top-10 right-0  py-2 w-48 bg-black-29 text-white rounded-md shadow-xl z-20">
                {isOwner && (
                  <span
                    className="block px-4 py-2 text-sm"
                    onClick={() => {
                      handleMenuClick();
                      deleteComment(id_comment);
                    }}
                  >
                    Eliminar
                  </span>
                )}
                {!isOwner && (
                  <span
                    className="block px-4 py-2 text-sm"
                    onClick={() => {
                      handleMenuClick();
                    }}
                  >
                    Reportar
                  </span>
                )}
              </div>
            )}
          </div>
          <span
            className="text-[12px] leading-[130%] overflow-hidden block text-ellipsis max-h-[calc(2*1.3*12px)]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {comment}
          </span>
        </div>
        {/*  <span className="font-[700] text-[12px] leading-[120%]">Responder</span> */}
      </div>
    </div>
  );
};

export default CommentsItem;
