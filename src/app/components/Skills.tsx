import React from "react";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 0",
        scrollPaddingTop: "80px",
        backgroundColor: "", // New light grey-blue background
      }}
    >
      <section className="body-font">
        <div className="container px-0 py-0 mx-auto">
          {/* Title */}
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-center mb-10" 
              style={{ color: "#2F4156" }}> {/* Darker title color */}
            MY SKILLS
          </h1>

          {/* Skills Cards */}
          <div
            className="flex flex-wrap justify-center sm:-m-4 -mx-2 -mb-8 md:space-y-0 space-y-4"
            style={{
              rowGap: "20px",
              columnGap: "10px",
            }}
          >
            {/* Skills list */}
            {[
              {
                title: "Frontend Developer",
                description:
                  "Developed dynamic, responsive websites using HTML, CSS, and JavaScript. Collaborated with designers and developers to create user-friendly interfaces, focusing on performance and accessibility for diverse audiences.",
              },
              {
                title: "TypeScript Developer",
                description:
                  "Proficient in building type-safe, scalable applications using TypeScript. Experienced in integrating TypeScript with frameworks like React and Next.js to enhance code reliability, maintainability, and performance.",
              },
              {
                title: "Python Developer",
                description:
                  "Proficient in developing clean, scalable applications using Python. Experienced in leveraging Python for backend systems, automation, and data-driven solutions to enhance code readability, maintainability, and efficiency.",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 md:w-1/3 sm:w-full flex border rounded-lg"
                style={{
                  backgroundColor: "#8FBFC9", // Card background color
                  margin: "10px",
                  borderColor: "#567C8D", // Border color matching Navbar
                }}
              >
                {/* Icon Area */}
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  {/* Icon (Placeholder SVG) */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-grow pl-6">
                  <h2
                    className="text-lg title-font font-medium mb-2"
                    style={{ color: "#2F4156" }} // Darker text for contrast
                  >
                    {skill.title}
                  </h2>
                  <p className="leading-relaxed text-base" style={{ color: "#2F4156" }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
