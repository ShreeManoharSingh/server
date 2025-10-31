"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

interface Project {
  name: string;
  location: string;
  img: string;
}

export default function Properties() {
  const projects: Project[] = [
    {
      name: "Uday Heights",
      location: "Mumbai",
      img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    },
    {
      name: "Uday Residency",
      location: "Pune",
      img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    },
  ];

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
          Our Legacy of Quality
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          Completed <span className="text-blue-700">Projects</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm">
          Explore the masterpieces that define our commitment to luxury, trust, and timeless architecture.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white/80 backdrop-blur-lg hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer group"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <motion.div whileHover={{ scale: 1.07 }} className="w-full h-full">
                <Image
                  src={`${p.img}?w=1000`}
                  alt={p.name}
                  fill
                  className="object-cover rounded-t-2xl transition-all duration-700"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                📍 {p.location}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                View Details →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
