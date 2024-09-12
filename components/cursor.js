"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { useResponsive } from "hooks/use-responsive";

export const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const { isDesktop } = useResponsive();

  const moveCircle = useCallback((e) => {
    gsap.to([cursorRef.current, followerRef.current], {
      x: e.clientX,
      y: e.clientY,
      duration: (_, target) => (target === cursorRef.current ? 0.1 : 0.3),
      ease: "none",
    });
  }, []);

  const handleHover = useCallback((scale) => {
    gsap.to(cursorRef.current, {
      scale: scale === "in" ? 0.5 : 1,
      duration: 0.3,
    });
    gsap.to(followerRef.current, {
      scale: scale === "in" ? 3 : 1,
      duration: 0.3,
    });
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    followerRef.current.classList.remove("hidden");
    cursorRef.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);
    const links = document.querySelectorAll(".link");

    links.forEach((el) => {
      el.addEventListener("mouseenter", () => handleHover("in"));
      el.addEventListener("mouseleave", () => handleHover("out"));
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);

      links.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleHover("in"));
        el.removeEventListener("mouseleave", () => handleHover("out"));
      });
    };
  }, [handleHover, isDesktop, moveCircle]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed hidden h-4 w-4 rounded-full bg-white mix-blend-difference"
        style={{ zIndex: 99 }}
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed -left-3 -top-3 hidden h-10 w-10 rounded-full border border-white/[0.2] bg-white/[0.02]"
        style={{ zIndex: 99 }}
      />
    </>
  );
};
