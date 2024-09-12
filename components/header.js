"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Howl } from "howler";
import { AnimatePresence, motion } from "framer-motion";
import { SoundBars } from "./sound-bars";
import { HamburgerMenu } from "./hamburger-menu";
import { METADATA, MENU_ITEMS } from "../constants";
import { ScrollProgress } from "./scroll-progress";
import { Button } from "./ui/button";
import {
  PlayIcon,
  Volume as VolumeIcon,
  Volume2Icon,
  PauseIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const songSound = new Howl({
  src: ["/sounds/song.mp3"],
});

const multiPopSound = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  // const inputRef = useRef(null);

  const popUpOnSound = useMemo(
    () =>
      new Howl({
        src: ["/sounds/pop-up-on.mp3"],
        volume,
      }),
    [volume],
  );

  const popUpOffSound = useMemo(
    () =>
      new Howl({
        src: ["/sounds/pop-up-off.mp3"],
        volume,
      }),
    [volume],
  );

  const enableSound = useMemo(
    () =>
      new Howl({
        src: ["/sounds/enable-sound.mp3"],
        volume,
      }),
    [volume],
  );

  const disableSound = useMemo(
    () =>
      new Howl({
        src: ["/sounds/disable-sound.mp3"],
        volume,
      }),
    [volume],
  );

  // const handleClick = useCallback((e) => {
  //   if (e.target.checked) {
  //     multiPopSound.play();
  //   }
  // }, []);

  // TODO: menu contents
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      songSound.pause();
      setIsPlaying(false);
    } else {
      songSound.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleVolumeChange = useCallback(() => {
    if (isMuted) {
      enableSound.play();
      setIsMuted(false);
    } else {
      disableSound.play();
      setIsMuted(true);
    }
  }, [disableSound, enableSound, isMuted]);

  const handleMenuToggle = useCallback(() => {
    if (isOpen) {
      popUpOffSound.play();
      setIsOpen(false);
    } else {
      popUpOnSound.play();
      setIsOpen(true);
    }
  }, [isOpen, popUpOffSound, popUpOnSound]);
  // Menu
  // const handleKeyDown = useCallback((e) => {
  //   if (e.key === "Escape" && inputRef.current?.checked) {
  //     inputRef.current.checked = false;
  //   }
  // }, []);

  // Menu
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [handleKeyDown]);

  return (
    <header
      ref={headerRef}
      className="opacity-1 fixed top-0 w-full bg-gradient-to-b from-black shadow-black"
      style={{ zIndex: 11 }}
    >
      <div className="container mx-auto flex justify-between px-4 py-6">
        <Link
          href="#home"
          className="link py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          aria-label="Home"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={24}
            height={24}
            loading="eager"
            priority
          />
        </Link>
        <div className="flex gap-4">
          <Button
            className="link"
            variant="icon"
            size="icon"
            onClick={handlePlayPause}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isPlaying ? "pause" : "play"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </motion.div>
            </AnimatePresence>
          </Button>
          <Button
            className="link"
            variant="icon"
            size="icon"
            onClick={handleVolumeChange}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMuted ? "volume" : "volume2"}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {isMuted ? <VolumeIcon /> : <Volume2Icon />}
              </motion.div>
            </AnimatePresence>
          </Button>
          <Button
            className="link"
            variant="icon"
            size="icon"
            onClick={handleMenuToggle}
          >
            <AnimatePresence mode="wait">
              {/* <motion.div
                key={isOpen}
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 90, scale: 1.2 }}
                exit={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {isOpen ? <MenuIcon /> : <XIcon />}
              </motion.div> */}
              <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {isOpen ? <XIcon /> : <MenuIcon />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
        {/* <div className="mx-auto flex items-center justify-between px-4 2xl:container md:px-12 xl:px-20">
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
        <div
          className="outer-menu relative flex items-center gap-8"
          style={{ zIndex: 1 }}
        >
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
          <HamburgerMenu />
        </div>
      </div> */}
      </div>
    </header>
  );
};
