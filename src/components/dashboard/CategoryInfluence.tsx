"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function CategoryInfluence() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 320,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: "60%",
        distributed: true,
      },
    },
    colors: ["#fb923c", "#a855f7", "#3b82f6", "#22c55e", "#eab308", "#ef4444"],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        fontSize: "12px",
        fontWeight: 600,
        colors: ["#fff"],
      },
      offsetX: 0,
    },
    legend: { show: false },
    xaxis: {
      categories: [
        "Electrónica",
        "Moda",
        "Hogar",
        "Deportes",
        "Belleza",
        "Otros",
      ],
      labels: {
        style: { colors: "#9ca3af" },
        formatter: (val) => `${val}%`,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#9ca3af", fontSize: "13px" } },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.1)",
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val}% de influencia en compra`,
      },
    },
  };

  const series = [
    {
      name: "Influencia",
      data: [78, 65, 52, 48, 41, 28],
    },
  ];

  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-orange-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Influencia por Categoría</h3>
            <p className="text-gray-400 text-sm mt-1">% de compras donde el agente influenció la decisión</p>
          </div>
          <ReactApexChart options={options} series={series} type="bar" height={320} />
        </div>
      </div>
    </div>
  );
}

