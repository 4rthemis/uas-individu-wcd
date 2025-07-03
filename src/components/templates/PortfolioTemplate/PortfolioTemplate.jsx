import { HeroSection } from "../../organisms/HeroSection/HeroSection";
import { AboutSection } from "../../organisms/AboutSection/AboutSection";
import { SkillsSection } from "../../organisms/SkillsSection/SkillsSection";
import { ProjectsSection } from "../../organisms/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "../../organisms/TestimonialsSection/TestimonialsSection";
import { FooterSection } from "../../organisms/FooterSection/FooterSection";
import { usePortfolio } from "../../../hooks/usePortfolio";
import { Ticker } from "../../molecules/Ticker/Ticker";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const PortfolioTemplate = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {
    personalInfo,
    navigationItems,
    skills,
    projects,
    testimonials,
    socialLinks,
    designerRoles,
  } = usePortfolio();

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#f6f6f6] min-h-screen">
      {/* Hero Section - Full width with internal margins */}
      <div className="w-full">
        <HeroSection
          personalInfo={personalInfo}
          navigationItems={navigationItems}
        />
      </div>
      <Ticker items={designerRoles} />

      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[120px] space-y-12 sm:space-y-24 md:space-y-28 lg:space-y-32">
          <AboutSection personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
        </div>
      </div>

      <div className="w-full mt-20 sm:mt-24 md:mt-28 lg:mt-32">
        <TestimonialsSection testimonials={testimonials} />
      </div>

      <div className="w-full mt-20 sm:mt-24 md:mt-28 lg:mt-32">
        <FooterSection socialLinks={socialLinks} />
      </div>
    </div>
  );
};
