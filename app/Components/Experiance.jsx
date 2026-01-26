import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { a } from "framer-motion/client";
const projects = [
  {
    id: 1,
    title: "PROJECT 1",
    description: "A productivity and client-management SaaS for freelancers.",
    image: "/projects/ab6.png",
    desc: "If you want, tell me which section should be slightly bigger (Recent/Popular/Live), and I’ll set different widths per section while still keeping “2 visible on mobile.",
    link: "https://www.drabirdaspsychiatrist.in/",
    color: "#acaba9", // indigo
  },
  {
    id: 2,
    title: "PROJECT 2",
    description: "A Laravel-based HMS with patient intake and billing.",
    image: "/projects/hotel1.png",
    desc: "If you want, tell me which section should be slightly bigger (Recent/Popular/Live), and I’ll set different widths per section while still keeping “2 visible on mobile.",
    color: "#75706f", // green
    link: "https://www.roseatehotels.com",
  },
  {
    id: 3,
    title: "PROJECT 3",
    image: "/projects/sf1.png",
    desc: "If you want, tell me which section should be slightly bigger (Recent/Popular/Live), and I’ll set different widths per section while still keeping “2 visible on mobile.",
    color: "#404040", // amber
    link: "https://www.saffronmumbai.in",
  },
  {
    id: 4,
    title: "PROJECT 4",
    image: "/projects/rb1.png",
    desc: "If you want, tell me which section should be slightly bigger (Recent/Popular/Live), and I’ll set different widths per section while still keeping “2 visible on mobile.",
    color: "#2c2c2c", // red
    link: "#",
  },
];

export default function Experiance() {
  return (
    <div className="w-full bg-amber-50  pt-6  min-h-[80vh] mt-50 ">
      {/* headeline*/}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
        transition={{ duration: 1 }}
        className="text-center  sticky font-bold sm:pt-10 pt-8 top-0 text-black tracking-tight  md:text-6xl       text-3xl sm:text-sm"
      >
        Projects
      </motion.h1>
      {/*Project card Container */}
      <div className="h-[100%] flex justify-center flex-col  items-center gap-22 -mt-16  pt-22">
        {projects.map((proj, key) => (
          <motion.div
            initial={{ opacity: 0.35 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
            transition={{ duration: 0.4 }}
            className={` m-4 sticky top-20 cursor-pointer sm:top-44 sm:w-[50%] h-[48vh] sm:h-[60vh] w-[90%] rounded-2xl`}
            style={{ backgroundColor: proj.color }}
          >
            {/* project cards*/}
            <div
              className={`w-[100%] h-[40vh]  sm:h-[50vh]  relative top-0 mx-auto p-4 `}
            >
              <h2
                key={key}
                className="text-center relative z-10 mx-auto sm:text-[25px] text-[16px] font-bold"
              >
                {proj.title}
              </h2>

              {/*card for desktop*/}
              <div className="sm:grid gap-10 grid-cols-12 mt-12 h hidden p-8 justify-between">
                <motion.div
                  initial={{ scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
                  transition={{ duration: 1 }}
                  className=" col-span-6"
                >
                  <Link href={proj.link}>
                    <img
                      src={proj.image}
                      className="w-[100%] h-[145%] rounded-2xl"
                      alt="Description of image"
                    />
                  </Link>
                </motion.div>
                <div className="col-span-6">
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: -50, opacity: 1 }}
                    viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
                    transition={{ duration: 1 }}
                    className="text-[14px] first-letter:text-[20px] first-letter:font-bold  pt-12 "
                  >
                    {proj.desc}
                  </motion.p>
                </div>
              </div>
              {/*card for desktop end*/}

              {/** mobile screen image */}
              <Link href={proj.link}>
                <img
                  src={proj.image}
                  className="w-[90%] max-w-full sm:right-0 sm:hidden bg-size-[100%] absolute   sm:h-[80%] h-[50%] mt-10 rounded-lg bg-contain bg-no-repeat"
                  alt="Description of image"
                />
              </Link>

              {/** mobile screen description */}
              <div className="mt-36 sm:hidden ">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: -10, opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
                  transition={{ duration: 0.4 }}
                  className="text-[12px] pt-16"
                >
                  {proj.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
