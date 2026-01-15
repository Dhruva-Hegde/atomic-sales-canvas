import { YearTab } from "@/components/atoms/YearTab";
import { availableYears } from "@/data/salesData";

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export function YearSelector({ selectedYear, onYearChange }: YearSelectorProps) {
  return (
    <div className="flex gap-2">
      {availableYears.map((year) => (
        <YearTab
          key={year}
          year={year}
          isActive={selectedYear === year}
          onClick={() => onYearChange(year)}
        />
      ))}
    </div>
  );
}
