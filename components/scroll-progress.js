"use client";

import { useCallback, useEffect, useRef } from "react";

export const ScrollProgress = () => {
  const scrollProgressRef = useRef(null);

  const handleScroll = useCallback(() => {
    const totalScroll = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = totalScroll / windowHeight;

    if (scrollProgressRef.current) {
      scrollProgressRef.current.style.transform = `scaleX(${scrolled})`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={scrollProgressRef}
      className="fixed top-0 h-[3.6px] w-full origin-left scale-x-0 bg-white"
      style={{ zIndex: 12 }}
    />
  );
};
