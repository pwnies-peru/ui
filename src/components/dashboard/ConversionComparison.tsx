"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ConversionComparison() {
  const options: ApexOptions = {
    colors: ["#fb923c", "#6b7280"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 280,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 8,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 4, colors: ["transparent"] },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      labels: { colors: "#9ca3af" },
      markers: { radius: 4 },
    },
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#9ca3af" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#9ca3af" },
        formatter: (val) => `${val}%`,
      },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.1)",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val) => `${val}%` },
    },
    fill: { opacity: 1 },
  };

  const series = [
    { name: "Con Agente", data: [8.2, 9.1, 10.5, 11.2, 11.8, 12.4] },
    { name: "Sin Agente", data: [2.8, 2.9, 3.0, 3.1, 3.0, 3.1] },
  ];

  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-gray-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Conversión: Agente vs Sin Agente</h3>
              <p className="text-gray-400 text-sm mt-1">Comparativa de tasa de conversión mensual</p>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
              <span className="text-green-400 text-sm font-medium">+300% más</span>
            </div>
          </div>
          <ReactApexChart options={options} series={series} type="bar" height={280} />
        </div>
      </div>
    </div>
  );
}

