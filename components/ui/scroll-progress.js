"use client";

import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const totalScroll = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = totalScroll / windowHeight;

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${scrolled})`;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollProgressRef}
      className="fixed top-0 z-50 h-[3.6px] w-full origin-left scale-x-0 bg-white will-change-transform"
    />
  );
};
