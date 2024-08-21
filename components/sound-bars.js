import { Play as PlayIcon } from "lucide-react";
import { useCallback, useRef } from "react";
import { Button } from "./ui/button";

export const SoundBars = () => {
  const soundBarsRef = useRef(null);
  const soundBarEl = useRef(null);

  // const togglePlayPause = useCallback(() => {
  //   const isPlaying = soundBarsRef.current?.classList.contains("play");
  //   const bars = soundBarsRef.current?.querySelectorAll("span");

  //   if (!isPlaying) {
  //     soundBarEl.current
  //       ?.play()
  //       .catch((e) => console.error("Audio playback failed:", e));

  //     if (bars) {s
  //       bars.forEach((bar) => {
  //         bar.style.animation = "";
  //         bar.offsetHeight; // Trigger reflow
  //         bar.style.animation = null;
  //       });
  //     }
  //     soundBarsRef.current?.classList.add("play");
  //   } else {
  //     soundBarEl.current?.pause();
  //     if (bars) {
  //       bars.forEach((bar) => {
  //         const computedStyle = window.getComputedStyle(bar);
  //         bar.style.transform = computedStyle.getPropertyValue("transform");
  //         bar.style.opacity = computedStyle.getPropertyValue("opacity");
  //         bar.style.animation = "none";
  //       });
  //     }
  //     soundBarsRef.current?.classList.remove("play");
  //   }
  // }, []);

  return (
    <Button className="link" size="icon">
      <PlayIcon />
    </Button>
    // <div
    //   ref={soundBarsRef}
    //   className="soundBars link right-14 top-1 flex items-center justify-center"
    //   onClick={togglePlayPause}
    // >
    //   <span />
    //   <span />
    //   <span />
    //   <span />
    //   <audio ref={soundBarEl} src="/sounds/song.mp3" loop />
    // </div>
  );
};
