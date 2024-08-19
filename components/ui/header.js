"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Howl } from "howler";
import { METADATA, MENULINKS } from "../../constants";

const SoundBars = () => {
  const soundBarsRef = useRef(null);
  const soundBarEl = useRef(null);

  const togglePlayPause = useCallback(() => {
    const isPlaying = soundBarsRef.current?.classList.contains("play");
    const bars = soundBarsRef.current?.querySelectorAll("span");

    if (!isPlaying) {
      soundBarEl.current
        ?.play()
        .catch((e) => console.error("Audio playback failed:", e));

      if (bars) {
        bars.forEach((bar) => {
          bar.style.animation = "";
          bar.offsetHeight; // Trigger reflow
          bar.style.animation = null;
        });
      }
      soundBarsRef.current?.classList.add("play");
    } else {
      soundBarEl.current?.pause();
      if (bars) {
        bars.forEach((bar) => {
          const computedStyle = window.getComputedStyle(bar);
          bar.style.transform = computedStyle.getPropertyValue("transform");
          bar.style.opacity = computedStyle.getPropertyValue("opacity");
          bar.style.animation = "none";
        });
      }
      soundBarsRef.current?.classList.remove("play");
    }
  }, []);

  return (
    <div
      ref={soundBarsRef}
      className="soundBars link right-14 top-1 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="auto" />
    </div>
  );
};

const Menu = () => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');

    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox = document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
      });
    });
  }, []);

  return (
    <div className="menu pointer-events-none invisible fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden">
      <div className="flex flex-none items-center justify-center overflow-hidden">
        <div className="flex max-h-screen flex-none items-center justify-center overflow-y-auto overflow-x-hidden text-center opacity-0">
          <ul className="m-0 block max-h-screen list-none px-0 py-4">
            {MENULINKS.map((el) => (
              <li key={el.name} className="m-6 block p-0 text-2xl">
                <a
                  className="link relative inline font-mono text-5xl font-bold duration-300 hover:no-underline"
                  href={`#${el.ref}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

export const Header = () => {
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.checked) {
      multiPop.play();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && inputRef.current?.checked) {
        inputRef.current.checked = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full select-none bg-gradient-to-b from-black py-8 shadow-black transition-all duration-300">
      <div className="section-container flex items-center justify-between">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt={`Logo - ${METADATA.author.name}`}
            width={25}
            height={25}
          />
        </a>
        <div className="outer-menu relative z-[1] flex items-center gap-8">
          <SoundBars />
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute right-0 top-0 h-6 w-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger flex h-6 w-6 items-center justify-center">
            <div className="relative flex w-full flex-none items-center justify-center bg-white duration-300" />
          </div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};
