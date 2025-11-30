"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function CategoryInfluence() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "bar",
      height: 340,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 8,
        barHeight: "65%",
        distributed: true,
      },
    },
    colors: ["#B85C5C", "#6366F1", "#10B981", "#E8DD6C", "#F59E0B", "#EF4444"],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "Inter",
        colors: ["#ffffff"],
      },
      offsetX: 0,
    },
    legend: { show: false },
    xaxis: {
      categories: [
        "Electrónica",
        "Moda",
        "Hogar & Deco",
        "Deportes",
        "Belleza",
        "Otros",
      ],
      labels: {
        style: { colors: "#9CA3AF", fontFamily: "Inter" },
        formatter: (val) => `${val}%`,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "13px", fontFamily: "Inter" } },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => `${val}% de conversión`,
      },
    },
  };

  const series = [
    {
      name: "Conversión",
      data: [78, 65, 52, 48, 41, 28],
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
      <div className="mb-4">
        <h3 className="text-2xl font-playfair font-bold text-black mb-1">
          Categorías con más{' '}
          <span className="font-italiana italic text-[#B85C5C]">Regateo</span>
        </h3>
        <p className="text-gray-600 text-sm font-inter">% de conversión donde el agente negoció activamente</p>
      </div>
      <ReactApexChart options={options} series={series} type="bar" height={340} />
    </div>
  );
}
