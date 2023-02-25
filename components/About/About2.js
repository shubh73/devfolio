import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About2 = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".about-3"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`${
          clientHeight > 650 ? "py-80" : "py-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          I have a <span className="about-3 font-bold">strong</span> obsession
          for attention to detail.
        </h1>
      </div>
      <style jsx global>{`
        .about-3 {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #ffffff 50%,
            #8b31ff 51%,
            #7000ff 102%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default About2;
