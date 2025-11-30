"use client";
import React from "react";
import { TrendingUp, TrendingDown, Users, Bot, DollarSign, MessageCircle } from "lucide-react";

export const AgentMetrics = () => {
  const metrics = [
    {
      title: "Conversión con Agente",
      value: "12.4%",
      change: "+4.2%",
      changeType: "positive",
      subtitle: "vs 3.1% sin agente",
      icon: Bot,
      gradient: "from-orange-400 to-orange-500",
    },
    {
      title: "Revenue por Agente",
      value: "$47,832",
      change: "+23.5%",
      changeType: "positive",
      subtitle: "Este mes",
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Dudas Resueltas",
      value: "94.7%",
      change: "+2.1%",
      changeType: "positive",
      subtitle: "1,247 de 1,316 consultas",
      icon: MessageCircle,
      gradient: "from-blue-400 to-blue-500",
    },
    {
      title: "Usuarios Asistidos",
      value: "3,847",
      change: "+18.3%",
      changeType: "positive",
      subtitle: "Últimos 30 días",
      icon: Users,
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-20 rounded-[2rem] blur-xl group-hover:opacity-30 transition-opacity`} />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-orange-400/30 transition-all">
            <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
            <div className="relative">
              <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${metric.gradient} rounded-2xl shadow-lg mb-4`}>
                <metric.icon className="text-white size-7" />
              </div>

              <div className="space-y-2">
                <span className="text-sm text-gray-400">
                  {metric.title}
                </span>
                <h4 className="font-black text-4xl text-white">
                  {metric.value}
                </h4>
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1 text-sm font-medium ${metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.changeType === 'positive' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {metric.change}
                  </span>
                  <span className="text-gray-500 text-sm">{metric.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

