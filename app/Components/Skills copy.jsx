import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiGreensock,
  SiFramer,
  SiNodedotjs,
  SiMysql,
  SiLaravel,
  SiGit,
  SiGithub,
  SiPostman,
  SiRadixui,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Vue", Icon: SiVuedotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  // shadcn/ui doesn't have a universally-available brand icon in many libs,
  // so we use Radix (shadcn is built on Radix) + label it as shadcn/ui:
  { name: "shadcn/ui", Icon: SiRadixui },
  { name: "Redux", Icon: SiRedux },
  { name: "GSAP", Icon: SiGreensock },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MySQL", Icon: SiMysql },
  { name: "Laravel", Icon: SiLaravel },
  { name: "REST API", Icon: MdApi },
  { name: "Postman", Icon: SiPostman },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

const Skills = () => {
  // duplicate for seamless marquee
  const marqueeList = [...skills, ...skills];

  return (
    <section id="skills" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="text-3xl text-center text-white md:text-6xl font-bold tracking-tight">
            Skills
          </h2>
          {/* <p className="mt-2 text-sm text-gray-600">
            Tools & technologies I use regularly.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur"
        >
          {/* soft fade on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="py-6">
            <div className="marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
              <div className="marquee__track">
                {marqueeList.map((s, i) => (
                  <div
                    key={`${s.name}-${i}`}
                    className="mx-3 flex min-w-[86px] flex-col items-center justify-center"
                    title={s.name}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl border bg-black shadow-sm">
                      <s.Icon className="text-2xl" aria-hidden="true" />
                    </div>
                    <span className="mt-2 text-[11px] font-medium text-gray-700">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* marquee css */}
          <style jsx global>{`
            .marquee {
              animation: marquee 22s linear infinite;
            }
            .marquee__track {
              display: flex;
              width: max-content;
              align-items: center;
            }
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
