
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { translations } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold">Logo</div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="hover:text-accent transition-colors">
              {translations.about}
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              {translations.projects}
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              {translations.contact}
            </a>
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
