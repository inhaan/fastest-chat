import { useLayoutEffect } from "react";

export const useCssVar = () => {
  // 모바일에서 키보드가 올라오면 뷰포트가 줄어들어서 레이아웃이 깨지는 현상을 방지하기 위해
  useLayoutEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
};
