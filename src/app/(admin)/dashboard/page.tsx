import type { Metadata } from "next";
import { AgentMetrics } from "@/components/dashboard/AgentMetrics";
import ConversionComparison from "@/components/dashboard/ConversionComparison";
import NegotiationStats from "@/components/dashboard/NegotiationStats";
import TopQuestions from "@/components/dashboard/TopQuestions";
import CategoryInfluence from "@/components/dashboard/CategoryInfluence";
import PeakHours from "@/components/dashboard/PeakHours";
import RevenueByAgent from "@/components/dashboard/RevenueByAgent";

export const metadata: Metadata = {
  title: "Dashboard | Negocia - Asistente de Ventas IA",
  description: "Panel de control con KPIs de tu asistente de ventas IA",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header del Dashboard */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Dashboard de KPIs</h1>
          <p className="text-gray-400 mt-1">Métricas en tiempo real de tu asistente de ventas IA</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-gray-300 text-sm focus:border-orange-400/50 focus:outline-none">
            <option value="30d">Últimos 30 días</option>
            <option value="7d">Últimos 7 días</option>
            <option value="90d">Últimos 90 días</option>
          </select>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Exportar
          </button>
        </div>
      </div>

      {/* Métricas principales */}
      <AgentMetrics />

      {/* Revenue y Conversión */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <RevenueByAgent />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <NegotiationStats />
        </div>
      </div>

      {/* Conversión Comparativa */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-6">
          <ConversionComparison />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <CategoryInfluence />
        </div>
      </div>

      {/* Top Preguntas y Horas Pico */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-6">
          <TopQuestions />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <PeakHours />
        </div>
      </div>

      {/* Footer del Dashboard */}
      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-gray-400 text-sm">Agente activo y funcionando</span>
        </div>
        <p className="text-gray-500 text-sm">Última actualización: hace 2 minutos</p>
      </div>
    </div>
  );
}
