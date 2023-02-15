import { useState, useEffect, useRef } from "react";
import audio from "../../../public/sounds/song.mp3";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      className="soundBars link absolute top-3 right-14 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <audio ref={soundBarEl} src={audio} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
