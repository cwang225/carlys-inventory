import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  metric?: string;
  image: string;
  tags: string[];
  onClick?: () => void;
  imageClassName?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  metric,
  image,
  tags,
  onClick,
  imageClassName,
}: ProjectCardProps) => {
  const isInteractive = typeof onClick === "function";

  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group glass-card flex h-full w-full min-w-0 flex-col overflow-hidden p-0 text-left ${
        isInteractive ? "cursor-pointer" : "cursor-default disabled:opacity-100"
      }`}
      onClick={onClick}
      disabled={!isInteractive}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black">
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${imageClassName ?? ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold mb-1">{title} - {metric}</h3>
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
    </motion.button>
  );
};

export default ProjectCard;
