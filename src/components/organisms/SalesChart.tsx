import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlySales } from "@/data/salesData";
import { ChartType } from "@/components/atoms/ChartTypeButton";

interface SalesChartProps {
  data: MonthlySales[];
  chartType: ChartType;
  year: number;
}

const PIE_COLORS = [
  "#2563eb", "#16a34a", "#eab308", "#dc2626", 
  "#8b5cf6", "#ec4899", "#f97316", "#06b6d4",
  "#84cc16", "#6366f1", "#14b8a6", "#f43f5e",
];

export function SalesChart({ data, chartType, year }: SalesChartProps) {
  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Bar dataKey="revenue" name="Revenue ($)" fill="#16a34a" radius={[4, 4, 0, 0]} />
        <Bar dataKey="salesUnits" name="Sales Units" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Revenue ($)"
          stroke="#16a34a"
          strokeWidth={2}
          dot={{ fill: "#16a34a", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="salesUnits"
          name="Sales Units"
          stroke="#2563eb"
          strokeWidth={2}
          dot={{ fill: "#2563eb", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => {
    const pieData = data.map((item) => ({
      name: item.month,
      value: item.salesUnits,
    }));

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={140}
            dataKey="value"
          >
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-foreground mb-4">{year} Sales Analytics</h3>
      {chartType === "bar" && renderBarChart()}
      {chartType === "line" && renderLineChart()}
      {chartType === "pie" && renderPieChart()}
    </div>
  );
}
