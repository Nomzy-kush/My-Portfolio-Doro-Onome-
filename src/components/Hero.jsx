import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap, wavinghand } from '../assets';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'; // Assuming you have these icons available


const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
          <h1
  className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
  Hi, I'm{' '}
  <span
    className="sm:text-battleGray sm:text-[90px] 
    text-night text-[50px] font-mova
    font-extrabold uppercase animate-glow">
    Doro Onome
  </span>
</h1>



            <p className={`${styles.heroSubText} mt-2 text-battleGray sm:text-eerieBlack`}>
              Software Developer and <br className="sm:block hidden sm:text-battleGray" />
              Technical Writer.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center waving-hand-div">
          <a href="#about">
            
          <motion.div
            animate={{
              rotate: [0, 90, 0], // Rotation animation for the waving hand
              y: [0, 24, 0], // Waving animation
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-1/2 h-auto"
          >
            <img src={wavinghand} alt="Waving Hand" className="w-full h-full waving-hand-image" />
           
             {/* Container for icons to orbit around the waving hand */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
                {/* GitHub Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360], // Rotation animation for the icons
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="inline-block"
                >
                  <a href="https://www.github.com/Nomzy-kush" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} color="#000" />
                  </a>
                </motion.div>

                {/* LinkedIn Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360], // Rotation animation for the icons
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="inline-block"
                >
                  <a href="https://www.linkedin.com/in/doro-onome-193205208/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} color="#0077B5" />
                  </a>
                </motion.div>

                {/* Medium Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360], // Rotation animation for the icons
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="inline-block"
                >
                  <a href="https://www.medium.com/@nomzykush" target="_blank" rel="noopener noreferrer">
                    <FaMedium size={32} color="#00ab6c" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </a>
        </div>

      </section>
    </>
  );
};

export default Hero;
