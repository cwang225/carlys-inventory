import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import cmcAfter from "@/assets/cmc-after.jpg";

const projects = [
  {
    title: "JHU Creative Media Center",
    subtitle: "Full redesign of the university's creative media platform",
    metric: "📈 80% Usage Increase",
    image: cmcAfter,
    tags: ["UX Research", "UI Design", "HTML/JS"],
  },
  {
    title: "Playground",
    subtitle: "Unity/C# experiments and game dev prototypes — coming soon",
    image: "/placeholder.svg",
    tags: ["Unity", "C#", "Game Dev"],
  },
];

const ProjectGrid = () => {
  const scrollToCaseStudy = () => {
    document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Selected Work
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Research-driven design with measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <ProjectCard
                {...project}
                onClick={i === 0 ? scrollToCaseStudy : undefined}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
