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
      fontFamily: "Inter, sans-serif",
      type: "area",
      height: 280,
      toolbar: { show: false },
      background: "transparent",
      sparkline: { enabled: false },
    },
    colors: ["#10B981", "#E8DD6C"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      labels: { colors: "#6B7280" },
      fontFamily: "Inter, sans-serif",
    },
    xaxis: {
      categories: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#9CA3AF", fontFamily: "Inter" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#9CA3AF", fontFamily: "Inter" },
        formatter: (val) => `$${(val / 1000).toFixed(0)}k`,
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "light",
      y: { formatter: (val) => `$${val.toLocaleString()}` },
    },
  };

  const series = [
    { name: "Revenue Total", data: [32000, 38000, 42000, 47832] },
    { name: "Negociaciones Cerradas", data: [8000, 9500, 11000, 12450] },
  ];

  const stats = [
    {
      label: "Ticket Promedio",
      value: "$127",
      change: "+$23",
      icon: ShoppingCart,
      color: "#B85C5C",
    },
    {
      label: "Conversiones",
      value: "376",
      change: "+48",
      icon: Target,
      color: "#6366F1",
    },
    {
      label: "ROI del Agente",
      value: "847%",
      change: "+112%",
      icon: TrendingUp,
      color: "#10B981",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-black flex items-center gap-2 mb-1">
            <DollarSign className="text-green-600" size={24} />
            Revenue Generado
          </h3>
          <p className="text-gray-600 text-sm font-inter">Ingresos atribuidos a negociaciones con el agente</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-playfair font-black text-black">$47,832</p>
          <p className="text-green-600 text-sm flex items-center justify-end gap-1 font-inter font-medium">
            <TrendingUp size={14} />
            +23.5% vs mes anterior
          </p>
        </div>
      </div>

      <ReactApexChart options={options} series={series} type="area" height={280} />

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon size={16} style={{ color: stat.color }} />
              </div>
            </div>
            <p className="text-black font-playfair font-bold text-2xl mb-1">{stat.value}</p>
            <p className="text-gray-600 text-xs font-inter mb-1">{stat.label}</p>
            <p className="text-green-600 text-xs font-inter font-medium">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
