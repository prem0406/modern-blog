import { useEffect, useState } from "react";

export const useWindowSize = (count: number) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //on resize
  useEffect(() => {
    //fun
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Unmount:", count);
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return windowSize;
};
