import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Collaboration = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone },
    });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        targetSection.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<"
      );

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none my-40" ref={targetSection}>
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <p className="opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-left transform-gpu">
          {Array(5)
            .fill(
              " Software Engineering Problem Solving Software Architecture "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>

        <h1
          ref={quoteRef}
          className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
        >
          Interested in{" "}
          <span className="text-strong font-semibold">Collaboration</span>?
        </h1>

        <p className="mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu">
          {Array(5)
            .fill(
              " Agile Development Frontend Development React Native Development "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
      <style jsx global>{`
        .text-strong {
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

export default Collaboration;
