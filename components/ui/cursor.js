"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useViewport } from "hooks/use-viewport";

export const Cursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);

  const { isDesktop } = useViewport();

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      const moveCircle = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
        });
      };

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      return () => {
        document.removeEventListener("mousemove", moveCircle);

        document.querySelectorAll(".link").forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="pointer-events-none fixed z-50 hidden h-4 w-4 select-none rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={follower}
        className="pointer-events-none fixed -left-3 -top-3 z-50 hidden h-10 w-10 select-none rounded-full border border-white/[0.2] bg-white/[0.02]"
      />
    </>
  );
};
