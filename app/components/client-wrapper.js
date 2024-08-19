"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { Loader } from "@/components/ui/loader";
import { displayFancyLogs } from "utils/log";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export const ClientWrapper = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2600);

    displayFancyLogs();
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return children;
};
