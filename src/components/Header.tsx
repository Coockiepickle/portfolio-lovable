
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { translations } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            Logo
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/about" 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.about}
            </Link>
            <Link 
              to="/projects" 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.projects}
            </Link>
            <Link 
              to="/contact" 
              className="border border-border rounded-md px-4 py-2 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              {translations.contact}
            </Link>
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
