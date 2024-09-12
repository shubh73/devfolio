"use client";

import React, { useState, useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { DotPattern } from "../components/dot-pattern";
import { cn } from "utils/cn";

export const StickyScroll = ({ contentItems }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardLength = contentItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contentItems.map(
      (_, index) => index / cardLength - 0.1,
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#000000"];
  const linearGradients = [
    "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
    "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
    "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
  ];

  return (
    <div className="relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "z-20 rounded-2xl px-2 py-3 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] md:px-0",
        )}
      />

      <div
        className="absolute left-0 right-0 top-0 h-14 rounded-2xl bg-gradient-to-b from-black to-transparent"
        style={{ zIndex: 10 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-14 rounded-2xl bg-gradient-to-t from-black to-transparent"
        style={{ zIndex: 10 }}
      />

      <motion.div
        ref={containerRef}
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="no-scrollbar flex h-[22rem] justify-center space-x-10 overflow-y-auto rounded-2xl p-4 outline outline-1 outline-gray-dark-1"
      >
        <div className="flex items-start px-4">
          <div className="max-w-2xl">
            {contentItems.map((item, index) => (
              <div key={item.title + index} className="my-8">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-slate-100 text-2xl font-bold"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-slate-300 mt-4 max-w-sm text-lg"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          animate={{
            backgroundImage:
              linearGradients[activeCard % linearGradients.length],
          }}
          className="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block"
        >
          {contentItems[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </div>
  );
};
