
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
        onClick={toggleLanguage}
      >
        {language === "en" ? (
          <>
            <span className="uppercase">EN</span>
            <Globe className="h-5 w-5 transition-transform duration-300" />
          </>
        ) : (
          <>
            <Globe className="h-5 w-5 transition-transform duration-300" />
            <span className="uppercase">FR</span>
          </>
        )}
      </button>
      
      <div className="absolute right-0 mt-2 w-32 py-2 bg-background border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity glass">
        <button
          className="w-full px-4 py-2 text-left hover:bg-accent/10 transition-colors"
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className="w-full px-4 py-2 text-left hover:bg-accent/10 transition-colors"
          onClick={() => setLanguage("fr")}
        >
          Français
        </button>
      </div>
    </div>
  );
};
