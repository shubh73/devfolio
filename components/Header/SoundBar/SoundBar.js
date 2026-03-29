import { useState, useRef } from "react";
import { cn } from "utils/cn";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!isPlaying) soundBarEl.current.play();
    else soundBarEl.current.pause();
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "soundBars link top-1 right-14 flex items-center justify-center",
        isPlaying && "play",
      )}
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="none" />
    </div>
  );
};

export default SoundBar;
