import Modal from "@/components/common/Modal";
import { FC, useMemo } from "react";

type Props = {
  url?: string;
  open: boolean;
  close: () => void;
};

const TrailerModal: FC<Props> = (props) => {
  const id = useMemo(() => {
    if (!props.url) return "";
    if (props.url.includes("youtu.be")) {
      const url = new URL(props.url);
      return url.pathname.replace(/^\//, "");
    }
    if (props.url.includes("youtube.com/watch")) {
      const url = new URL(props.url);
      return url.searchParams.get("v");
    }
    return "";
  }, [props.url]);

  return (
    <Modal onClose={props.close} open={props.open}>
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default TrailerModal;
