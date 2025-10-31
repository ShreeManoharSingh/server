"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  desc: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Uday Singh",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      desc: "Leading with vision, integrity, and a passion for architectural excellence.",
    },
    {
      name: "Aisha Khan",
      role: "Chief Architect",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Designing sustainable, luxury structures with modern engineering precision.",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-300/30 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Floating Line */}
      <motion.div
        className="absolute top-10 left-1/2 w-40 h-40 border-l border-purple-400/40"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-700 via-purple-600 to-sky-500 bg-clip-text text-transparent"
      >
        Leadership & Vision
      </motion.h2>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto relative z-10">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/40 dark:border-zinc-700"
          >
            {/* Floating Decorative Circles */}
            <motion.span
              className="absolute w-4 h-4 bg-purple-500 rounded-full -top-2 -right-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              className="absolute w-3 h-3 bg-blue-400 rounded-full -bottom-2 left-4"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Profile */}
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-purple-300/60">
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              {t.name}
            </h3>
            <p className="text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
              {t.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-sm mx-auto">
              {t.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  