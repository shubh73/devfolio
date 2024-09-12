"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Profiles } from "./profiles";
import { Typewriter } from "./typewriter";
import { MENU_ITEMS } from "../constants";
import { Lottie } from "./lottie";

export const Home = () => {
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.5",
        )
        .fromTo(
          lottieRef.current,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
          },
          "-=0.5",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENU_ITEMS[0].ref}
      className="relative min-h-screen w-full opacity-0 md:flex md:flex-col md:justify-center"
    >
      <div className="container mx-auto px-4 pt-44 md:pt-0">
        <h5 className="staggered-reveal py-4 font-mono font-medium text-indigo-light">
          Hi, my name is
        </h5>
        <h1 className="text-6xl font-semibold text-white">
          <span className="staggered-reveal relative after:absolute after:bottom-3 after:left-0 after:h-[5px] after:w-full after:animate-grow-horizontal after:rounded-2xl after:bg-gradient-to-r after:from-indigo-light after:to-indigo-dark after:shadow-[0_0_1rem_theme(colors.indigo.dark)] after:content-[''] md:after:h-[7px]">
            Shubh
          </span>
          <span className="staggered-reveal"> Porwal</span>
        </h1>
        <Typewriter className="staggered-reveal" />
        <div className="staggered-reveal">
          <Profiles />
        </div>
        <div className="staggered-reveal pt-3">
          <Button asChild className="link" >
            <Link href={`#${MENU_ITEMS[3].ref}`}>Let&apos;s Talk</Link>
          </Button>
        </div>
      </div>
      <Lottie ref={lottieRef} />
    </section>
  );
};

