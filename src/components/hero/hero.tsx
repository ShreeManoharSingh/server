"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
}

const Hero: FC<HeroProps> = ({ image, title, subtitle }) => {
  return (
    <section className="relative h-[92vh] w-full flex justify-center items-center overflow-hidden">
      
      {/* Background with slow cinematic zoom */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-white px-6 text-center"
      >
        <p className="text-sm md:text-base uppercase tracking-[6px] text-yellow-300/90 font-medium mb-3 drop-shadow-lg">
          Luxury • Trust • Excellence
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-lg"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex items-center gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm md:text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300">
            Explore Projects
          </button>
          <button className="px-6 py-3 border border-white/60 rounded-full text-white text-sm md:text-base hover:bg-white/15 backdrop-blur-sm transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center text-white/80"
      >
        <span className="text-xs tracking-wider mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-1 h-7 rounded-full bg-white/60"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
