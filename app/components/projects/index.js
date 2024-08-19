"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, PROJECTS } from "../../../constants";
import { ProjectCard } from "./project-card";
import { useViewport } from "hooks/use-viewport";

export const Projects = () => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  const { isDesktop, clientHeight } = useViewport();

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        sectionRef.current.querySelector(".project-wrapper");
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "scroll";
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, sectionTitleRef, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<",
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });
    const sidePadding =
      document.body.clientWidth -
      sectionRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      sectionRef.current.querySelector(".project-wrapper").clientWidth;
    sectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(sectionRef.current, { x: width })
      .to(sectionTitleRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
      } section-container relative w-full transform-gpu select-none`}
    >
      <div className="py- flex h-full flex-col justify-center">
        <div
          className="inner-container flex transform-gpu flex-col"
          ref={sectionTitleRef}
        >
          <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">
            PROJECTS
          </p>
          <h1 className="text-gradient staggered-reveal mt-2 w-fit text-6xl font-medium">
            My Projects
          </h1>
          <h2 className="staggered-reveal mt-2 max-w-sm text-[1.65rem] font-medium md:max-w-lg">
            Some things I&apos;ve built with love, expertise and a pinch of
            magical ingredients.{" "}
          </h2>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } project-wrapper no-scrollbar staggered-reveal flex w-fit`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              className={
                index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
