import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About2 = ({ clientHeight }) => {
  const sectionRevealRef = useRef(null);
  const quoteRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(".about-3", {
          backgroundPositionX: "100%",
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRevealRef.current,
        start: "center bottom",
        end: "center center",
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
          clientHeight > 650 ? "py-80" : "py-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          I have a{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="about-3 font-bold"
          >
            strong
          </span>{" "}
          obsession for attention to detail.
        </h1>
      </div>
    </section>
  );
};

export default About2;
