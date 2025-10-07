import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import aboutMeVideo from '../assets/personal/aboutme.mp4';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="relative xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] group overflow-hidden"
    >
      {/* Front content */}
      <div
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] 
                   flex justify-evenly items-center flex-col 
                   transition-opacity duration-500 group-hover:opacity-0"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>

      {/* Hover content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center 
                   bg-gradient-to-br from-[#0177B5] via-[#01AB6C] to-[#000000] 
                   rounded-[20px]"
      >
        <h3 className="text-white text-[22px] font-extrabold uppercase tracking-wider drop-shadow-lg">
          Expert 😌
        </h3>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <div variants={textVariant()}>
        <p className={styles.aboutText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <motion.p className="mt-4 text-[18px] max-w-3xl leading-[30px] text-gray-800">
      I began my career as a front-end developer. I found technical writing when an article I wrote went viral. Since then, I have made tutorials, documentation, and support guides in SaaS environments, APIs, and distributed product teams. I am open to jobs in both front-end development and technical writing. I am also learning more about AI Engineering to grow my skills in development, documentation, and intelligent systems.
</motion.p>


{/* 🎥 Personal Intro Video */}
<div 
  variants={fadeIn('left', 'spring', 0.3, 0.75)} 
  className="mt-10 w-full max-w-2xl"
>
  <video 
    src={aboutMeVideo} 
    controls 
    muted={false} 
    className="w-full h-auto rounded-2xl border border-gray-300 shadow-lg"
  />
</div>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
