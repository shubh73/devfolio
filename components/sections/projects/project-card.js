/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { cn } from "utils/cn";

const tiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

export const ProjectCard = ({ project, className, isDesktop }) => {
  const { name, image, blurImage, description, gradient, url } = project;
  const projectCardRef = useRef(null);

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
        className="h-[25rem] w-[38rem] relative p-6 flex flex-col justify-between max-w-full"
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
        />
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          blurDataURL={blurImage}
          className="absolute top-0 rounded-xl shadow-xl !w-[17rem] z-0 !object-contain !right-8 !h-auto"
          style={{
            transform: "rotate(-22.5deg)",
            left: "unset",
            bottom: "unset",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div
          className="w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden will-change-transform"
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
              />
            ))}
          </div>
        </div>
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};
