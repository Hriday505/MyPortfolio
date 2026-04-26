import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "drabirdaspsychiatrist.in",
    description: "This is a website of a Psychiatrist based in kolkata.i build this website using next.js,tailwind and framermotion and used email.js for maile sendingand integrated calendly for bookinng ",
    image: "/projects/ab6.png",
    desc: "If you want, tell me which section should be slightly bigger (Recent/Popular/Live), and I’ll set different widths per section while still keeping “2 visible on mobile.",
    link: "https://www.drabirdaspsychiatrist.in/",
    color: "#acaba9",
  },
  {
    id: 2,
    title: "roseatehotels.com",
    description: "This is a Hotel Booking Webite for a Hotel Chain.i used react,Taiwind,gsap, node and mysql and restAPi for building this Project.",
    image: "/projects/hotel1.png",
    desc: "This is a Hotel Booking Webite for a Hotel Chain.i used react,Taiwind,node and mysql and restAPi for building this Porject",
    color: "#B8B7B3",
    link: "https://www.roseatehotels.com",
  },
  {
    id: 3,
    title: "saffronmumbai.in",
    image: "/projects/sf1.png",
    description: "saffron is a Mumbai based Restaurent.here you reserved your table through their website. i built this website use next.js,tailwind,and mysql",
    color: "#C9C8C4",
    link: "https://www.saffronmumbai.in",
  },
  {
    id: 4,
    title: "dubai-realty.com",
    image: "/projects/rb1.png",
    description: "Dubai reality is a real Estate webiste , i worked on the frionetnd part of this website and i used react tailwind,shadcn and gsap for this project",
    color: "#8F8E8A",
    link: "https://dubai-realty.com/en",
  },
];

export default function Experiance({ isdark = true }) {
  return (
    <div className={`w-full ${isdark ? "bg-white" : "bg-black"} pt-6 min-h-[80vh] mt-0`}>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1 }}
        className={`text-center mb-18 sticky font-bold sm:pt-10 pt-8 top-0 ${
          isdark ? "text-black" : "text-white"
        } tracking-tight md:text-6xl text-3xl sm:text-sm`}
      >
        Projects
      </motion.h1>

      <div className="h-[100%] flex justify-center flex-col items-center gap-22 -mt-16 pt-22">
        {projects.map((proj, key) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0.35 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="m-4 sticky top-20 cursor-pointer w-[90%] md:w-[85%] lg:top-44 lg:w-[50%] h-auto lg:h-[60vh] rounded-2xl"
            style={{ backgroundColor: proj.color }}
          >
            <div className="w-full h-auto lg:h-[50vh] relative top-0 mx-auto p-4 md:p-6 lg:p-4">
              <h2
                key={key}
                className="text-center relative z-10 mx-auto text-[16px] md:text-[22px] lg:text-[25px] font-bold"
              >
                {proj.link !== "#" ? (
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {proj.title}
                  </Link>
                ) : (
                  proj.title
                )}
              </h2>

              {/* desktop only - EXACTLY your old large screen layout */}
              <div className="hidden lg:grid gap-10 grid-cols-12 mt-12 h p-8 justify-between">
                <motion.div
                  initial={{ scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1 }}
                  className="col-span-6"
                >
                  <Link href={proj.link}>
                    <img
                      src={proj.image}
                      className="w-[100%] h-[145%]  rounded-2xl"
                      alt="Description of image"
                    />
                  </Link>
                </motion.div>

                <div className="col-span-6">
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: -50, opacity: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1 }}
                    className="text-[14px] first-letter:text-[20px] first-letter:font-bold pt-12"
                  >
                    {proj.description}
                  </motion.p>
                </div>
              </div>

              {/* tablet only */}
              <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 mt-8 items-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                >
                  <Link href={proj.link}>
                    <img
                      src={proj.image}
                      className="w-full h-[240px] rounded-xl object-cover"
                      alt="Description of image"
                    />
                  </Link>
                </motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="text-[13px] leading-6"
                >
                  {proj.desc}
                </motion.p>
              </div>

              {/* mobile only - your old mobile layout */}
              <div className="md:hidden">
                <Link href={proj.link}>
                  <img
                    src={proj.image}
                    className="w-[90%] max-w-full bg-size-[100%] absolute h-[50%] -mt-34 rounded-lg bg-contain bg-no-repeat"
                    alt="Description of image"
                  />
                </Link>

                <div className="mt-36">
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: -10, opacity: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.4 }}
                    className="text-[12px] pt-15"
                  >
                    {proj.desc}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
