import type { Metadata } from "next";
import Overview from "@/components/dashboard/Overview";
import IntentionHeatmap from "@/components/dashboard/IntentionHeatmap";
import AgentCustomization from "@/components/dashboard/AgentCustomization";

export const metadata: Metadata = {
  title: "Dashboard | NegocIA - Regateo Inteligente",
  description: "Panel de control con KPIs de negociación y ventas",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header del Dashboard */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-inter font-semibold text-gray-900">
                Dashboard de Negociación
              </h1>
              <p className="text-gray-600 mt-1 font-inter text-sm">
                Métricas en tiempo real de tus conversaciones y ventas cerradas
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 text-sm font-inter focus:border-[#B85C5C] focus:outline-none focus:ring-1 focus:ring-[#B85C5C]">
                <option value="30d">Últimos 30 días</option>
                <option value="7d">Últimos 7 días</option>
                <option value="90d">Últimos 90 días</option>
              </select>
              <button className="bg-[#B85C5C] text-white px-5 py-2 rounded-lg font-inter font-medium hover:bg-[#A04E4E] transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Exportar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 space-y-12">
        {/* Section 1: Overview */}
        <section>
          <Overview />
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Section 2: Heatmap de Intención */}
        <section>
          <IntentionHeatmap />
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Section 3: Panel de Personalización */}
        <section>
          <AgentCustomization />
        </section>
      </div>
    </div>
  );
}
