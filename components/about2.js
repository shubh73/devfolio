"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const About2 = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(quoteRef.current, { opacity: 0, duration: 2 }).to(
        quoteRef.current.querySelector(".highlight"),
        {
          backgroundPositionX: "100%",
          duration: 1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="mx-auto flex w-full items-center justify-center px-4 2xl:container md:px-12 xl:px-20"
      >
        <h1
          ref={quoteRef}
          className="text-center text-[2.70rem] font-medium md:text-6xl lg:text-[4rem]"
        >
          I have a{" "}
          <span
            className="highlight font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            strong
          </span>{" "}
          obsession for attention to detail.
        </h1>
      </section>
      <div className="absolute -top-[120%] left-0 w-1/6 md:w-1/12">
        <Image
          alt="left-pattern"
          src="/left-pattern.svg"
          loading="lazy"
          height={700}
          width={320}
          priority={false}
        />
      </div>
    </div>
  );
};
