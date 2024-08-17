import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Howl } from "howler";
import { METADATA, MENULINKS } from "../../constants";

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundBarEl = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) soundBarEl.current.play();
    else soundBarEl.current.pause();
  };

  useEffect(() => {
    document.querySelector(".soundBars").onclick = function () {
      this.classList.toggle("play");
    };
  }, []);

  return (
    <div
      className="soundBars link top-1 right-14 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="auto" />
    </div>
  );
};

const Menu = () => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');

    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox = document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
      });
    });
  }, []);

  return (
    <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center">
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {MENULINKS.map((el) => (
              <li key={el.name} className="p-0 m-6 text-2xl block">
                <a
                  className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                  href={`#${el.ref}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

export const Header = () => {
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.checked) multiPop.play();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt={`Logo - ${METADATA.author}`}
            width={25}
            height={25}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <SoundBar />
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};
