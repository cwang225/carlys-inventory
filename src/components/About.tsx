import { motion } from "framer-motion";
import { FileText, Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 bg-surface">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="grid gap-8 md:grid-cols-[14rem_1fr] md:items-start">
            <div className="w-56 h-56 rounded-2xl overflow-hidden border border-border bg-background">
              <img
                src="/placeholder.svg"
                alt="Your profile photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">Your Name</h3>
              <p className="text-muted-foreground mb-4">Add your short professional headline here.</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Qualifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>- Add degree or certification</li>
                  <li>- Add specialization or focus area</li>
                  <li>- Add key technical/design strength</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-surface-hover transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            Replace placeholder image and links with your real profile assets.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
