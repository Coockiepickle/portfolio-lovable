
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es" | "fr";

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
    // Add more translations as needed
  },
  es: {
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
  },
  fr: {
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

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
