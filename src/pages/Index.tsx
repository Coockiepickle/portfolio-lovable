
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  const { translations } = useLanguage();

  return (
    <Layout>
      <div className="min-h-screen">
        <section id="home" className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {translations.welcomeTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {translations.welcomeSubtitle}
            </p>
          </div>
        </section>
        
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
