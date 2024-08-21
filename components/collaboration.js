"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Collaboration = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  // const { clientHeight } = useViewport();

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<",
      );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
    };
  }, [quoteRef, sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex w-full items-center px-4 2xl:container md:px-12 xl:px-20"
    >
      <div
        // className={`${
        //   clientHeight > 650 ? "py-36" : "py-48"
        // } section-container flex flex-col`}
        className="section-container flex flex-col"
      >
        <p className="ui-left transform-gpu whitespace-nowrap text-6xl font-semibold opacity-40 sm:text-7xl">
          {Array(5)
            .fill(
              " Software Engineering Problem Solving Software Architecture ",
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>

        <h1
          ref={quoteRef}
          className="mt-6 text-center text-4xl font-medium md:mt-8 md:text-5xl"
        >
          Interested in{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Collaboration
          </span>
          ?
        </h1>

        <p className="ui-right mt-6 transform-gpu whitespace-nowrap text-6xl font-semibold opacity-40 sm:text-7xl md:mt-8">
          {Array(5)
            .fill(
              " Agile Development Frontend Development React Native Development ",
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
    </section>
  );
};
