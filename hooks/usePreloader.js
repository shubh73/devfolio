import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

export const usePreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const MININUM_DURATION = 2600;
  //   const EXIT_DURATION = 500;

  useEffect(() => {
    const startTime = performance.now();

    const font1 = new FontFaceObserver("Calibre");
    const font2 = new FontFaceObserver("JetBrains Mono");

    Promise.all([
      window.loadContentPromise,
      font1.load(null, 2000),
      font2.load(null, 2000),
    ])
      .then(() => {
        const endTime = performance.now();
        let t = 0;

        if (endTime - startTime >= MININUM_DURATION) {
          t = endTime - startTime;
        }

        setTimeout(() => {
          setIsLoaded(true);
        }, MININUM_DURATION - t);

        // // 300ms is the time to anim and remove the loading screen
        // setTimeout(() => {
        //   setAnimationsCanRun(true);
        // }, MININUM_DURATION - t + EXIT_DURATION);
      })
      .catch((e) => console.log("Error", e));
  }, [setIsLoaded]);

  return { isLoaded };
};
