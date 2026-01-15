export interface MonthlySales {
  month: string;
  salesUnits: number;
  revenue: number;
}

export interface YearlyData {
  year: number;
  monthlyData: MonthlySales[];
  totalSales: number;
  totalRevenue: number;
  avgSales: number;
  avgRevenue: number;
}

// Mock sales data inspired by retail/e-commerce patterns
const salesData2024: MonthlySales[] = [
  { month: "Jan", salesUnits: 4200, revenue: 52500 },
  { month: "Feb", salesUnits: 4800, revenue: 60000 },
  { month: "Mar", salesUnits: 5500, revenue: 68750 },
  { month: "Apr", salesUnits: 5200, revenue: 65000 },
  { month: "May", salesUnits: 6100, revenue: 76250 },
  { month: "Jun", salesUnits: 6800, revenue: 85000 },
  { month: "Jul", salesUnits: 7200, revenue: 90000 },
  { month: "Aug", salesUnits: 6900, revenue: 86250 },
  { month: "Sep", salesUnits: 6500, revenue: 81250 },
  { month: "Oct", salesUnits: 7100, revenue: 88750 },
  { month: "Nov", salesUnits: 8200, revenue: 102500 },
  { month: "Dec", salesUnits: 8700, revenue: 108750 },
];

const salesData2023: MonthlySales[] = [
  { month: "Jan", salesUnits: 3500, revenue: 43750 },
  { month: "Feb", salesUnits: 3900, revenue: 48750 },
  { month: "Mar", salesUnits: 4300, revenue: 53750 },
  { month: "Apr", salesUnits: 4600, revenue: 57500 },
  { month: "May", salesUnits: 5000, revenue: 62500 },
  { month: "Jun", salesUnits: 5400, revenue: 67500 },
  { month: "Jul", salesUnits: 5800, revenue: 72500 },
  { month: "Aug", salesUnits: 5600, revenue: 70000 },
  { month: "Sep", salesUnits: 5200, revenue: 65000 },
  { month: "Oct", salesUnits: 5700, revenue: 71250 },
  { month: "Nov", salesUnits: 6300, revenue: 78750 },
  { month: "Dec", salesUnits: 6900, revenue: 86250 },
];

const salesData2022: MonthlySales[] = [
  { month: "Jan", salesUnits: 2800, revenue: 35000 },
  { month: "Feb", salesUnits: 2900, revenue: 36250 },
  { month: "Mar", salesUnits: 3400, revenue: 42500 },
  { month: "Apr", salesUnits: 3100, revenue: 38750 },
  { month: "May", salesUnits: 3800, revenue: 47500 },
  { month: "Jun", salesUnits: 3600, revenue: 45000 },
  { month: "Jul", salesUnits: 4200, revenue: 52500 },
  { month: "Aug", salesUnits: 4000, revenue: 50000 },
  { month: "Sep", salesUnits: 3700, revenue: 46250 },
  { month: "Oct", salesUnits: 4100, revenue: 51250 },
  { month: "Nov", salesUnits: 4500, revenue: 56250 },
  { month: "Dec", salesUnits: 4900, revenue: 61250 },
];

function calculateYearlyStats(data: MonthlySales[], year: number): YearlyData {
  const totalSales = data.reduce((sum, m) => sum + m.salesUnits, 0);
  const totalRevenue = data.reduce((sum, m) => sum + m.revenue, 0);
  return {
    year,
    monthlyData: data,
    totalSales,
    totalRevenue,
    avgSales: Math.round(totalSales / 12),
    avgRevenue: Math.round(totalRevenue / 12),
  };
}

export const allSalesData: Record<number, YearlyData> = {
  2024: calculateYearlyStats(salesData2024, 2024),
  2023: calculateYearlyStats(salesData2023, 2023),
  2022: calculateYearlyStats(salesData2022, 2022),
};

export const availableYears = [2024, 2023, 2022];

export function filterByThreshold(data: MonthlySales[], threshold: number): MonthlySales[] {
  return data.filter((m) => m.salesUnits >= threshold);
}
