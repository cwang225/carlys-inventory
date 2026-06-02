import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import cmcAfter from "@/assets/CMCAfter.png";
import BackButton from "@/components/BackButton";

const ProjectManagementPage = () => {
  const navigate = useNavigate();
  const openCaseStudy = () => navigate("/case-study");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="product-management" className="scroll-mt-20 pb-24 md:pb-32">
        <div className="relative w-full overflow-hidden">
          <img
            src={cmcAfter}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover blur-xl scale-105"
          />
          <div className="absolute inset-0 bg-background/65" aria-hidden />
          <div className="relative z-10 container px-6 max-w-4xl mx-auto pt-20 pb-12 md:pb-16">
            <BackButton className="mb-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" />
            <div className="text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
                Product Management
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Projects with my start to end ownership and result metrics
              </p>
            </div>
          </div>
        </div>

        <div className="container px-6 max-w-4xl pt-16">
          <div className="max-w-md">
            <ProjectCard
              title="JHU Creative Media Center"
              subtitle="Full redesign of the university's the Johns Hopkins University Creative Media Center website"
              metric="80% Usage Increase"
              image={cmcAfter}
              tags={["UX Research", "UI Design", "HTML/JS"]}
              onClick={openCaseStudy}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectManagementPage;
