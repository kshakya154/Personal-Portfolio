import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HeroTitle from "./HeroTitle";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 relative overflow-hidden"
    >
      {/* Floating Glows */}
      <motion.div
        className="w-64 h-64 bg-purple-500 blur-3xl opacity-20 absolute top-10 left-10 rounded-full animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
      />
      <motion.div
        className="w-32 h-32 bg-sky-500 blur-2xl opacity-20 absolute bottom-10 right-10 rounded-full animate-ping"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-4xl text-center relative z-10">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-orbitron font-extrabold text-sky-400 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm Kamal Kumar
        </motion.h1>

        {/* Subtitle Animation */}
        <HeroTitle />

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I create fast, responsive, and visually appealing web apps that
          deliver great user experiences. Passionate about modern JavaScript and
          sleek UI design.
        </motion.p>

        {/* Download Resume Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="/resume.pdf" // <-- Place your actual resume file in the public folder
            download
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 mt-8 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href="https://github.com/kshakya154/"
            target="_blank"
            className="text-sky-400 hover:text-white transition duration-300"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-kumar-82890727b/"
            target="_blank"
            className="text-sky-400 hover:text-white transition duration-300"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kshakya154@gmail.com"
            className="text-sky-400 hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
