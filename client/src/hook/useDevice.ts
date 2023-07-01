import { useMemo } from "react";

export const useDevice = () => {
  const isMobile = useMemo(() => {
    return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );
  }, []);

  const isDesktop = useMemo(() => {
    return !isMobile;
  }, [isMobile]);

  return {
    isMobile,
    isDesktop,
  };
};
