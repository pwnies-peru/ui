"use client";
import { TrendingUp, DollarSign, MessageCircle, Users, Bot, ShoppingCart, Percent } from "lucide-react";

export default function Overview() {
  // Sistema de colores coherente: Verde=Crecimiento, Azul=Actividad, Amarillo=Conversión, Rojo=Revenue
  const primaryMetrics = [
    {
      title: "Conversaciones iniciadas",
      value: "3,247",
      change: "+18.2%",
      trend: "up",
      icon: MessageCircle,
      color: "#3B82F6", // Azul - Actividad
      bgColor: "#EFF6FF",
      borderColor: "#DBEAFE",
      description: "Total de conversaciones activas con clientes"
    },
    {
      title: "Negociaciones activas",
      value: "847",
      change: "+23.1%",
      trend: "up",
      icon: Bot,
      color: "#10B981", // Verde - Crecimiento positivo
      bgColor: "#ECFDF5",
      borderColor: "#D1FAE5",
      description: "Clientes en proceso de regateo"
    },
    {
      title: "Órdenes cerradas",
      value: "1,429",
      change: "+15.8%",
      trend: "up",
      icon: ShoppingCart,
      color: "#8B5CF6", // Púrpura - Conversión
      bgColor: "#F5F3FF",
      borderColor: "#EDE9FE",
      description: "Ventas completadas con éxito"
    },
  ];

  const secondaryMetrics = [
    {
      title: "Conversión uplift",
      value: "+43.7%",
      change: "+4.2%",
      trend: "up",
      icon: TrendingUp,
      color: "#B85C5C", // Terracota - Métrica estrella
      bgColor: "#FEF2F2",
      borderColor: "#FECACA",
      description: "Mejora vs sin agente de negociación"
    },
    {
      title: "AOV uplift",
      value: "+28.3%",
      change: "+3.5%",
      trend: "up",
      icon: Percent,
      color: "#F59E0B", // Naranja - Valor
      bgColor: "#FFFBEB",
      borderColor: "#FEF3C7",
      description: "Incremento en valor promedio de orden"
    },
    {
      title: "Valor total recuperado",
      value: "$89,432",
      change: "+31.4%",
      trend: "up",
      icon: DollarSign,
      color: "#059669", // Verde oscuro - Revenue
      bgColor: "#ECFDF5",
      borderColor: "#A7F3D0",
      description: "Ingresos que se hubieran perdido"
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-1">Overview</h2>
        <p className="text-gray-600 text-sm font-inter">Métricas clave de rendimiento del agente</p>
      </div>

      {/* Métricas Principales */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: metric.bgColor,
                  }}
                >
                  <metric.icon size={20} style={{ color: metric.color }} strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-50">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter font-semibold text-green-700 text-xs">
                    {metric.change}
                  </span>
                </div>
              </div>

              <h3 className="text-gray-500 text-xs font-inter font-medium mb-2 uppercase tracking-wide">{metric.title}</h3>
              <p className="text-3xl font-inter font-bold text-gray-900 mb-2">{metric.value}</p>
              <p className="text-xs text-gray-500 font-inter">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Métricas Secundarias */}
      <div>
        <h3 className="text-base font-inter font-semibold text-gray-900 mb-4">Métricas de impacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: metric.bgColor,
                  }}
                >
                  <metric.icon size={20} style={{ color: metric.color }} strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-50">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter font-semibold text-green-700 text-xs">
                    {metric.change}
                  </span>
                </div>
              </div>

              <h3 className="text-gray-500 text-xs font-inter font-medium mb-2 uppercase tracking-wide">{metric.title}</h3>
              <p className="text-3xl font-inter font-bold text-gray-900 mb-2">{metric.value}</p>
              <p className="text-xs text-gray-500 font-inter">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
