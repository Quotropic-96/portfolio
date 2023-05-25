import { useState, useEffect } from "react";

export const useViewport = () => {
  const [windowHeight, setVWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowHeight, windowWidth };
};
