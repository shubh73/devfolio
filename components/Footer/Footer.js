/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import { gsap, Linear } from "gsap";
import { MENULINKS } from "../../constants";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";

const Profiles = dynamic(() => import("../Profiles/Profiles"));

const Footer = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
  }, [targetSection]);

  return (
    <footer
      className="w-full relative select-none bg-cover mb-40"
      ref={targetSection}
    >
      <FooterBg />
      <Fade bottom distance={"4rem"}>
        <div className="w-full h-full pt-32">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <h1 className="font-medium text-3xl md:text-4xl text-center seq">
              Feel free to connect on social media.
            </h1>
            <div className="text-center seq">
              <Profiles />
            </div>
            <div className="seq pt-4 text-center">
              <Button
                href={`#${MENULINKS[4].ref}`}
                classes="link"
                type="secondary"
              >
                Let&apos;s Talk
              </Button>
            </div>
            <p className="text-center text-sm sm:text-base font-medium tracking-wide mt-8">
              Developed with{" "}
              <span role="img" aria-label="emoji" className="animate-pulse">
                ❤️
              </span>{" "}
              by <span className="text-gray.dark.5">Shubh Porwal</span>
            </p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="lazy"
        height={180}
      />
      <p className="absolute left-[15%] -bottom-[7.5rem] font-extralight text-sm xl:text-base w-[40%]">
        *Credits to the owners for the codepen and vectors/icons used.
        <br />
        These were picked from various sources over the internet.
      </p>

      <style jsx global>{`
        footer {
          background-image: linear-gradient(270deg, #9f55ff, #7000ff, #8b31ff);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
