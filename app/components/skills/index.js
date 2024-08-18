"use client";

/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../../constants";

export const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<",
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="relative mt-44 w-full select-none"
    >
      <div className="section-container flex flex-col justify-center py-16">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute bottom-2/4 right-0 hidden w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="skills-wrapper flex flex-col">
          <div className="flex flex-col">
            <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">
              SKILLS
            </p>
            <h1 className="text-gradient staggered-reveal mt-2 w-fit text-6xl font-medium">
              My Skills
            </h1>
            <h2 className="staggered-reveal mt-2 w-full text-[1.65rem] font-medium md:max-w-lg">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="staggered-reveal mb-4 text-base font-medium uppercase tracking-widest text-gray-light-2">
              LANGUAGES AND TOOLS
            </h3>
            <div className="staggered-reveal flex flex-wrap items-center gap-6">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="staggered-reveal mb-4 text-base font-medium uppercase tracking-widest text-gray-light-2">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="staggered-reveal flex transform-gpu flex-wrap gap-6">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap">
            <div className="staggered-reveal mb-6 mr-16 xs:mr-20">
              <h3 className="mb-4 text-base font-medium uppercase tracking-widest text-gray-light-2">
                DATABASES
              </h3>
              <div className="flex transform-gpu flex-wrap gap-6">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="mb-4 text-base font-medium uppercase tracking-widest text-gray-light-2">
                Other
              </h3>
              <div className="flex transform-gpu flex-wrap gap-6">
                {SKILLS.other.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
