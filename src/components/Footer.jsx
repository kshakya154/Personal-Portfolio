import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-sky-400 py-10 px-6 relative overflow-hidden z-10"
    >
      {/* Glowing Background Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 blur-[120px] opacity-30 rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-600 blur-[100px] opacity-30 rounded-full -z-10 animate-ping" />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl font-bold tracking-wider font-mono"
        >
          &lt;/Kamal&gt;
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex space-x-6 text-2xl"
        >
          <a
            href="https://github.com/kshakya154"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-kumar-82890727b/"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kshakya154@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm text-gray-400 text-center md:text-right"
        >
          © {new Date().getFullYear()} Kamal Kumar. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
