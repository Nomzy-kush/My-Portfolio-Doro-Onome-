import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (window.scrollY / totalScroll) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-[#06AED5] z-50 shadow-lg"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: scrollProgress + "%" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
}
