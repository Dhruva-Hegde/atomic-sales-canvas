import { cn } from "@/lib/utils";

type StatVariant = "blue" | "green" | "yellow" | "pink";

interface StatCardProps {
  label: string;
  value: string | number;
  variant: StatVariant;
}

const variantStyles: Record<StatVariant, { bg: string; text: string }> = {
  blue: { bg: "bg-stat-blue", text: "text-stat-blue-text" },
  green: { bg: "bg-stat-green", text: "text-stat-green-text" },
  yellow: { bg: "bg-stat-yellow", text: "text-stat-yellow-text" },
  pink: { bg: "bg-stat-pink", text: "text-stat-pink-text" },
};

export function StatCard({ label, value, variant }: StatCardProps) {
  const styles = variantStyles[variant];
  
  return (
    <div className={cn("rounded-lg p-6 text-center", styles.bg)}>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className={cn("text-2xl font-bold", styles.text)}>{value}</p>
    </div>
  );
}
