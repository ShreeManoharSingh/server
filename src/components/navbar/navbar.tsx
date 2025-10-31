"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Projects", "About", "Contact"];

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,1)", "rgba(255,255,255,1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: navBg }}
      className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/40 dark:border-white/10"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent"
        >
          Uday Estates
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link, i) => (
            <li key={i} className="relative group cursor-pointer text-gray-800 dark:text-gray-200">
              {link}
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gradient-to-r from-sky-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 dark:text-white"
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-xl border-t border-white/20"
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
            {links.map((link, i) => (
              <motion.li
                key={i}
                whileTap={{ scale: 0.95 }}
                className="text-gray-800 dark:text-gray-200 hover:text-sky-500"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
