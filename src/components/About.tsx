
import React from "react";

export const About = () => {
  return (
    <section id="about" className="section-padding animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">À propos de moi</h2>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Je suis un étudiant passionné par la réseautique, la cybersécurité et à peu près tout ce qui touche à l'informatique. 
            Avec une expertise en systèmes et réseaux, je m'efforce de créer des solutions 
            qui combinent performance et sécurité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Compétences</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Mise en place de réseaux</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Administration de serveurs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Télécommunications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Fondamentaux de la cybersécurité</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Fondamentaux IoT</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Expérience</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Bachelor Administrateur d'Infrastructures Sécurisées (Bac +3)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Diplôme d'études Collégiales Techniques de l'informatique au Québec (1 an)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
