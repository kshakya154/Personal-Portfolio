import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 88 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 65 },
  { name: "Express", icon: <SiExpress />, level: 60 },
  { name: "MongoDB", icon: <SiMongodb />, level: 60 },
  { name: "Python", icon: <SiPython />, level: 80 },
  { name: "GitHub", icon: <FaGithub />, level: 85 },
];

const highlights = [
  { title: "6 Months +", subtitle: "Development Experience" },
  { title: "15+ Projects", subtitle: "Built with ❤️ & Code" },
  { title: "10+ Techs", subtitle: "Used in Real Projects" },
];

const SkillBar = ({ name, level, icon }) => (
  <motion.div
    className="w-full mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-2 mb-1 text-white font-medium">
      <span className="text-sky-400 text-xl">{icon}</span>
      <span>{name}</span>
      <span className="ml-auto text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-sky-400"
        style={{ width: `${level}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-sky-400 font-orbitron">
          My Skills
        </h2>
        <p className="text-center text-gray-300 text-lg mb-4">
          I believe in writing clean, efficient, and scalable code.
        </p>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Over the past couple of years, I've dived deep into frontend and
          backend development. I enjoy crafting seamless user experiences,
          building dynamic web apps, and constantly learning new technologies.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl text-center w-52 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-sky-400">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
