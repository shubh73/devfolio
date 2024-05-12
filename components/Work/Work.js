import { useEffect, useRef } from "react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Howl } from "howler";
import { MENULINKS, WORK } from "../../constants";
import { Tabs } from "../Tabs/Tabs";

const tabs = [
  {
    title: "Dukaan",
    value: "dukaan",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-4 text-3xl md:text-4xl font-semibold text-white bg-purple">
        <h3>Dukaan</h3>
      </div>
    ),
  },
  {
    title: "Aviate",
    value: "Aviate",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-4 text-3xl md:text-4xl font-semibold text-white bg-purple">
        <h3>Aviate</h3>
      </div>
    ),
  },
  {
    title: "Spacenos",
    value: "spacenos",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-4 text-3xl md:text-4xl font-semibold text-white bg-purple">
        <h3>Spacenos</h3>
      </div>
    ),
  },
];

const Work = ({ clientWidth }) => {
  const targetSection = useRef(null);

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
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
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
        </div>

        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Work;
