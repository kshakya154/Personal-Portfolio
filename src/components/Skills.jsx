import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from "react-icons/fa";
import React from "react";
const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    description: "Building responsive, fast, and interactive web interfaces using React, Tailwind, and modern JS.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "Creating user-focused and visually engaging designs with accessibility and usability in mind.",
  },
  {
    title: "Backend Integration",
    icon: <FaServer />,
    description: "RESTful APIs, authentication, databases – connecting your app to powerful server logic.",
  },
  {
    title: "Mobile Responsiveness",
    icon: <FaMobileAlt />,
    description: "Optimizing layouts for all screen sizes with pixel-perfect responsiveness and animations.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gray-900 text-white z-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-[120px] top-10 left-10 rounded-full -z-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-sky-500 opacity-20 blur-[100px] bottom-10 right-10 rounded-full -z-10 animate-ping" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-sky-400 mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-sky-400/30 transition-shadow duration-300 border border-sky-500/10"
          >
            <div className="text-4xl text-sky-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
