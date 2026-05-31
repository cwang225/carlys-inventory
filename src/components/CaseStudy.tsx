import { motion } from "framer-motion";
import cmcBefore from "@/assets/cmc-before.jpg";
import cmcAfter from "@/assets/CMCAfter.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 md:py-32">
      <div className="container px-6 max-w-4xl">
        {/* Hook */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="metric-badge text-base mb-4">📈 80% Usage Increase</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Redesigning the JHU Creative Media Center
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An 80% increase in user engagement through research-driven design and technical resourcefulness.
          </p>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          variants={fadeUp}
          className="mb-16"
        >
          <h3 className="font-display text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            The Problem
          </h3>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Students and faculty reported significant friction navigating the Creative Media Center's website.
            User surveys revealed confusing navigation hierarchies, buried equipment booking flows, and a
            disconnect between the site structure and users' actual goals.
          </p>
        </motion.div>

        {/* Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
          variants={fadeUp}
          className="mb-16"
        >
          <h3 className="font-display text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            The Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Research",
                desc: "Conducted user surveys and stakeholder interviews to identify core navigation pain points and unmet needs.",
              },
              {
                title: "Design & Lead",
                desc: "Led the research, design, and implementation phases — creating wireframes, prototypes, and the final UI.",
              },
              {
                title: "Technical Execution",
                desc: "Overcame LibApps platform constraints using custom HTML/JS solutions to deliver the redesigned experience.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h4 className="font-display font-semibold text-base mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before & After */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
          variants={fadeUp}
          className="mb-16"
        >
          <h3 className="font-display text-sm uppercase tracking-widest text-primary font-semibold mb-6">
            The Solution
          </h3>
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            Shifted to an <strong>"Equipment + Calendar"</strong> primary hierarchy, placing the most-used
            features front and center. The redesign restructured navigation to fit a more intuitive flow for users.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="bg-secondary px-4 py-2 text-sm font-display font-medium text-secondary-foreground">
                Before
              </div>
              <img src={cmcBefore} alt="CMC website before redesign" className="w-full" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-primary/30">
              <div className="bg-primary/10 px-4 py-2 text-sm font-display font-medium text-primary">
                After
              </div>
              <img src={cmcAfter} alt="CMC website after redesign" className="w-full" />
            </div>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={4}
          variants={fadeUp}
          className="text-center glass-card p-10"
        >
          <h3 className="font-display text-sm uppercase tracking-widest text-primary font-semibold mb-6">
            The Impact
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text">80%</p>
              <p className="text-muted-foreground text-sm mt-2">Increase in Usage</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text">↑</p>
              <p className="text-muted-foreground text-sm mt-2">Event Attendance Growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
