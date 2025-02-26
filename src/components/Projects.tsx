
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme de commerce électronique moderne construite avec Next.js et Stripe",
      tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Application de Gestion",
      description: "Solution complète de gestion d'entreprise avec tableaux de bord en temps réel",
      tech: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "Application Mobile",
      description: "Application mobile cross-platform pour la gestion de tâches",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-accent/5 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow glass"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 rounded-full text-sm"
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
