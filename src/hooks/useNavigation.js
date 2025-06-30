import { useState, useCallback, useEffect } from "react";

export const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navigateToSection = useCallback(
    (sectionId) => {
      setActiveSection(sectionId);
      closeMobileMenu();

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMobileMenu]
  );

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "testimonials"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    
    // Also listen for resize events to recalculate positions
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return {
    isMobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    closeMobileMenu,
    navigateToSection,
  };
};