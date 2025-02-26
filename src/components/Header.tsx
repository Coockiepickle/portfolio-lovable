
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
            <Link to="/about" className="hover:text-accent transition-colors">
              {translations.about}
            </Link>
            <Link to="/projects" className="hover:text-accent transition-colors">
              {translations.projects}
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
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
