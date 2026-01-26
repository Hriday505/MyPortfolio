"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineServer,
  HiOutlineBolt,
} from "react-icons/hi2";

export default function WhyHireMe() {
  const cards = [
    {
      title: "UI Focus",
      desc: "Responsive, clean layouts with smooth animations and polished UX.",
      Icon: HiOutlineSparkles,
    },
    {
      title: "API Integration",
      desc: "Auth flows, dashboards, CRUD, REST APIs, and real app data handling.",
      Icon: HiOutlineServer,
    },
    {
      title: "Performance + Best Practices",
      desc: "Fast loading, reusable components, SEO basics, and clean code structure.",
      Icon: HiOutlineBolt,
    },
  ];

  return (
    <section className="py-14 bg-gray-300" id="why-hire-me ">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl text-black md:text-6xl font-bold tracking-tight">
            Why Hire Me
          </h2>
          <p className="mt-2 text-[14px] md:text-base text-gray-600">
            Short, practical strengths I bring to real projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 190, duration: 1 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="rounded-2xl border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.4, stagger: 3 }}
                className="flex items-start gap-4"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border  bg-gray-800">
                  <c.Icon className="text-2xl text-white" />
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-700">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[20px] leading-relaxed text-gray-600">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
