import type { Metadata } from "next";
import AgentCustomization from "@/components/dashboard/AgentCustomization";

export const metadata: Metadata = {
  title: "Personalización | NegocIA",
  description: "Personaliza la apariencia y estilo de tu agente",
};

export default function CustomizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-inter font-semibold text-gray-900">
          Personalización
        </h1>
        <p className="text-gray-600 mt-1 font-inter text-sm">
          Personaliza la apariencia de tu agente para que coincida con tu marca
        </p>
      </div>

      <AgentCustomization />
    </div>
  );
}

