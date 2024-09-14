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
        <h2 className={`${styles.sectionHeadTextLight}`}>My Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects showcase my skills through real examples of my work, including clear descriptions, links to code repositories, and live demos. They highlight my ability to solve complex problems, work with different technologies, and manage projects effectively.

I combine coding with technical writing to create well-documented projects that are easy to understand. Each project is supported by detailed documentation, helping users grasp even the most complex ideas. You can explore live demos and code to see how I turn ideas into successful solutions.
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

      <motion.div className="mt-32">
        <p className={`${styles.sectionSubText} `}>Professional Writing</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>My Technical Content</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          As a skilled Technical Writer with over 4 years of experience, I focus on making complex technical ideas easy to understand. I’ve written many types of content, including API documentation, user guides, training materials, and technical articles. My work has helped companies improve user engagement, meet their content goals, and make their products easier for people to use.

I enjoy breaking down tough concepts into simple language. Whether I’m creating product guides, API docs, or articles, I always aim to produce clear and high-quality content. I work with both local and international companies, delivering valuable results and ensuring I’m fairly compensated for my efforts.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden "
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