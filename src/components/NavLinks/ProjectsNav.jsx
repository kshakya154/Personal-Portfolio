import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import balloonTwisterImg from "../../assets/projects/Balloon-twister.png";
import balloonDataImg from "../../assets/projects/Balloon-twister-data.png";
import megaBlogImg from "../../assets/projects/Mega-blog.png";
import passwordGenImg from "../../assets/projects/Password-generator.png";
import todoListImg from "../../assets/projects/todo-list.png";

// Project data with image paths
const projects = [
  {
    title: "Balloon Twister",
    description:
      "A colorful balloon decoration booking platform with real-time form handling and booking confirmation.",
    tech: ["React", "Appwrite", "Tailwind"],
    live: "https://balloon-twister-tgkk.vercel.app/",
    github: "https://github.com/kshakya154/Balloon-Twister",
    image: balloonTwisterImg,
  },
  {
    title: "Mega Blog",
    description:
      "A blogging platform where users can explore dynamic content, view posts, and engage with rich blog features.",
    tech: ["React", "Appwrite", "Tailwind"],
    live: "https://mega-blog-eosin-eight.vercel.app/",
    github: "https://github.com/kshakya154/Mega-Blog",
    image: megaBlogImg,
  },
  {
    title: "Password Generator",
    description:
      "A secure and stylish password generator with custom character options, length control, and clipboard copy.",
    tech: ["React", "Tailwind"],
    live: "https://password-generator-flax-nine.vercel.app/",
    github: "https://github.com/kshakya154/Password-Generator",
    image: passwordGenImg,
  },
  {
    title: "Balloon Twister Data",
    description:
      "A simple admin dashboard to view and manage booking data for the Balloon Twister app.",
    tech: ["React", "Tailwind", "Appwrite"],
    live: "https://balloon-twister-data.vercel.app/",
    github: "https://github.com/kshakya154/Balloon-twister-data",
    image: balloonDataImg,
  },
  {
    title: "Todo List",
    description:
      "A sleek and animated task manager app with simple UI to add, check, and delete todos.",
    tech: ["React", "Tailwind"],
    live: "https://todo-list-vert-two-33.vercel.app/",
    github: "https://github.com/kshakya154/Todo-List",
    image: todoListImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function ProjectsNav() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center text-sky-400"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-700 hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-52 object-cover mb-4"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              {/* Project Info */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-sky-800 text-white px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
