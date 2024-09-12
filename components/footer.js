"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useMemo, useState } from "react";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import { Button } from "@/components/ui/button";
import { Profiles } from "./profiles";
import { Meteors } from "./meteors";
import { MENU_ITEMS, METADATA } from "../constants";

export const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const heartClickSound = useMemo(
    () =>
      new Howl({
        src: ["/sounds/glug-a.mp3"],
        rate: playbackRate,
        volume: 0.5,
      }),
    [playbackRate],
  );

  const handleClick = useCallback(() => {
    setPlaybackRate((rate) => rate + 0.1);
    heartClickSound.play();
  }, [heartClickSound]);

  return (
    <footer className="relative w-full bg-gradient-to-r from-indigo-light to-indigo-dark bg-cover">
      <div className="relative overflow-x-hidden pb-[270px] pt-[120px]">
        <Meteors />
        <div className="absolute bottom-0 h-[266px] w-full bg-[url('/footer/background.png')] bg-scroll bg-center bg-no-repeat">
          <div className="absolute bottom-0 left-[30%] h-[105px] w-[330px] animate-slide-volkswagen bg-[url('/footer/volkswagen.gif')] bg-[length:100%] bg-center bg-no-repeat" />
          <div className="absolute bottom-0 left-[38%] h-[100px] w-[88px] animate-slide-cyclist bg-[url('/footer/cyclist.gif')] bg-[length:100%] bg-center bg-no-repeat" />
        </div>
      </div>
      <Fade bottom distance="4rem">
        <div className="h-full w-full pt-32">
          <div
            className="section-container flex h-full flex-col items-center justify-end py-12"
            style={{ zIndex: 10 }}
          >
            <h1 className="text-center text-3xl font-medium md:text-4xl">
              Feel free to connect on social media.
            </h1>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENU_ITEMS[3].ref}`}
                variant="secondary"
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
              by <span className="text-white">{METADATA.author}</span>
            </p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="lazy"
        height={180}
      />
    </footer>
  );
};
