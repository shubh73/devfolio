import { useEffect, useRef } from "react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Howl } from "howler";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK } from "../../constants";

const dukaanContentItems = [
  {
    title: "Dukaan",
    description:
      "Dukaan helps you launch your online store in less than 30 seconds. Dukaan handles everything from managing products, inventory, marketing, payments, and logistics.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Revolutionizing commerce, one click at a time
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Senior Frontend Engineer
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Frontend Engineer
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Frontend Engineer Intern
      </div>
    ),
  },
];
const aviateContentItems = [
  {
    title: "Aviate",
    description:
      "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Finding the right job isn&apos;t fate, it&apos;s navigation
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Frontend Developer Intern
      </div>
    ),
  },
];

const spacenosContentItems = [
  {
    title: "Spacenos",
    description:
      "A dynamic startup dedicated to creating innovative products that make the world a better place.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        We build apps that solve problems for the next billion people
      </div>
    ),
  },
  {
    title: "Spacenos",
    description: "",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Web Developer Intern
      </div>
    ),
  },
];

const tabItems = [
  {
    title: "Dukaan",
    value: "dukaan",
    content: <StickyScroll contentItems={dukaanContentItems} />,
  },
  {
    title: "Aviate",
    value: "Aviate",
    content: <StickyScroll contentItems={aviateContentItems} />,
  },
  {
    title: "Spacenos",
    value: "spacenos",
    content: <StickyScroll contentItems={spacenosContentItems} />,
  },
];

const Work = ({ isDesktop }) => {
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
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
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

          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
