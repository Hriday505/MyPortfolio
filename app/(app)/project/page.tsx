import Nav from "@/app/Components/Nav";
import { div } from "framer-motion/client";

const ProjectData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    link: "www.website.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    link: "www.website.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    link: "www.website.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
    link: "www.website.com",
  },
];

export default function ProjectPage({ isdark, setIsdark }) {
  return (
    <>
      <Nav isdark={isdark} setIsdark={setIsdark}></Nav>

      <div className="w-full max-w-screen-xl mx-auto bg-orange-50 h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid mx-auto gap-2  grid-cols-1 max-w-5xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {ProjectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-400  w-76 flex col-span-2  overflow-hidden flex-col  gap-2 h-86 rounded-lg p-4  m-4"
            >
              <h2 className="text-2xl  font-extrabold">{project.title}</h2>
              <p className="font-extralight">{project.description}</p>
              <a
                href={project.link}
                className="text-black  text-[13px] bg-red-50 w-30 text-center rounded-3xl p-2"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
