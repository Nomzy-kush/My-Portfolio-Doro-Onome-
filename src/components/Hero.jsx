import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { bwmap, worldmap, wavinghand } from '../assets';
import { styles } from '../styles';

const Hero = () => {
  const names = [
    { text: "Churchill", color: "#06AED5" },
    { text: "Doro", color: "#01AB6C" },
    { text: "Onome", color: "#FFD700" },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % names.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col sm:flex-row items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-[#05080f] via-[#0b1120] to-[#111827] pt-24 sm:pt-0"
    >
      {/* Background */}
      <motion.div style={{ rotate }} className="absolute inset-0 z-0 opacity-50">
        <img
          src={bwmap}
          alt="background map"
          className="w-full h-full object-cover hidden sm:block mix-blend-overlay"
        />
        <img
          src={worldmap}
          alt="mobile map"
          className="w-full h-full object-cover sm:hidden mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#0b1120]/80" /> {/* subtle tint overlay */}
      </motion.div>

      {/* Waving hand (on small screens it appears first) */}
      <div className="z-10 flex flex-col items-center justify-center sm:order-2 order-1 mb-6 sm:mb-0 mt-6 sm:mt-0 ml-6 sm:ml-0">
        <motion.div
          animate={{ rotate: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-40 h-40 sm:w-52 sm:h-52 mb-4"
        >
          <img src={wavinghand} alt="Waving Hand" className="w-full h-full" />
        </motion.div>

        {/* Social icons */}
        <div className="flex gap-5">
          <a href="https://github.com/Nomzy-kush" target="_blank" rel="noreferrer">
            <FaGithub size={32} className="text-gray-300 hover:text-[#06AED5] transition-colors" />
          </a>
          <a href="https://linkedin.com/in/doro-onome-193205208/" target="_blank" rel="noreferrer">
            <FaLinkedin size={32} className="text-gray-300 hover:text-[#06AED5] transition-colors" />
          </a>
          <a href="https://medium.com/@nomzykush" target="_blank" rel="noreferrer">
            <FaMedium size={32} className="text-gray-300 hover:text-[#06AED5] transition-colors" />
          </a>
        </div>
      </div>

      {/* Name + subtitle */}
      <div className="z-10 text-left sm:text-left sm:order-1 order-2 px-6">
        <h1 className={`${styles.heroHeadText} uppercase`}>
          Hi, I’m{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={names[index].text}
              initial={{ rotateY: 360, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -360, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                background: `linear-gradient(90deg, ${names[index].color}, white, ${names[index].color})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: `0 0 20px ${names[index].color}50`,
              }}
              className="font-extrabold text-5xl sm:text-7xl tracking-wide"
            >
              {names[index].text}
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="text-gray-300 mt-4 text-lg sm:text-xl">
          Frontend Developer and <span className="text-[#06AED5]">Technical Writer</span>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
