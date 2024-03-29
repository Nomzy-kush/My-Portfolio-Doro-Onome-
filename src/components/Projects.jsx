import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects, articles } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({ id, name, description, image, repo, demo, index }) => {
  return (
    <motion.div
      // variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative lg:w-[30%] w-[100%] mb-8 md:mb-10 lg:mb-0 flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow mt-8`}
    >
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(repo, '_blank')}
            className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
          >
            <img
              src={github}
              alt="source code"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
        </div>

        <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman -mt-[1rem]">
          {name}
        </h2>
        <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
          {description}
        </p>
        <button
          className="live-demo flex justify-between sm:text-[16px] text-[14px] text-timberWolf font-bold font-beckman items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism sm:mt-[22px] mt-[16px] hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
          onClick={() => window.open(demo, '_blank')}
          onMouseOver={() => {
            document
              .querySelector('.btn-icon')
              .setAttribute('src', pineappleHover);
          }}
          onMouseOut={() => {
            document.querySelector('.btn-icon').setAttribute('src', pineapple);
          }}
        >
          <img
            src={pineapple}
            alt="pineapple"
            className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
          />
          Live Link
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-wrap justify-between`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </motion.div>

      <motion.div>
        <p className={`${styles.sectionSubText} `}>Professional Writing</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Articles.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          As a professional technical writer, I've authored articles that delve
          into complex technical topics, providing clear and concise
          explanations. These articles showcase my ability to communicate
          intricate concepts, adapt to diverse subject matter, and deliver
          high-quality content that resonates with the intended audience.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-wrap justify-between`}
        id="articles"
      >
        {articles.map((article, index) => (
          <ProjectCard key={article.id} index={index} {...article} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');