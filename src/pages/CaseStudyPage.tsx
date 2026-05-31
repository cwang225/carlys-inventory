import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";

const CaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CaseStudy />
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default CaseStudyPage;
