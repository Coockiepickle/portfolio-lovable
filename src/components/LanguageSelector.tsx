
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
        className="flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-accent/10 transition-colors overflow-hidden"
        onClick={toggleLanguage}
        style={{ width: '80px' }}
      >
        <div className="flex items-center justify-center w-full relative">
          {language === "en" ? (
            <>
              <span className="uppercase transition-transform duration-300">EN</span>
              <Globe className="h-5 w-5 ml-2 transition-all duration-300" />
            </>
          ) : (
            <>
              <Globe className="h-5 w-5 mr-2 transition-all duration-300" />
              <span className="uppercase transition-transform duration-300">FR</span>
            </>
          )}
        </div>
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
