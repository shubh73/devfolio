import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = ({ isDesktop }) => {
  const cursorRef = useRef(null);
  const xCursorToRef = useRef(0);
  const yCursorToRef = useRef(0);
  const followerRef = useRef(null);
  const xFollowerToRef = useRef(0);
  const yFollowerToRef = useRef(0);

  // useGSAP(
  //   (context, contextSafe) => {
  //     if (isDesktop && document.body.clientWidth > 767) {
  //       followerRef.current.classList.add("hidden");
  //       cursorRef.current.classList.add("hidden");

  //       // Circle movement
  //       xCursorToRef.current = gsap.quickTo(cursorRef.current, "x", {
  //         duration: 0.1,
  //         ease: "none",
  //       });
  //       yCursorToRef.current = gsap.quickTo(cursorRef.current, "y", {
  //         duration: 0.1,
  //         ease: "none",
  //       });
  //       xFollowerToRef.current = gsap.quickTo(followerRef.current, "x", {
  //         duration: 0.3,
  //         ease: "none",
  //       });
  //       yFollowerToRef.current = gsap.quickTo(followerRef.current, "y", {
  //         duration: 0.3,
  //         ease: "none",
  //       });

  //       const handleMouseMove = contextSafe((e) => {
  //         xCursorToRef.current(e.clientX);
  //         yCursorToRef.current(e.clientY);
  //         xFollowerToRef.current(e.clientX);
  //         yFollowerToRef.current(e.clientY);
  //       });

  //       // Hover
  //       const handleMouseEnter = contextSafe(() => {
  //         gsap.to(cursorRef.current, {
  //           scale: 0.5,
  //           duration: 0.3,
  //         });

  //         gsap.to(followerRef.current, {
  //           scale: 3,
  //           duration: 0.3,
  //         });
  //       });

  //       const handleMouseLeave = contextSafe(() => {
  //         gsap.to(cursorRef.current, {
  //           scale: 1,
  //           duration: 0.3,
  //         });

  //         gsap.to(followerRef.current, {
  //           scale: 1,
  //           duration: 0.3,
  //         });
  //       });

  //       document.addEventListener("mousemove", handleMouseMove);

  //       document.querySelectorAll(".link").forEach((el) => {
  //         el.addEventListener("mouseenter", handleMouseEnter);
  //         el.addEventListener("mouseleave", handleMouseLeave);
  //       });

  //       return () => {
  //         document.removeEventListener("mousemove", handleMouseMove);

  //         document.querySelectorAll(".link").forEach((el) => {
  //           el.removeEventListener("mouseenter", handleMouseEnter);
  //           el.removeEventListener("mouseleave", handleMouseLeave);
  //         });
  //       };
  //     }
  //   },
  //   { dependencies: [cursorRef, followerRef, isDesktop] }
  // );

  // useGSAP(
  //   (context, contextSafe) => {
  //     if (isDesktop && document.body.clientWidth > 767) {
  //       followerRef.current.classList.add("hidden");
  //       cursorRef.current.classList.add("hidden");

  //       // Circle movement
  //       const handleMouseMove = contextSafe((e) => {
  //         gsap.to(cursorRef.current, {
  //           x: e.clientX,
  //           y: e.clientY,
  //           duration: 0.1,
  //           ease: Linear.easeNone,
  //         });

  //         gsap.to(followerRef.current, {
  //           x: e.clientX,
  //           y: e.clientY,
  //           duration: 0.3,
  //           ease: Linear.easeNone,
  //         });
  //       });

  //       // Hover
  //       const handleMouseEnter = contextSafe(() => {
  //         gsap.to(cursorRef.current, {
  //           scale: 0.5,
  //           duration: 0.3,
  //         });

  //         gsap.to(followerRef.current, {
  //           scale: 3,
  //           duration: 0.3,
  //         });
  //       });

  //       const handleMouseLeave = contextSafe(() => {
  //         gsap.to(cursorRef.current, {
  //           scale: 1,
  //           duration: 0.3,
  //         });

  //         gsap.to(followerRef.current, {
  //           scale: 1,
  //           duration: 0.3,
  //         });
  //       });

  //       document.addEventListener("mousemove", handleMouseMove);

  //       document.querySelectorAll(".link").forEach((el) => {
  //         el.addEventListener("mouseenter", handleMouseEnter);
  //         el.addEventListener("mouseleave", handleMouseLeave);
  //       });

  //       return () => {
  //         document.removeEventListener("mousemove", handleMouseMove);

  //         document.querySelectorAll(".link").forEach((el) => {
  //           el.removeEventListener("mouseenter", handleMouseEnter);
  //           el.removeEventListener("mouseleave", handleMouseLeave);
  //         });
  //       };
  //     }
  //   },
  //   { dependencies: [cursorRef, followerRef, isDesktop] }
  // );

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      followerRef.current.classList.remove("hidden");
      cursorRef.current.classList.remove("hidden");

      const moveCircle = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });

        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
      };

      // Circle movement
      // xCursorToRef.current = gsap.quickTo(cursorRef.current, "x", {
      //   duration: 0.1,
      //   ease: "none",
      // });
      // yCursorToRef.current = gsap.quickTo(cursorRef.current, "y", {
      //   duration: 0.1,
      //   ease: "none",
      // });
      // xFollowerToRef.current = gsap.quickTo(followerRef.current, "x", {
      //   duration: 0.3,
      //   ease: "none",
      // });
      // yFollowerToRef.current = gsap.quickTo(followerRef.current, "y", {
      //   duration: 0.3,
      //   ease: "none",
      // });

      // const handleMouseMove = (e) => {
      //   xCursorToRef.current(e.clientX);
      //   yCursorToRef.current(e.clientY);
      //   xFollowerToRef.current(e.clientX);
      //   yFollowerToRef.current(e.clientY);
      // };

      const hover = () => {
        gsap.to(cursorRef.current, {
          scale: 0.5,
          duration: 0.3,
        });

        gsap.to(followerRef.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
        });

        gsap.to(followerRef.current, {
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
  }, [cursorRef, followerRef, isDesktop]);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden bg-white rounded-full mix-blend-difference fixed w-4 h-4 select-none pointer-events-none z-50"
      />
      <div
        ref={followerRef}
        className="hidden bg-white/[0.02] border border-white/[0.2] rounded-full fixed -top-3 -left-3 w-10 h-10 select-none pointer-events-none z-50"
      />
    </>
  );
};

export default Cursor;
