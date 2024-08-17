import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "@/components/ui/cursor";
import { Projects } from "@/components/sections/projects";
import { displayFancyLogs } from "utils/log";
import { Collaboration } from "@/components/sections/collaboration";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { About1 } from "@/components/sections/about1";
import { About2 } from "@/components/sections/about2";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { Header } from "@/components/ui/header";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Home } from "@/components/sections/home";
import { Loader } from "@/components/ui/loader";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ProgressIndicator />
          <Cursor isDesktop={isDesktop} />
          <main className="flex flex-col">
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
            >
              DEV
            </div>
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />
            <Home />
            <About1 clientHeight={clientHeight} />
            <Skills />
            <About2 clientHeight={clientHeight} />
            <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
            <Work isDesktop={isDesktop} />
            <Collaboration clientHeight={clientHeight} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
