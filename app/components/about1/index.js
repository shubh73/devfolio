"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 },
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<",
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full select-none">
      <div
        className={`${
          clientHeight > 650 ? "pb-16 pt-28" : "pb-72 pt-80"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="text-center text-[2.70rem] font-medium md:text-6xl lg:text-[4rem]"
        >
          <span className="about-1 leading-tight">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and performant apps.{" "}
          </span>
          <span className="about-2 leading-tight">
            I take responsibility to craft a good user experience using modern
            frontend architecture.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};
