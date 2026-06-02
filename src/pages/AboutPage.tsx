import Navbar from "@/components/Navbar";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <About />
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with all the whimsy in my heart :3
      </footer>
    </div>
  );
};

export default AboutPage;
