import { useState, useMemo } from "react";
import { YearSelector } from "@/components/molecules/YearSelector";
import { ChartTypeSelector } from "@/components/molecules/ChartTypeSelector";
import { FilterInput } from "@/components/molecules/FilterInput";
import { StatsGrid } from "@/components/organisms/StatsGrid";
import { SalesChart } from "@/components/organisms/SalesChart";
import { allSalesData, filterByThreshold } from "@/data/salesData";
import { ChartType } from "@/components/atoms/ChartTypeButton";

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number | null>(null);

  const yearData = allSalesData[selectedYear];

  const filteredData = useMemo(() => {
    if (threshold === null) {
      return yearData.monthlyData;
    }
    return filterByThreshold(yearData.monthlyData, threshold);
  }, [yearData.monthlyData, threshold]);

  const handleFilter = (value: number) => {
    setThreshold(value);
  };

  const handleReset = () => {
    setThreshold(null);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Year Selector */}
        <YearSelector selectedYear={selectedYear} onYearChange={setSelectedYear} />

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Sales Dashboard {selectedYear}
          </h1>
          <p className="text-muted-foreground">Track and analyze sales performance</p>
        </div>

        {/* Stats Grid */}
        <StatsGrid data={yearData} />

        {/* Filter Input */}
        <FilterInput onFilter={handleFilter} onReset={handleReset} />

        {/* Chart Type Selector */}
        <ChartTypeSelector selectedType={chartType} onTypeChange={setChartType} />

        {/* Sales Chart */}
        <SalesChart data={filteredData} chartType={chartType} year={selectedYear} />

        {threshold !== null && filteredData.length === 0 && (
          <div className="bg-card rounded-lg p-6 text-center text-muted-foreground">
            No data matches the threshold of {threshold} sales units.
          </div>
        )}
      </div>
    </div>
  );
}
