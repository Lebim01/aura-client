"use client";
import Image from "next/image";
import { useState } from "react";
import useVideoCommentsStore from "@/store/useVideoCommentsStore";
import { uuid } from "uuidv4";
import { useSession } from "next-auth/react";

interface Props {
  id_video: string;
}
const InputComment = ({ id_video }: Props) => {
  const [rows, setRows] = useState(1);
  const [text, setText] = useState("");
  const { postComment } = useVideoCommentsStore();
  const { status, data } = useSession();

  const handleChange = (e: any) => {
    const newText = e.target.value;
    setText(newText);

    const newRows = newText.split("\n").length || 1;
    setRows(newRows);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const now = new Date();

      const created_at = {
        year: now.getUTCFullYear(),
        month: now.getUTCMonth() + 1,
        day: now.getUTCDate(),
        hour: now.getUTCHours(),
        minute: now.getUTCMinutes(),
        second: now.getUTCSeconds(),
        nanosecond: 0,
        timeZoneOffsetSeconds: -now.getTimezoneOffset() * 60,
      };
      postComment(
        {
          comment: {
            comment: text,
            id: uuid(),
            likes: 0,
            user_id: data?.user.id,
            user_lastname: data?.user.lastname,
            user_name: data?.user.name,
            user_img: data?.user.profile_img,
            created_at,
          },
        },
        id_video
      );
      setText("");
    }
  };

  return (
    <div className="w-full flex items-center gap-x-[8px]">
      <div className="w-[32px] h-[32px]">
        <Image
          src={data?.user.profile_img || "/no-photo.png"}
          alt=""
          width={32}
          height={32}
          className="bg-gray-400 rounded-full object-cover object-center min-w-[24px] min-h-[24px]"
        />
      </div>
      <div className="flex w-full px-[16px] py-[12px] border border-border-comment-input rounded-[6px] ">
        <textarea
          placeholder="Escribe algo..."
          rows={rows}
          className="w-full bg-transparent focus:ring-transparent focus:outline-none h-auto "
          value={text}
          onChange={handleChange}
          style={{ resize: "none" }}
          onKeyDown={handleKeyDown}
        />
        <Image src={"/icons/happy.svg"} alt="" width={16} height={16} />
      </div>
    </div>
  );
};

export default InputComment;
