import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px]">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.aboutText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn('', '', 0.1, 0.5)}
  className="mt-4 text-[18px] max-w-3xl leading-[30px] text-black bg-clip-text bg-gradient-to-br from-green-400 via-blue-400 to-black-900 font-bold animate-glow">
  I am a skilled professional with over 4+ years as a Technical Writer and over 3 years of experience as a professional Frontend Developer. I completed a 2000+ hour coding boot camp to refine my technical skills and have since worked with companies of all sizes to build and maintain clean, reusable codebases.

  Alongside coding, I have a talent for turning complex technical ideas into clear and helpful documentation, including API guides, user manuals, and training materials. My focus is on delivering high-quality work that exceeds customer expectations and drives user engagement.

  I offer my services to companies both locally and internationally, ensuring top-quality results—while getting paid, of course!
</motion.p>



      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
