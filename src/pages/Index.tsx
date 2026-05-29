import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["hsl(0, 0%, 99%)", "hsl(245, 20%, 97%)"],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ backgroundColor }}
        />
        <Hero ref={heroRef} />
        <ProjectGrid />
      </div>
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default Index;
