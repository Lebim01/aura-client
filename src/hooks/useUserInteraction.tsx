import useInteractedStore from "@/store/userInteract";
import { useEffect } from "react";

const useUserInteraction = () => {
  const { interacted, setInteracted } = useInteractedStore();

  const handleInteraction = () => {
    setInteracted();
  };

  useEffect(() => {
    if (!interacted) {
      document.body.addEventListener("keydown", handleInteraction);
      document.body.addEventListener("click", handleInteraction);
      document.body.addEventListener("touchstart", handleInteraction);

      return () => {
        document.body.removeEventListener("keydown", handleInteraction);
        document.body.removeEventListener("click", handleInteraction);
        document.body.removeEventListener("touchstart", handleInteraction);
      };
    }
  }, [interacted]);

  return interacted;
};

export default useUserInteraction;
