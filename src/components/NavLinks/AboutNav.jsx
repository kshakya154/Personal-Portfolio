import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaMusic,
  FaCode,
  FaCamera,
} from "react-icons/fa";
import { SiTailwindcss, SiPython } from "react-icons/si";
import CountUp from "react-countup";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutNav = () => {
  return (
    <motion.section
      className="px-6 pt-20 pb-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Profile Image */}
      <motion.img
        src="../public/images/my-image.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-sky-500 hover:scale-110 transition-transform duration-300 shadow-lg"
        variants={fadeUp}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-sky-400 mb-4 font-orbitron"
        variants={fadeUp}
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-center max-w-2xl text-gray-300 mb-8"
        variants={fadeUp}
      >
        I'm a frontend web developer focused on building beautiful, functional
        and responsive web experiences using modern tools like React, Tailwind,
        and Python.
      </motion.p>

      {/* Tech Stack */}
      <motion.div
        className="flex flex-wrap gap-6 text-4xl text-sky-300 justify-center mb-10"
        variants={fadeUp}
      >
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJsSquare title="JavaScript" />
        <FaReact title="React.js" />
        <SiTailwindcss title="Tailwind CSS" />
        <SiPython title="Python" />
      </motion.div>

      {/* Counters */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
        variants={fadeUp}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-sky-400">
            <CountUp end={2} duration={3} />+
          </h3>
          <p className="text-gray-300 mt-2">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-sky-400">
            <CountUp end={15} duration={3} />+
          </h3>
          <p className="text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-sky-400">
            <CountUp end={100} duration={3} />%
          </h3>
          <p className="text-gray-300 mt-2">Client Satisfaction</p>
        </div>
      </motion.div>

      {/* Journey */}
      <motion.div className="w-full max-w-3xl mb-16" variants={fadeUp}>
        <h3 className="text-2xl text-sky-400 mb-6 font-semibold text-center">
          Journey
        </h3>
        <div className="border-l-4 border-sky-500 pl-6 space-y-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              🎓 B.Tech in Computer Science
            </h4>
            <p className="text-gray-400">XYZ University | 2020 - 2024</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">🔧 Built Projects</h4>
            <p className="text-gray-400">
              Created multiple real-world projects using React, Tailwind CSS,
              Framer Motion, and Appwrite — showcasing modern frontend skills
              and problem solving.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">
              📚 Constant Learner
            </h4>
            <p className="text-gray-400">
              Continuously learning new technologies and best practices to stay
              ahead in the web development world.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Fun Facts */}
      <motion.div className="mb-12 w-full max-w-5xl" variants={fadeUp}>
        <h3 className="text-2xl text-sky-400 mb-6 font-semibold text-center">
          Fun Facts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMusic />,
              text: "Lo-fi and Chillhop Lover",
              bg: "from-purple-500 to-indigo-600",
            },
            {
              icon: <FaCode />,
              text: "Late-night Coding Wizard",
              bg: "from-yellow-500 to-orange-500",
            },
            {
              icon: <FaCamera />,
              text: "Capturing Moments 📸",
              bg: "from-pink-500 to-red-500",
            },
          ].map(({ icon, text, bg }, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${bg} p-6 rounded-2xl text-white shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300`}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{icon}</div>
              <p className="text-center font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-2xl text-white text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        variants={fadeUp}
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </motion.section>
  );
};

export default AboutNav;
