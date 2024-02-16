import { useEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): boolean => {
      return typeof window !== "undefined" && window.innerWidth < 768;
    };

    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
