
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { translations } = useLanguage();

  const projects = [
    {
      title: translations.ecommercePlatform,
      description: translations.ecommerceDesc,
      tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: translations.managementApp,
      description: translations.managementDesc,
      tech: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: translations.mobileApp,
      description: translations.mobileDesc,
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-accent/5 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{translations.projectsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glass"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 hover:bg-accent hover:text-white rounded-full text-sm transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
