"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectCard } from "../components/project-card";
import { useResponsive } from "hooks/use-responsive";
import { cn } from "utils/cn";
import { MENU_ITEMS, PROJECTS } from "../constants";

// export const Projects = () => {
//   const sectionRef = useRef(null);
//   const sectionTitleRef = useRef(null);
//   const projectWrapperRef = useRef(null);

//   const { isDesktop, clientHeight } = useViewport();
//   const [canScroll, setCanScroll] = useState(false);

//   useEffect(() => {
//     let projectsScrollTrigger;
//     let projectsTimeline;

//     if (isDesktop) {
//       [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
//     } else {
//       setupMobileScroll();
//     }

//     const [revealTimeline, revealScrollTrigger] = getRevealSt();

//     return () => {
//       projectsScrollTrigger && projectsScrollTrigger.kill();
//       projectsTimeline && projectsTimeline.kill();
//       revealScrollTrigger && revealScrollTrigger.kill();
//       revealTimeline && revealTimeline.progress(1);
//     };
//   }, [sectionRef, sectionTitleRef, isDesktop]);

//   const getRevealSt = () => {
//     const revealTl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     revealTl.from(
//       sectionRef.current.querySelectorAll(".staggered-reveal"),
//       {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//       },
//       0.3,
//     );

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 80%",
//       end: "bottom bottom",
//       animation: revealTl,
//     });

//     return [revealTl, scrollTrigger];
//   };

//   const getProjectsSt = () => {
//     const timeline = gsap.timeline({ defaults: { ease: "none" } });
//     const projectWrapper = projectWrapperRef.current;
//     const elementWidth = projectWrapper.scrollWidth;
//     const windowWidth = window.innerWidth;

//     sectionRef.current.style.width = `${elementWidth}px`;
//     const distance = elementWidth - windowWidth;
//     const duration = `${(elementWidth / window.innerHeight) * 100}%`;

//     timeline
//       .to(sectionRef.current, { x: -distance })
//       .to(sectionTitleRef.current, { x: distance }, "<");

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: duration,
//       scrub: 1,
//       pin: true,
//       animation: timeline,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         projectWrapper.style.transform = `translateX(${-progress * distance}px)`;
//       },
//     });

//     return [timeline, scrollTrigger];
//   };

//   const setupMobileScroll = () => {
//     const projectWrapper = projectWrapperRef.current;
//     projectWrapper.style.width = "calc(100vw - 1rem)";
//     projectWrapper.style.overflowX = "scroll";
//     setCanScroll(true);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id={MENU_ITEMS[1].ref}
//       className={`${
//         isDesktop ? "min-h-screen overflow-hidden" : ""
//       } section-container relative w-full transform-gpu`}
//     >
//       <div className="flex h-full flex-col justify-center">
//         <div
//           className="inner-container flex transform-gpu flex-col"
//           ref={sectionTitleRef}
//         >
//           <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">
//             PROJECTS
//           </p>
//           <h1 className="text-gradient staggered-reveal mt-2 w-fit text-6xl font-medium">
//             My Projects
//           </h1>
//           <h2 className="staggered-reveal mt-2 max-w-sm text-[1.65rem] font-medium md:max-w-lg">
//             Some things I&apos;ve built with love, expertise and a pinch of
//             magical ingredients.
//           </h2>
//         </div>
//         <div
//           ref={projectWrapperRef}
//           className={`${
//             clientHeight > 650 ? "mt-12" : "mt-8"
//           } project-wrapper no-scrollbar staggered-reveal flex w-fit`}
//           style={{
//             overflowX: canScroll ? "scroll" : "visible",
//             scrollSnapType: canScroll ? "x mandatory" : "none",
//           }}
//         >
//           {PROJECTS.map((project, index) => (
//             <ProjectCard
//               key={project.name}
//               project={project}
//               className={` ${index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"} ${canScroll ? "scroll-snap-align-start" : ""} `}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export const Projects = () => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  // const { clientHeight } = useViewport();
  const { isDesktop } = useResponsive();

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
      id={MENU_ITEMS[1].ref}
      className={cn(
        isDesktop && "min-h-screen",
        "relative mx-auto flex w-full transform-gpu  items-center px-4 2xl:container md:px-12 xl:px-20",
      )}
    >
      <div className="flex h-full flex-col justify-center">
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
          // className="project-wrapper no-scrollbar staggered-reveal mt-8 flex w-fit"
          // className={`${
          //   clientHeight > 650 ? "mt-12" : "mt-8"
          // } project-wrapper no-scrollbar staggered-reveal flex w-fit`}
          className="project-wrapper no-scrollbar staggered-reveal flex w-fit"
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
