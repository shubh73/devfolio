"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Howl } from "howler";
import { SoundBars } from "./sound-bars";
import { HamburgerMenu } from "./hamburger-menu";
import { METADATA, MENU_ITEMS } from "../constants";

const multiPopSound = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

export const Nav = () => {
  const navRef = useRef(null);
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.checked) {
      multiPopSound.play();
    }
  }, []);

  // TODO: menu contents
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    });

    return () => ctx.revert();
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
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full bg-gradient-to-b from-black py-8 opacity-0 shadow-black transition-all duration-300"
    >
      <div className="mx-auto flex items-center justify-between px-4 2xl:container md:px-12 xl:px-20">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt={`Logo - ${METADATA.author}`}
            width={25}
            height={25}
            loading="eager"
            priority
          />
        </a>
        <div className="outer-menu relative z-[1] flex items-center gap-8">
          <SoundBars />
          {/* <input
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
          <HamburgerMenu /> */}
        </div>
      </div>
    </nav>
  );
};
