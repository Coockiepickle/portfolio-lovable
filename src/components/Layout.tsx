
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="pt-20">{children}</main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};
