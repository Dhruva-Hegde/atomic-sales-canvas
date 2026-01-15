import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FilterInputProps {
  onFilter: (threshold: number) => void;
  onReset: () => void;
}

export function FilterInput({ onFilter, onReset }: FilterInputProps) {
  const [threshold, setThreshold] = useState("");

  const handleFilter = () => {
    const value = parseInt(threshold, 10);
    if (!isNaN(value) && value >= 0) {
      onFilter(value);
    }
  };

  const handleReset = () => {
    setThreshold("");
    onReset();
  };

  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-foreground mb-3">Filters</h3>
      <p className="text-sm text-muted-foreground mb-2">Sales Threshold</p>
      <div className="flex gap-2 flex-wrap">
        <Input
          type="number"
          placeholder="Enter minimum sales..."
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="w-48"
        />
        <Button onClick={handleFilter} size="sm">
          Filter
        </Button>
        <Button onClick={handleReset} variant="outline" size="sm">
          Reset
        </Button>
      </div>
    </div>
  );
}
