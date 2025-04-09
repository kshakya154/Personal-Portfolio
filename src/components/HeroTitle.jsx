// HeroTitle.jsx
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import React from "react";
export default function HeroTitle() {
  return (
    <motion.div
      className="text-xl md:text-2xl text-white mt-2 font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <span className="text-sky-400">
        <Typewriter
          words={[
            "Frontend Developer",
            "JavaScript Enthusiast",
            "UI/UX Designer",
            "React & Framer Motion Fan",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </motion.div>
  );
}
