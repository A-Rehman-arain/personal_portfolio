"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

// Define types for the project data
interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "This is a full stack E-commerce Website that I made using Next.js and sanity  for backend.",
    image: "/images/projects/a-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/A-Rehman-arain/Ecommerce-website",
    previewUrl: "https://ecommerce-website-topaz-three.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Website",
    description: "This is a Car blog website built using Next.js. For users to check out the latest car news.",
    image: "/images/projects/a-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/A-Rehman-arain/next.js-blogweb",
    previewUrl: "https://next-js-blogweb.vercel.app/",
  },
  {
    id: 3,
    title: "Resume Builder",
    description: "I built this Resume Builder for people to make their Resume  in just few clicks .",
    image: "/images/projects/a-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/A-Rehman-arain/hackhtahon",
    previewUrl: "https://hackhtahon.vercel.app/",
  },
  {
    id: 4,
    title: "Secure-Data-Encryption-app",
    description: "I built this Secure Data Encryption app using Python for secure data encryption.",
    image: "/images/projects/a-4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/A-Rehman-arain/Secure-Data-Encryption-app",
    previewUrl: "https://secure-data-encryption-app-j.streamlit.app/",
  },
  
];
const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full bg-[#2F4156] py-20 px-[20px] md:px-[40px]">
      <h2 className="text-center  text-4xl font-bold  text-white mt-8 mb-2 md:mb-4">
        My Projects
      </h2>
      
           <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

 export default ProjectsSection;
