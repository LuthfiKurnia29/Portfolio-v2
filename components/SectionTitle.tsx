import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle = ({
  label,
  title,
  subtitle,
  className,
  centered = false,
}: SectionTitleProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {label && (
        <span className="inline-block font-mono text-xs text-lightSky tracking-widest uppercase mb-3 opacity-80">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
        <span className="text-lightSky">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-subtleText text-base max-w-xl leading-relaxed justify-center">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-px w-16 bg-gradient-to-r from-lightSky to-transparent",
          centered && "mx-auto"
        )}
      />
    </div>
  );
};

export default SectionTitle;
