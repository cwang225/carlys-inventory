import { useNavigate } from "react-router-dom";

const defaultClassName =
  "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

type BackButtonProps = {
  className?: string;
  label?: string;
};

const BackButton = ({ className = defaultClassName, label = "← Back" }: BackButtonProps) => {
    const navigate = useNavigate();

  return (
    <button type="button" className={className} onClick={() => navigate("/home")}>
      {label}
    </button>
  );
};

export default BackButton;
