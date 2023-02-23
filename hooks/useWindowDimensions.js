import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: clientWidth, innerHeight: clientHeight } = window;
      setWindowDimensions({
        clientWidth,
        clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
