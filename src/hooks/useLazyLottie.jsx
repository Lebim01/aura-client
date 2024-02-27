import { useEffect, useRef } from "react";
import lottie from 'lottie-web'

const useLazyLottie = (options) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        const animation = lottie.loadAnimation({
          ...options,
          container: containerRef.current
        })
        animationRef.current = animation
        observer.disconnect()
      }
    });
if(containerRef.current)
    observer.observe(containerRef.current);

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
      observer.disconnect();
    };
  }, [options]);

  return { containerRef, animationRef };
};

export default useLazyLottie