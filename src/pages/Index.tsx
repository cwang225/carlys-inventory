import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <section id="art" className="scroll-mt-20 py-24 md:py-32 bg-surface">
        <div className="container px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Art</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Visual work and creative studies — coming soon.
          </p>
        </div>
      </section>
      <About />
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default Index;
