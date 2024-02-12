import { useEffect } from "react";

type HandleScroll = () => void;

const useVideosScroll = (handleScroll: HandleScroll) => {
  useEffect(() => {
    // Attach the event listener to window on component mount
    document
      .querySelector("#discovery-container")
      ?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document
        .querySelector("#discovery-container")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return null;
};

export default useVideosScroll;
