"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, LucideIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialIcons: LucideIcon[] = [Facebook, Instagram, Linkedin];
  const quickLinks: string[] = ["Home", "Properties", "Testimonials", "Team", "Contact"];

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
      >
        {/* Brand & About */}
        <div>
          <h2 className="font-bold text-xl mb-2">Uday Real Estate Developers</h2>
          <p className="opacity-90 text-sm leading-relaxed">
            Crafting premium homes with innovation, quality and trust.
            We build spaces that elevate lifestyles and inspire modern living.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {socialIcons.map((Icon, i: number) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-sm">
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((item: string) => (
              <li key={item}>
                <Link href="#" className="opacity-90 hover:opacity-100 hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h3 className="font-semibold mb-3 text-white">Contact Us</h3>
          <div className="flex items-center gap-2 opacity-90 mb-2">
            <Phone size={16} /> +91-98765-43210
          </div>
          <div className="flex items-center gap-2 opacity-90">
            <Mail size={16} /> support@udayrealty.com
          </div>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-xs opacity-90 mt-10"
      >
        © 2025 Uday Real Estate. All rights reserved.
      </motion.div>
    </footer>
  );
}
