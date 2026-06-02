import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import webBG from "@/assets/webBG.png";

// TODO: Replace with your real itch.io game URLs
const gameDevProjects = [
  {
    title: "Ducks Afar",
    subtitle:
      "A dreamy story-central puzzle game where players go on a journey of self-discovery and love.",
    metric: "In Development",
    image: "DABG.png",
    tags: ["Unity", "C#", "Game Dev", "UI Designer & Coder", "Technical Artist"],
    itchUrl: "https://l1ryx.itch.io/ducks-afar",
  },
  {
    title: "ADSOMNIA!",
    subtitle:
      "A fast-paced strategy game where players are exploited by the parasitic ad algorithms of today",
    metric: "Ctrl+Alt+DMV Game Jam 2026",
    image: "ADSOMNIA!.png",
    tags: ["Unity", "C#", "Game Dev", "Lead Artist"],
    itchUrl: "https://yeetimameme.itch.io/adsomnia",
  },
] as const;

const GameDevPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="game-dev" className="scroll-mt-20 pb-24 md:pb-32">
        <div className="relative w-full overflow-hidden">
          <img
            src={webBG}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover blur-xl scale-105"
          />
          <div className="absolute inset-0 bg-background/65" aria-hidden />
          <div className="relative z-10 container px-6 max-w-4xl mx-auto pt-20 pb-12 md:pb-16">
            <BackButton className="mb-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" />
            <div className="text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Game Dev</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Unity/C# experiments and game dev prototypes.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-6 max-w-4xl pt-16">
          <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-2">
            {gameDevProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                metric={project.metric}
                image={project.image}
                tags={[...project.tags]}
                href={project.itchUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GameDevPage;
