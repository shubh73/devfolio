import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, imageKey, description, gradient, url, tech } = project;

  const image = PROJECT_IMAGES[imageKey];

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    VanillaTilt.init(projectCard.current, tiltOptions);
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl snap-start link ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl"
          fill
        />
        <Image
          src={image}
          alt={name}
          placeholder="blur"
          fill
          className={styles.projectImage}
        />
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <h1
          className="font-medium text-2xl sm:text-3xl z-10 pl-2 pt-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div
          className={`
            ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `}
        >
          <div className="flex flex-col pb-8">
            {tech.map((el, i) => (
              <Image
                className={`${i % 2 === 0 && "ml-16"} mb-4`}
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
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

export default ProjectTile;
