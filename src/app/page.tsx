import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with flex-grow to push footer down if content is short */}
      <main className="flex-grow w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        
        {/* Container for Skills, Projects, and Email sections */}
        <div className="w-full ">
          <Skills />
          <ProjectsSection />
          <EmailSection />
        </div>
      </main>

      {/* Footer pinned to the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
