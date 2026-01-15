import { cn } from "@/lib/utils";

export type ChartType = "bar" | "line" | "pie";

interface ChartTypeButtonProps {
  type: ChartType;
  isActive: boolean;
  onClick: () => void;
}

export function ChartTypeButton({ type, isActive, onClick }: ChartTypeButtonProps) {
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:bg-accent"
      )}
    >
      {label}
    </button>
  );
}
