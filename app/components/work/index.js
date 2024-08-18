"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StickyScroll } from "./sticky-scroll";
import { Tabs } from "./tabs";
import { MENULINKS, WORK_CONTENTS } from "../../../constants";

export const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "Dukaan",
        value: "dukaan",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.DUKAAN}
          />
        ),
      },
      {
        title: "Aviate",
        value: "Aviate",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.AVIATE}
          />
        ),
      },
      {
        title: "Spacenos",
        value: "spacenos",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.SPACENOS}
          />
        ),
      },
    ],
    [isDesktop],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<",
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="relative mb-96 w-full select-none xs:mt-40 sm:mt-72"
    >
      <img
        src="/left-pattern.svg"
        className="absolute -top-1/4 left-0 hidden w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container flex flex-col justify-center py-16">
        <div className="work-wrapper flex flex-col">
          <div className="flex flex-col">
            <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">
              WORK
            </p>
            <h1 className="text-gradient staggered-reveal mt-2 w-fit text-6xl font-medium">
              Experience
            </h1>
            <h2 className="staggered-reveal mt-2 w-full text-[1.65rem] font-medium md:max-w-lg">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};
