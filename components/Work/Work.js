/* eslint-disable @next/next/no-img-element */
import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS } from "../../constants";

const Work = ({ isDesktop }) => {
  const sectionRevealRef = useRef(null);

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
    [isDesktop]
  );

  useGSAP(
    () => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          ".staggered-reveal",
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: ".work-wrapper",
        start: "100px bottom",
        end: "center center",
        scrub: 1,
        animation: tl,
      });
    },
    {
      scope: sectionRevealRef,
    }
  );

  return (
    <section
      ref={sectionRevealRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="work-wrapper flex flex-col">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
