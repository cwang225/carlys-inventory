import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="container px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            I'm passionate about creating user-centered experiences backed by research and technical craft.
            Currently exploring opportunities in Big Tech and Game Development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-surface-hover transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-surface-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-surface-hover transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
