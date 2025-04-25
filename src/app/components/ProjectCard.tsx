 import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#567C8D]">
      {/* Project Card Image with hover effect */}
      <div
        className="h-52 md:h-72 relative group"
        style={{
          backgroundImage: `url(${imgUrl})`, // Correct background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hover overlay with links */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#f8feff] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
          {/* GitHub Link */}
          <Link
            href={gitUrl}
            passHref
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#8FBFC9] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#347684] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {/* Preview Link */}
          <Link
            href={previewUrl}
            passHref
            className="h-14 w-14 border-2 relative rounded-full border-[#347684] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#8FBFC9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="text-white rounded-b-xl mt-3 bg-[#4e719a] py-6 px-4">
        {/* Project Title */}
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        {/* Project Description */}
        <p className="text-[#ADB7BE]">{description}</p> {/* Light Gray text for description */}
      </div>
    </div>
  );
};
 export default ProjectCard;
