import { useEffect } from "react";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CaseStudy />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
