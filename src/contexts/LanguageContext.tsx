
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
}

const translations = {
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    welcomeTitle: "Welcome to My Portfolio",
    welcomeSubtitle: "A passionate developer creating beautiful and functional web experiences.",
    aboutTitle: "About Me",
    aboutDescription: "I am a passionate developer focused on creating innovative and intuitive web experiences. With expertise in both front-end and back-end development, I strive to create solutions that combine performance and aesthetics.",
    skills: "Skills",
    experience: "Experience",
    yearsWebDev: "5+ years in web development",
    yearsCloud: "3+ years in cloud architecture",
    techLeadership: "Technical leadership",
    projectsTitle: "Projects",
    ecommercePlatform: "E-commerce Platform",
    ecommerceDesc: "A modern e-commerce platform built with Next.js and Stripe",
    managementApp: "Management Application",
    managementDesc: "Complete business management solution with real-time dashboards",
    mobileApp: "Mobile Application",
    mobileDesc: "Cross-platform mobile app for task management",
    contactTitle: "Contact",
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "your@email.com",
    message: "Message",
    yourMessage: "Your message...",
    send: "Send"
  },
  fr: {
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    welcomeTitle: "Bienvenue sur Mon Portfolio",
    welcomeSubtitle: "Un développeur passionné qui crée des expériences web belles et fonctionnelles.",
    aboutTitle: "À propos de moi",
    aboutDescription: "Je suis un développeur passionné par la création d'expériences web innovantes et intuitives. Avec une expertise en développement front-end et back-end, je m'efforce de créer des solutions qui combinent performance et esthétique.",
    skills: "Compétences",
    experience: "Expérience",
    yearsWebDev: "5+ ans en développement web",
    yearsCloud: "3+ ans en architecture cloud",
    techLeadership: "Leadership technique",
    projectsTitle: "Projets",
    ecommercePlatform: "Plateforme E-commerce",
    ecommerceDesc: "Une plateforme de commerce électronique moderne construite avec Next.js et Stripe",
    managementApp: "Application de Gestion",
    managementDesc: "Solution complète de gestion d'entreprise avec tableaux de bord en temps réel",
    mobileApp: "Application Mobile",
    mobileDesc: "Application mobile cross-platform pour la gestion de tâches",
    contactTitle: "Contact",
    name: "Nom",
    yourName: "Votre nom",
    email: "Email",
    yourEmail: "votre@email.com",
    message: "Message",
    yourMessage: "Votre message...",
    send: "Envoyer"
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Get the stored language from localStorage or default to "en"
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    return storedLanguage && (storedLanguage === "en" || storedLanguage === "fr") 
      ? storedLanguage 
      : "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
