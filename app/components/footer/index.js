"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import { Button } from "@/components/ui/button";
import { Profiles } from "@/components/ui/profiles";
import { Meteors } from "./meteors";
import { MENULINKS, METADATA } from "../../../constants";
import styles from "./footer.module.scss";

export const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const heartClickSound = new Howl({
    src: ["/sounds/glug-a.mp3"],
    rate: playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate((rate) => rate + 0.1);
    heartClickSound.play();
  };

  return (
    <footer
      className="relative w-full select-none bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(var(--indigo-light)), hsl(var(--indigo-dark)))",
      }}
    >
      <div className={styles.top}>
        <Meteors />
        <div className={styles.background}>
          <div className={styles.background__one} />
          <div className={styles.background__two} />
        </div>
      </div>
      <Fade bottom distance={"4rem"}>
        <div className="h-full w-full pt-32">
          <div className="section-container z-10 flex h-full flex-col items-center justify-end py-12">
            <h1 className="text-center text-3xl font-medium md:text-4xl">
              Feel free to connect on social media.
            </h1>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENULINKS[4].ref}`}
                type="secondary"
                className="link"
              >
                Let&apos;s Talk
              </Button>
            </div>
            <p className="mt-8 text-center text-sm font-medium tracking-wide text-white sm:text-base">
              Developed with{" "}
              <button onClick={handleClick} className="link cursor-none">
                <span className="block animate-bounce">❤️</span>
              </button>{" "}
              by <span className="text-white">{METADATA.author.name}</span>
            </p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="eager"
        height={180}
      />
    </footer>
  );
};
