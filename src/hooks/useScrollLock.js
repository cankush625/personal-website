import { useEffect } from "react";

const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll"; // prevent layout shift from scrollbar disappearing

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
};

export default useScrollLock;
