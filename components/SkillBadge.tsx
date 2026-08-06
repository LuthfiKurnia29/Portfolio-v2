import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <span className={cn("skill-badge", className)}>
      {name}
    </span>
  );
};

export default SkillBadge;
