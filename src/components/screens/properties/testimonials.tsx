"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Mehta",
      text: "Amazing quality and service! Their vision for premium housing reflects world-class craftsmanship.",
    },
    {
      name: "Sneha Verma",
      text: "Luxury properties at great prices. The attention to detail and professionalism is unmatched.",
    },
  ];

  return (
    <section className="relative py-28">
      {/* Soft floating background blobs */}
      <motion.div
        className="absolute -top-32 -left-20 w-[350px] h-[350px] bg-purple-300/30 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-300/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-700 via-purple-600 to-sky-500 bg-clip-text text-transparent"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 px-6 relative z-10">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden p-7 rounded-2xl border border-white/50 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-purple-500/40 dark:text-purple-400/30">
              <Quote className="w-10 h-10" />
            </div>

            {/* Text */}
            <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-4">
              “{r.text}”
            </p>

            {/* Name */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              — {r.name}
            </h4>

            {/* Glow Line */}
            <span className="mt-3 block h-[2px] w-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>

            {/* Glow hover ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-transparent"
              whileHover={{ borderColor: "rgba(147,51,234,0.4)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
