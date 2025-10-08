import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects, articles } from '../constants';
import ProjectCard from './canvas/ProjectCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      {/* 🧱 Projects Section */}
      <section id="projects" className="py-16 bg-[#0b1120] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div>
            <p className={`${styles.sectionSubText}`}>Case Studies</p>
            <h2 className={`${styles.sectionHeadTextLight}`}>My Projects</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-medium font-mova">
              These projects showcase my skills through real examples of my work, including clear
              descriptions, links to code repositories, and live demos. They highlight my ability to
              solve complex problems, work with different technologies, and manage projects effectively.
              <br /><br />
              I combine coding with technical writing to create well-documented projects that are easy
              to understand. Each project is supported by detailed documentation, helping users grasp
              even the most complex ideas.
            </motion.p>
          </div>

          {/* ✅ Projects Grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-10">
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-[90%] lg:w-[90%] max-w-[600px]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 Publications Section */}
      <section id="publications" className="py-16 bg-[#0b1120] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="mb-8">
            <p className={`${styles.sectionSubText}`}>Professional Writing</p>
            <h2 className={`${styles.sectionHeadTextLight}`}>My Publications</h2>
          </motion.div>

          <motion.p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-medium font-mova">
            As a skilled Technical Writer with over 4 years of experience, I focus on making complex
            technical ideas easy to understand. I’ve written many types of content, including API
            documentation, user guides, training materials, and technical articles.
            <br /><br />
            My work has helped companies improve user engagement, meet their content goals, and make
            their products easier for people to use.
          </motion.p>

          {/* ✅ Publications Grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-10">
            {articles.map((article) => (
              <div key={article.id} className="w-full md:w-[90%] lg:w-[90%] max-w-[600px]">
                <ProjectCard {...article} />
              </div>
            ))}
          </div>

          {/* ✅ Blog link */}
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="text-[#06AED5] hover:text-[#048bad] font-medium font-mova text-lg"
            >
              Check out my Blog 👉
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
