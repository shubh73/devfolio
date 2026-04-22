import { useCallback } from "react";
import { Howl } from "howler";

const REGISTRY = {
  pop: { src: "/sounds/multi-pop.mp3" },
  "pop-down": { src: "/sounds/pop-down.mp3" },
  "tab-switch": { src: "/sounds/mouse-click.mp3" },
  heart: { src: "/sounds/glug-a.mp3", volume: 0.5 },
  "charge-up": { src: "/sounds/charge-up.wav" },
};

const cache = new Map();

const getHowl = (name) => {
  if (!cache.has(name)) {
    const { src, volume } = REGISTRY[name];
    cache.set(name, new Howl({ src: [src], volume }));
  }
  return cache.get(name);
};

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useSfx = () => {
  const play = useCallback((name, opts) => {
    if (reduceMotion()) return;
    const howl = getHowl(name);
    if (opts?.rate) howl.rate(opts.rate);
    howl.stop();
    howl.play();
  }, []);

  return { play };
};
