import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Collaboration = ({ clientHeight }) => {
  const sectionRevealRef = useRef(null);
  const quoteRef = useRef(null);

  useGSAP(
    () => {
      const isSmallScreen = document.body.clientWidth < 767;

      const tl = gsap
        .timeline({
          defaults: { ease: "none" },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(".text-strong", {
          backgroundPositionX: "100%",
          duration: 1,
        });

      const slidingTl = gsap
        .timeline({ defaults: { ease: "none" } })
        .to(".ui-left", {
          xPercent: isSmallScreen ? -500 : -150,
        })
        .from(".ui-right", { xPercent: isSmallScreen ? -500 : -150 }, "<");

      ScrollTrigger.create({
        trigger: sectionRevealRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 1,
        animation: tl,
      });

      ScrollTrigger.create({
        trigger: sectionRevealRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        animation: slidingTl,
      });
    },
    {
      dependencies: [sectionRevealRef, quoteRef],
      scope: sectionRevealRef,
    }
  );

  return (
    <section
      ref={sectionRevealRef}
      className="w-full relative select-none my-40"
    >
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
          <span
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-strong font-semibold"
          >
            Collaboration
          </span>
          ?
        </h1>

        <p className="mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu">
          {Array(5)
            .fill(
              " Agile Development Frontend Development React Native Development "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
