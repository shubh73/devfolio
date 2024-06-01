import { useRef, useEffect } from "react";

const ProgressIndicator = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const totalScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = totalScroll / windowHeight;
      progressRef.current
        ? (progressRef.current.style.transform = `scaleX(${scrolled})`)
        : "";
    });
  }, [progressRef]);

  return (
    <div className="progress w-full fixed top-0 z-50">
      <div ref={progressRef} className="progress-bar"></div>
    </div>
  );
};

export default ProgressIndicator;
