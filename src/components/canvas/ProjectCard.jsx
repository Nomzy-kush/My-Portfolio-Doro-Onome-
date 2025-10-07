import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiCss3,
} from "react-icons/si";

const techLogos = {
  react: <SiReact className="text-sky-400 text-xl" />,
  mongodb: <SiMongodb className="text-green-500 text-xl" />,
  tailwind: <SiTailwindcss className="text-cyan-400 text-xl" />,
  nextjs: <SiNextdotjs className="text-gray-200 text-xl" />,
  supabase: <SiSupabase className="text-green-400 text-xl" />,
  css: <SiCss3 className="text-blue-400 text-xl" />,
};

const ProjectCard = ({
  name,
  description,
  problem,
  action,
  result,
  repo,
  demo,
  tags = [],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative p-[1px] rounded-2xl overflow-hidden group w-full"
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#06AED5,#067B9C,#0b1120)] animate-gradientMove bg-[length:200%_200%] rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Card Content */}
      <div className="relative bg-[#0b1120]/95 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_25px_rgba(6,174,213,0.3)] transition-all duration-500">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#06AED5] to-[#067B9C] bg-clip-text text-transparent mb-3">
            {name}
          </h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {description}
          </p>

          {/* Problem / Action / Result */}
          <div className="text-gray-400 space-y-2 text-sm mb-5">
            {problem && (
              <p>
                <span className="font-semibold text-[#06AED5]">Problem:</span>{" "}
                {problem}
              </p>
            )}
            {action && (
              <p>
                <span className="font-semibold text-[#06AED5]">Action:</span>{" "}
                {action}
              </p>
            )}
            {result && (
              <p>
                <span className="font-semibold text-[#06AED5]">Result:</span>{" "}
                {result}
              </p>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <p className="text-gray-400 text-xs font-medium mb-2">
            <span className="text-[#06AED5] font-semibold">Tech Stack:</span>{" "}
            {tags.map((t) => t.name).join(", ")}
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            {tags.map((tag) => (
              <div key={tag.name} className="flex items-center space-x-1">
                {techLogos[tag.name]}
                <span className={`text-xs ${tag.color}`}>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-[#06AED5]/10 hover:bg-[#06AED5]/20 px-3 py-2 rounded-lg text-[#06AED5] transition-all duration-200"
            >
              <FaGithub /> Code
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-[#06AED5]/10 hover:bg-[#06AED5]/20 px-3 py-2 rounded-lg text-[#06AED5] transition-all duration-200"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
