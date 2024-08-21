"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useResponsive } from "hooks/use-responsive";
import { StickyScroll } from "./sticky-scroll";
import { Tabs } from "./tabs";
import { MENU_ITEMS, WORK_CONTENTS } from "../constants";

export const Work = () => {
  const sectionRef = useRef(null);

  const { isDesktop } = useResponsive();

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
        // start: "100px bottom",
        // end: "center center",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENU_ITEMS[2].ref}
      className="relative mx-auto flex w-full items-center px-4 2xl:container md:px-12 xl:px-20"
    >
      <div className="work-wrapper flex w-full flex-col">
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
    </section>
  );
};
