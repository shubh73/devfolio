"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const About1 = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
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

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="mx-auto flex w-full items-center px-4 2xl:container md:px-12 xl:px-20"
      >
        <h1
          ref={quoteRef}
          className="text-center text-[2.70rem] font-medium md:text-6xl"
        >
          <span className="about-1 leading-tight">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and performant apps.{" "}
          </span>
          <span className="about-2 leading-tight">
            I take responsibility in crafting a good user experience using
            modern frontend architecture.{" "}
          </span>
        </h1>
      </section>
      <div className="absolute right-0 top-[80%] w-[20%] md:w-[16%]">
        <Image
          alt="right-pattern"
          src="/right-pattern.svg"
          loading="lazy"
          height={700}
          width={320}
          priority={false}
        />
      </div>
    </div>
  );
};
