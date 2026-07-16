import { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const updateScroll = () => {

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    return () =>
      window.removeEventListener("scroll", updateScroll);

  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;