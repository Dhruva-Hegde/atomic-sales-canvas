import { StatCard } from "@/components/molecules/StatCard";
import { YearlyData } from "@/data/salesData";

interface StatsGridProps {
  data: YearlyData;
}

export function StatsGrid({ data }: StatsGridProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total Sales"
        value={formatNumber(data.totalSales)}
        variant="blue"
      />
      <StatCard
        label="Total Revenue"
        value={formatCurrency(data.totalRevenue)}
        variant="green"
      />
      <StatCard
        label="Avg Sales"
        value={formatNumber(data.avgSales)}
        variant="yellow"
      />
      <StatCard
        label="Avg Revenue"
        value={formatCurrency(data.avgRevenue)}
        variant="pink"
      />
    </div>
  );
}
