import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yTitle = useTransform(scrollY, [0, 200], [0, -20]);
  const yNav = useTransform(scrollY, [0, 200], [0, -10]);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      ref={ref}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 backdrop-blur-sm border-b border-gray-700 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-sky-400 font-orbitron"
          style={{ y: yTitle }}
        >
          Kamal Kumar
        </motion.h1>

        {/* Desktop Nav */}
        <motion.nav
          className="space-x-10 hidden md:flex text-[18px] font-orbitron text-white"
          style={{ y: yNav }}
        >
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative group hover:text-sky-400 transition duration-200 ${
                  isActive ? "text-sky-400" : "text-white"
                }`
              }
            >
              {name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-3xl cursor-pointer z-50" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-gray-800 text-white flex flex-col items-center justify-center space-y-8 text-xl font-orbitron z-40 md:hidden"
      >
        {navLinks.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `hover:text-sky-400 transition duration-200 ${
                isActive ? "text-sky-400" : "text-white"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </motion.div>
    </motion.header>
  );
}
