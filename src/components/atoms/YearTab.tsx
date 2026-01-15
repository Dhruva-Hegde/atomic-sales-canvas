import { cn } from "@/lib/utils";

interface YearTabProps {
  year: number;
  isActive: boolean;
  onClick: () => void;
}

export function YearTab({ year, isActive, onClick }: YearTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-card text-foreground border border-border hover:bg-accent"
      )}
    >
      {year}
    </button>
  );
}
