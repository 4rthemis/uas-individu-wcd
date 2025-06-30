import { useState, useEffect } from "react";
import {
  personalInfo,
  navigationItems,
  skills,
  projects,
  testimonials,
  socialLinks,
  designerRoles,
} from "../data/data";

export const usePortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    personalInfo,
    navigationItems,
    skills,
    projects,
    testimonials,
    socialLinks,
    designerRoles,
    isLoading,
    error,
  };
};
