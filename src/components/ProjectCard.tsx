import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  metric?: string;
  image: string;
  tags: string[];
  onClick?: () => void;
}

const ProjectCard = ({ title, subtitle, metric, image, tags, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group glass-card overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {metric && (
          <span className="metric-badge mb-3">{metric}</span>
        )}
        <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground font-body text-sm mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
