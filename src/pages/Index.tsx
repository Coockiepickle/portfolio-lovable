
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6">
        <section className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer crafting beautiful and functional web experiences.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
