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
import { INTRO_SEEN_KEY, whenShown } from "utils/intro";

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

const LOADER_MS = 1800;
const LOADER_EXIT_MS = 1000;
const REDUCED_MOTION_EXIT_MS = 200;

const markIntroSeen = () => {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {}
};

export default function Home() {
  const [viewport, setViewport] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const isLoading = viewport === null;

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const skipIntro =
      reducedMotion || "introSeen" in document.documentElement.dataset;
    let timer;
    let exitTimer;

    const stopWaiting = whenShown((shownAt) => {
      timer = setTimeout(
        () => {
          window.scrollTo({ top: 0, behavior: "instant" });
          markIntroSeen();
          setViewport({
            isDesktop:
              typeof window.orientation === "undefined" &&
              navigator.userAgent.indexOf("IEMobile") === -1,
            clientHeight: window.innerHeight,
          });
          exitTimer = setTimeout(
            () => setShowLoader(false),
            reducedMotion ? REDUCED_MOTION_EXIT_MS : LOADER_EXIT_MS,
          );
        },
        skipIntro ? 0 : Math.max(0, shownAt + LOADER_MS - performance.now()),
      );
    });

    displayFancyLogs();

    return () => {
      stopWaiting();
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader exiting={!isLoading} />}
      <Page
        key={isLoading ? "static" : "live"}
        isLive={!isLoading}
        isDesktop={viewport?.isDesktop ?? true}
        clientHeight={viewport?.clientHeight ?? 0}
      />
    </>
  );
}
