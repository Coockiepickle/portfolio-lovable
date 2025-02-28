
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "S.P.P. (Système de Pentesting Portatif",
      description: "Une carte Raspberry Pi standalone pour auditer et réaliser des tests de pénétration sur un réseau",
      tech: ["RPi", "Debian", "Lynis", "ZPhisher", "PhishMailer", "VNC"],
    },
    {
      title: "Projet 2",
      description: "Description",
      tech: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    },
    {
      title: "Projet 3",
      description: "Description",
      tech: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
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
