import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/organisms/FeatureCard";

const features = [
  {
    title: "Interactive Charts",
    description: "Switch between bar, line, and pie charts to visualize your sales data in different ways.",
  },
  {
    title: "Custom Filters",
    description: "Set custom sales thresholds to filter and analyze specific data ranges.",
  },
  {
    title: "Analytics",
    description: "Get real-time statistics including total sales, revenue, and averages.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Sales Analytics Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-2">
          Track, analyze, and visualize your sales data with interactive charts and real-time analytics. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          View sales data for 2024, 2023, and 2022 with customizable filters and multiple chart types.
        </p>
        <Button asChild size="lg" className="px-8">
          <Link to="/dashboard">Open Dashboard</Link>
        </Button>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
