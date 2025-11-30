"use client";
import React from "react";
import { TrendingUp, TrendingDown, Users, Bot, DollarSign, MessageCircle } from "lucide-react";

export const AgentMetrics = () => {
  const metrics = [
    {
      title: "Conversión Total",
      value: "12.4%",
      change: "+4.2%",
      changeType: "positive",
      subtitle: "vs 3.1% sin agente",
      icon: Bot,
      color: "#B85C5C",
    },
    {
      title: "Revenue Generado",
      value: "$47,832",
      change: "+23.5%",
      changeType: "positive",
      subtitle: "Este mes",
      icon: DollarSign,
      color: "#10B981",
    },
    {
      title: "Regateos Exitosos",
      value: "87.3%",
      change: "+12.5%",
      changeType: "positive",
      subtitle: "de 1,247 negociaciones",
      icon: MessageCircle,
      color: "#E8DD6C",
    },
    {
      title: "Ventas Cerradas",
      value: "3,847",
      change: "+18.3%",
      changeType: "positive",
      subtitle: "Últimos 30 días",
      icon: Users,
      color: "#6366F1",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${metric.color}15` }}
          >
            <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
          </div>

          {/* Label */}
          <p className="text-sm font-inter text-gray-600 mb-1">
            {metric.title}
          </p>

          {/* Value */}
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-3">
            {metric.value}
          </h3>

          {/* Change & Subtitle */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`flex items-center gap-1 text-sm font-inter font-medium ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {metric.changeType === 'positive' ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {metric.change}
            </span>
            <span className="text-gray-500 text-xs font-inter">
              {metric.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
