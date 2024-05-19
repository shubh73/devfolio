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
      "Dukaan is a platform that enables businesses to launch their online stores at ease.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Revolutionizing commerce, one click at a time
      </div>
    ),
  },
  {
    title: "Transformation",
    description:
      "Since 2021, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Senior Frontend Engineer
      </div>
    ),
  },
  {
    title: "Evolution",
    description:
      "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Frontend Engineer
      </div>
    ),
  },
  {
    title: "Optimization",
    description:
      "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
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
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Finding the right job isn&apos;t fate, it&apos;s navigation
      </div>
    ),
  },
  {
    title: "Innovation",
    description:
      "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
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
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        We build apps that solve problems for the next billion people
      </div>
    ),
  },
  {
    title: "Trailblazing",
    description:
      "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
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
