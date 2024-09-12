"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { cn } from "utils/cn";
import { useResponsive } from "hooks/use-responsive";

const tiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

export const ProjectCard = ({ project, className }) => {
  const { name, image, blurImage, description, gradient, url } = project;
  const projectCardRef = useRef(null);

  const { isDesktop } = useResponsive();

  useEffect(() => {
    VanillaTilt.init(projectCardRef.current, tiltOptions);
  }, []);

  return (
    <a
      ref={projectCardRef}
      href={url}
      className={cn("overflow-hidden rounded-3xl", className)}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className="relative flex h-[25rem] w-[38rem] max-w-full flex-col justify-between p-6"
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          blurDataURL={blurImage}
          className="absolute !right-8 top-0 !h-auto !w-[17rem] rounded-xl !object-contain shadow-xl"
          style={{
            transform: "rotate(-22.5deg)",
            left: "unset",
            bottom: "unset",
            zIndex: 0,
          }}
        />
        <div
          className="absolute left-0 top-0 h-32 w-full"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-32 w-full"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <h1
          className="transform-gpu pl-2 text-3xl font-medium sm:text-4xl"
          style={{ transform: "translateZ(3rem)", zIndex: 10 }}
        >
          {name}
        </h1>
        <div
          className="absolute left-24 top-0 hidden h-full w-1/2 items-center will-change-transform sm:flex"
          style={{
            transform: "rotate(-22.5deg) translateZ(2rem)",
          }}
        >
          <div className="flex flex-col pb-8">
            {project?.tech.map((el, i) => (
              <img
                key={el}
                className={cn("mb-4", i % 2 === 0 && "ml-16")}
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <h2
          className="transform-gpu text-lg font-medium tracking-wide text-white"
          style={{ transform: "translateZ(0.8rem)", zIndex: 10 }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};
