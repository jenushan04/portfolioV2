import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === 0 ? (
              <span className="text-primary glow-text">{word}</span>
            ) : (
              ` ${word}`
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-24 bg-gradient-to-r from-primary to-transparent",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
