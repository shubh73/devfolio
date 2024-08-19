"use client";

/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../../constants";

export const Skills = () => {
  const sectionRef = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap
  //       .timeline({ defaults: { ease: "none" } })
  //       .from(
  //         sectionRef.current.querySelectorAll(".staggered-reveal"),
  //         { opacity: 0, duration: 0.5, stagger: 0.5 },
  //         "<",
  //       );

  //     ScrollTrigger.create({
  //       trigger: sectionRef.current.querySelector(".skills-wrapper"),
  //       start: "top 80%",
  //       end: "top 20%",
  //       // start: "100px bottom",
  //       // start: "-=1000",
  //       // end: "center center",
  //       scrub: 0.5,
  //       animation: tl,
  //       markers: true,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      });

      // tl.from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
      //   opacity: 0,
      //   y: 50,
      //   duration: 0.5,
      //   stagger: 0.2,
      // });

      tl.from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
        opacity: 0.2, // Changed from 0 to 0.2 for a more subtle fade-in
        y: 20, // Reduced from 50 to 20 for less dramatic movement
        duration: 0.8, // Increased from 0.5 to 0.8 for smoother animation
        stagger: 0.1, // Reduced from 0.2 to 0.1 for quicker staggering
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      // className="relative mt-44 w-full select-none"
      className="section"
    >
      <div className="flex flex-col justify-center py-16">
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
