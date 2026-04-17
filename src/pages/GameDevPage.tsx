import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const GameDevPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="game-dev" className="scroll-mt-20 py-24 md:py-32">
        <div className="container px-6 max-w-4xl">
          <div className="mb-8">
            <Link
              to="/#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to selected work
            </Link>
          </div>

          <span className="metric-badge mb-3">Playground</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Game Dev</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Unity/C# experiments and game dev prototypes - coming soon.
          </p>

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
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default GameDevPage;
