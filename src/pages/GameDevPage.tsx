import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import duckies from "@/assets/duckies.png";

const GameDevPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="game-dev" className="scroll-mt-20 pb-24 md:pb-32">
        <div className="relative w-full overflow-hidden">
          <img
            src={duckies}
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
                Unity/C# experiments and game dev prototypes - coming soon.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-6 max-w-4xl pt-16">
          <div className="rounded-2xl overflow-hidden border border-border bg-surface">
            <img
              src="/placeholder.svg"
              alt="Playground"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {["Unity", "C#", "Game Dev"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with all the whimsy in my heart :3
      </footer>
    </div>
  );
};

export default GameDevPage;
