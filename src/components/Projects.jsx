// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import React from "react";

const projects = [
  {
    title: "Balloon Twister",
    description: "Party decoration platform with booking system.",
    image: "/images/balloon-twister.jpg",
    live: "https://balloon-twister-tgkk.vercel.app/",
    github: "https://github.com/kshakya154/Balloon-Twister",
  },
  {
    title: "Todo List",
    description: "Minimal drag-and-drop todo app in React.",
    image: "/images/todo-list.jpg",
    live: "https://todo-list-vert-two-33.vercel.app/",
    github: "https://github.com/kshakya154/Todo-List",
  },
  {
    title: "Mega Blog",
    description: "Full-stack blog with markdown & dashboard.",
    image: "/images/mega-blog.jpg",
    live: "https://mega-blog-eosin-eight.vercel.app/",
    github: "https://github.com/kshakya154/Mega-Blog",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#111827] text-white relative">
      <h2 className="text-4xl font-bold text-center text-sky-400 pt-16 mb-10">
        My Projects
      </h2>

      <div
        style={{ height: `${projects.length * 100}vh` }}
        className="relative"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ zIndex: index }}
          >
            <motion.div
              className="bg-gray-800 border border-sky-500/30 rounded-3xl shadow-2xl p-6 w-[90%] md:w-[65%] max-w-4xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-sky-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex justify-center gap-6 text-xl mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                  title="View Code on GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                  title="Live Preview"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
