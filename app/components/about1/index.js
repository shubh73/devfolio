"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useViewport } from "hooks/use-viewport";

export const About1 = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  const { clientHeight } = useViewport();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
          markers: true,
        },
      });

      tl.fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
      )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.4,
          duration: 0.8,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2, y: 10 },
          { opacity: 1, y: 0, duration: 1.5 },
          "-=0.5",
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.4,
          duration: 0.8,
        });
    });

    return () => ctx.revert();
  }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap
  //       .timeline({
  //         defaults: { ease: "none", duration: 0.2 },
  //       })
  //       .fromTo(
  //         quoteRef.current.querySelector(".about-1"),
  //         { opacity: 0.2 },
  //         { opacity: 1 },
  //       )
  //       .to(quoteRef.current.querySelector(".about-1"), {
  //         opacity: 0.2,
  //         delay: 0.5,
  //       })
  //       .fromTo(
  //         quoteRef.current.querySelector(".about-2"),
  //         { opacity: 0.2 },
  //         { opacity: 1 },
  //         "<",
  //       )
  //       .to(quoteRef.current.querySelector(".about-2"), {
  //         opacity: 0.2,
  //         delay: 1,
  //       });

  //     ScrollTrigger.create({
  //       trigger: sectionRef.current,
  //       start: "top 80%",
  //       end: "top 20%",
  //       // start: "center bottom",
  //       // end: "center center",
  //       // start: "center bottom",
  //       // end: "+=500",
  //       scrub: 0.5,
  //       animation: tl,
  //       markers: true,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <section ref={sectionRef} className="section">
      {/* <div className={`content-container`}> */}
      <h1
        ref={quoteRef}
        className="text-center text-[2.70rem] font-medium md:text-6xl lg:text-[4rem]"
      >
        <span className="about-1 leading-tight">
          I&apos;m a passionate Engineer who&apos;s focused on building scalable
          and performant apps.{" "}
        </span>
        <span className="about-2 leading-tight">
          I take responsibility to craft a good user experience using modern
          frontend architecture.{" "}
        </span>
      </h1>
      {/* </div> */}
    </section>
  );
};
