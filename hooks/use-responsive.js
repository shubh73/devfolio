import { useMediaQuery } from "./use-media-query";

export const useResponsive = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return {
    isDesktop,
  };
};
