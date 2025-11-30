"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { DollarSign, TrendingUp, ShoppingCart, Target } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RevenueByAgent() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "area",
      height: 200,
      toolbar: { show: false },
      background: "transparent",
      sparkline: { enabled: false },
    },
    colors: ["#22c55e", "#fb923c"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      labels: { colors: "#9ca3af" },
    },
    xaxis: {
      categories: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#9ca3af" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#9ca3af" },
        formatter: (val) => `$${(val / 1000).toFixed(0)}k`,
      },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.1)",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val) => `$${val.toLocaleString()}` },
    },
  };

  const series = [
    { name: "Revenue Total", data: [32000, 38000, 42000, 47832] },
    { name: "Con Descuento Agente", data: [8000, 9500, 11000, 12450] },
  ];

  const stats = [
    {
      label: "Ticket Promedio",
      value: "$127",
      change: "+$23",
      icon: ShoppingCart,
    },
    {
      label: "Conversiones",
      value: "376",
      change: "+48",
      icon: Target,
    },
    {
      label: "ROI del Agente",
      value: "847%",
      change: "+112%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-orange-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="text-green-400" size={20} />
                Revenue Generado por Agente
              </h3>
              <p className="text-gray-400 text-sm mt-1">Ingresos atribuidos a interacciones con el agente</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-white">$47,832</p>
              <p className="text-green-400 text-sm flex items-center justify-end gap-1">
                <TrendingUp size={14} />
                +23.5% vs mes anterior
              </p>
            </div>
          </div>

          <ReactApexChart options={options} series={series} type="area" height={200} />

          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="text-orange-400" size={16} />
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                </div>
                <p className="text-gray-500 text-xs">{stat.label}</p>
                <p className="text-green-400 text-xs">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

