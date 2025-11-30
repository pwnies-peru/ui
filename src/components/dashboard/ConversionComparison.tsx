"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ConversionComparison() {
  const options: ApexOptions = {
    colors: ["#B85C5C", "#D1D5DB"],
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "bar",
      height: 320,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
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
      labels: { colors: "#6B7280" },
      markers: { size: 4 },
      fontFamily: "Inter, sans-serif",
    },
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#9CA3AF", fontFamily: "Inter, sans-serif" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#9CA3AF", fontFamily: "Inter, sans-serif" },
        formatter: (val) => `${val}%`,
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "light",
      y: { formatter: (val) => `${val}%` },
    },
    fill: { opacity: 1 },
  };

  const series = [
    { name: "Con NegocIA", data: [8.2, 9.1, 10.5, 11.2, 11.8, 12.4] },
    { name: "Sin Agente", data: [2.8, 2.9, 3.0, 3.1, 3.0, 3.1] },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="mb-6">
        <h3 className="text-2xl font-playfair font-bold text-black mb-1">
          Impacto en{' '}
          <span className="font-italiana italic text-[#B85C5C]">Conversión</span>
        </h3>
        <p className="text-gray-600 text-sm font-inter">
          Comparación de conversión con y sin agente de negociación
        </p>
      </div>

      <ReactApexChart options={options} series={series} type="bar" height={320} />

      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-4xl font-playfair font-black text-[#B85C5C] mb-1">12.4%</p>
          <p className="text-gray-600 text-sm font-inter">Con NegocIA</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-playfair font-black text-gray-400 mb-1">3.1%</p>
          <p className="text-gray-600 text-sm font-inter">Sin Agente</p>
        </div>
      </div>

      <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <p className="text-green-700 font-inter font-medium">
          <span className="text-2xl font-playfair font-bold">+300%</span> de mejora en conversión
        </p>
      </div>
    </div>
  );
}
