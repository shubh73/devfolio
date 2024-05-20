import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";
import { useCallback } from "react";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = ({ children }) => {
  const handleClick = useCallback((e) => {
    if (e.target.checked) multiPop.play();
  }, []);

  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Shubh Porwal"
            width={25}
            height={25}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <SoundBar />
          <input
            aria-labelledby="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            aria-label="menu"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
