import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
