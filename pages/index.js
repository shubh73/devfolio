import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import About1 from "@/components/About/About1";
import Skills from "@/components/Skills/Skills";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Work from "@/components/Work/Work";
import Collaboration from "@/components/Collaboration/Collaboration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { displayFancyLogs } from "utils/log";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

const Page = ({ isLive, isDesktop, clientHeight }) => (
  <>
    <Header>
      <Menu />
    </Header>
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
      <Hero fadeIn={isLive} />
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
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const { innerHeight, orientation, history } = window;
    history.scrollRestoration = "manual";
    root.style.overflow = "hidden";

    const timer = setTimeout(() => {
      root.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "instant" });
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();

    setIsDesktop(
      typeof orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1
    );
    setClientHeight(innerHeight);

    return () => {
      clearTimeout(timer);
      root.style.overflow = "";
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Page
        key={isLoading ? "static" : "live"}
        isLive={!isLoading}
        isDesktop={isLoading ? true : isDesktop}
        clientHeight={isLoading ? 0 : clientHeight}
      />
    </>
  );
}
