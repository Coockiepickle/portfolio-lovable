
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export const Header = () => {
  const { translations } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-xl font-semibold cursor-pointer"
          >
            Logo
          </button>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.about}
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.projects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.contact}
            </button>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
