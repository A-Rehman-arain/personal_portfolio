"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Interface for the tab data
interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

// Sample data for tabs
const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 text-lg">
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">HTML</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">CSS</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">JavaScript</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">TypeScript</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">Next.js</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 text-lg">
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">I completed my intermediate studies at Shah Abdul Latif Bhitai Government College.</li>
        <li className="hover:text-[#4C6B78] hover:bg-[#2F4156] hover:px-2 transition duration-300">Currently learning Certified Cloud Applied Generative AI Engineer (GenEng)</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  // Tab change handler
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      style={{ height: "685px" }} // Set custom height here
      className="pt-6 w-full bg-[#4C6B78] text-white scroll-mt-20" // Background color matching theme
      id="about"
    >
      <div className="container mx-auto px-4 md:px-12 py-8 xl:gap-18 sm:py-12 xl:px-28 md:grid md:grid-cols-2 grid-cols-1 md:items-start">
        <div className="hidden md:flex justify-start max-w-full">
          <Image
            src="/images/img2.png"
            width={500}
            height={800}
            alt="About Image"
            className="rounded-lg max-w-full h-auto" // Ensure image is responsive and contained
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:pl-28">
          <h2 className="text-4xl font-extrabold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed text-[#F0F4F8]">
            I am a front-end developer with a passion for creating interactive and responsive web applications. I have experience working with  HTML, CSS, JavaScript, TypeScript, Next.js,  and Python. I am a quick learner, always expanding my knowledge and skill set. I am a team player and excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="text-white hover:bg-[#2F4156] px-6 py-2 rounded-lg transition duration-300 text-sm md:text-base" // Adjust text size on mobile
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="text-white hover:bg-[#181818] px-6 py-2 rounded-lg transition duration-300 text-sm md:text-base"
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
