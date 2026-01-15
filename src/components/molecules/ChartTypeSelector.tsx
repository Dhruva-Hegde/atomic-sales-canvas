import { ChartTypeButton, ChartType } from "@/components/atoms/ChartTypeButton";

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

const chartTypes: ChartType[] = ["bar", "line", "pie"];

export function ChartTypeSelector({ selectedType, onTypeChange }: ChartTypeSelectorProps) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-foreground mb-3">Chart Type</h3>
      <div className="flex gap-2">
        {chartTypes.map((type) => (
          <ChartTypeButton
            key={type}
            type={type}
            isActive={selectedType === type}
            onClick={() => onTypeChange(type)}
          />
        ))}
      </div>
    </div>
  );
}
