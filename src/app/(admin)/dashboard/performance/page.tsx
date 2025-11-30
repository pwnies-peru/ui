import type { Metadata } from "next";
import IntentionHeatmap from "@/components/dashboard/IntentionHeatmap";

export const metadata: Metadata = {
  title: "Rendimiento | NegocIA",
  description: "Métricas de rendimiento y análisis de conversiones",
};

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-inter font-semibold text-gray-900">
          Rendimiento
        </h1>
        <p className="text-gray-600 mt-1 font-inter text-sm">
          Análisis detallado de conversiones e intención de compra
        </p>
      </div>

      <IntentionHeatmap />
    </div>
  );
}

