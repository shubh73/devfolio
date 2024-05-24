import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About1 = ({ clientHeight }) => {
  const sectionRevealRef = useRef(null);
  const quoteRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(".about-1", { opacity: 0.2 }, { opacity: 1 })
        .to(".about-1", {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(".about-2", { opacity: 0.2 }, { opacity: 1 }, "<")
        .to(".about-2", {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRevealRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 1,
        animation: tl,
      });
    },
    {
      dependencies: [sectionRevealRef, quoteRef],
      scope: sectionRevealRef,
    }
  );

  return (
    <section ref={sectionRevealRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and performant apps.{" "}
          </span>
          <span className="about-2 leading-tight">
            I take responsibility to craft a good user experience using modern
            frontend architecture.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
