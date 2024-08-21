"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { cn } from "utils/cn";

export const STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

const typedOptions = {
  strings: STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

export const Typewriter = ({ className }) => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, typedOptions);

    return () => typed.destroy();
  }, []);

  return (
    <p>
      <span
        ref={typedElementRef}
        className={cn(
          "font-mono text-3xl leading-loose text-gray-light-3",
          className,
        )}
      />
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
    </p>
  );
};
