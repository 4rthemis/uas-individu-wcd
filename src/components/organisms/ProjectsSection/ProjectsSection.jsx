import React from "react";
import { Button } from "../../ui/button";
import { Text } from "../../atoms/Text/Text";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";

export const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full"
        >
          <Text
            variant="h2"
            color="primary"
            align="center"
            className="self-stretch"
          >
            Projects
          </Text>

          <Text
            variant="body"
            color="secondary"
            align="center"
            className="w-full max-w-[782px]"
          >
            A selection of my projects, where I turn ideas into seamless,
            user-friendly digital experiences.
          </Text>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-8 relative self-stretch w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 w-full max-w-[1200px]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <Button
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          asChild
          className="
    w-full 
    max-w-[400px] 
  
    bg-[#3d46c9] 
    rounded-full 
    hover:bg-[#3d46c9]/90 
    transition-colors
    px-4
  "
        >
          <a
            href="https://dribbble.com/syahruluix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full py-3 sm:py-3 md:py-4 lg:py-5"
          >
            <span
              className="
        text-sm 
        sm:text-base 
        md:text-lg 
          font-normal 
        text-white 
        text-center 
        leading-none 
        tracking-tight
      "
            >
              Explore More
            </span>
          </a>
        </Button>
      </div>
    </section>
  );
};
