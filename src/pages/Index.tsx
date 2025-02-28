
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenue sur Mon Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un étudiant passionné avec pour objectif d'aider les entreprises dans la mise en place et la protection de leur SI.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
