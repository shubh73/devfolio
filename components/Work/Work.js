import { useEffect, useMemo, useRef } from "react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS } from "../../constants";

const Work = ({ isDesktop }) => {
  const targetSection = useRef(null);

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

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      ref={targetSection}
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
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
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
