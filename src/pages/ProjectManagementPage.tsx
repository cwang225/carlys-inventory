import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import cmcAfter from "@/assets/cmc-after.jpg";

const ProjectManagementPage = () => {
  const navigate = useNavigate();
  const openCaseStudy = () => navigate("/case-study");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="product-management" className="scroll-mt-20 py-24 md:py-32">
        <div className="container px-6 max-w-4xl">
          <div className="mb-8">
            <BackButton />
          </div>

          <span className="metric-badge mb-3">Products</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
            JHU Creative Media Center
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Full redesign of the university&apos;s creative media platform with research-driven
            planning and measurable outcomes.
          </p>

          <div className="max-w-md">
            <ProjectCard
              title="JHU Creative Media Center"
              subtitle="Full redesign of the university's creative media platform"
              metric="80% Usage Increase"
              image={cmcAfter}
              tags={["UX Research", "UI Design", "HTML/JS"]}
              onClick={openCaseStudy}
            />
          </div>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default ProjectManagementPage;
