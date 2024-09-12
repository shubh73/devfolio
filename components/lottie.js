import { forwardRef, useEffect } from "react";
import gsap from "gsap";
import lottie from "lottie-web";

export const Lottie = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        animationData: require("../public/lottie/lottie.json"),
      });

      gsap.delayedCall(1.2, () => {
        animation.play();
      });

      return () => animation.destroy();
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 right-0 w-2/3 md:right-16 md:w-1/3"
    />
  );
});

Lottie.displayName = "Lottie";
