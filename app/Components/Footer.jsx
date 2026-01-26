import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: -10 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeIn",
              }}
              className="text-[40px] font-bold text-black tracking-tight"
            >
              Frontend Developer
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: -10 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: "easeIn",
              }}
              className="mt-1 text-md text-gray-600"
            >
              Building responsive UI, smooth UX, and real-world web apps.
            </motion.p>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-3">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeIn",
              }}
              href="https://www.linkedin.com/in/hriday-das-368b74187/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-md font-medium text-black hover:bg-gray-50 transition"
            >
              <FaLinkedin className="text-md" />
              LinkedIn
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeIn",
              }}
              href="https://github.com/Hriday505"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-black gap-2 rounded-xl border px-4 py-2 text-md font-medium hover:bg-gray-50 transition"
            >
              <FaGithub className="text-md" />
              GitHub
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeIn",
          }}
          className="mt-8 flex flex-col gap-2 border-t pt-6 text-md text-gray-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#projects" className="hover:text-gray-700 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-gray-700 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-gray-700 transition">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
