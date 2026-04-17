import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-6 pt-20 pb-4">
        <Link
          to="/#projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to selected work
        </Link>
      </div>
      <CaseStudy />
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default CaseStudyPage;
