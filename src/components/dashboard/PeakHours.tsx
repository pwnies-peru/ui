"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Clock, Zap } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function PeakHours() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "heatmap",
      height: 300,
      toolbar: { show: false },
      background: "transparent",
    },
    dataLabels: { enabled: false },
    colors: ["#B85C5C"],
    xaxis: {
      categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      labels: { style: { colors: "#6B7280", fontFamily: "Inter, sans-serif" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {

      labels: { style: { colors: "#6B7280", fontFamily: "Inter, sans-serif" } },
    },
    grid: { show: false },
    tooltip: {
      theme: "light",
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const value = w.config.series[seriesIndex].data[dataPointIndex].y;
        const day = w.config.xaxis.categories[dataPointIndex];
        const hour = w.config.series[seriesIndex].name;
        return `<div class="px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <p class="text-black font-medium font-inter">${day} ${hour}</p>
          <p class="text-[#B85C5C] font-playfair font-bold">${value} negociaciones</p>
        </div>`;
      },
    },
    plotOptions: {
      heatmap: {
        radius: 6,
        enableShades: true,
        shadeIntensity: 0.4,
        colorScale: {
          ranges: [
            { from: 0, to: 20, color: "#F3F4F6", name: "Bajo" },
            { from: 21, to: 50, color: "#FED7D7", name: "Medio" },
            { from: 51, to: 80, color: "#D47676", name: "Alto" },
            { from: 81, to: 100, color: "#B85C5C", name: "Pico" },
          ],
        },
      },
    },
  };

  const generateData = (count: number, range: { min: number; max: number }) => {
    return Array.from({ length: count }, () => ({
      x: "",
      y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min,
    }));
  };

  const series = [
    { name: "12am", data: generateData(7, { min: 5, max: 25 }) },
    { name: "9pm", data: generateData(7, { min: 60, max: 95 }) },
    { name: "6pm", data: generateData(7, { min: 70, max: 100 }) },
    { name: "3pm", data: generateData(7, { min: 40, max: 70 }) },
    { name: "12pm", data: generateData(7, { min: 50, max: 85 }) },
    { name: "9am", data: generateData(7, { min: 30, max: 55 }) },
    { name: "6am", data: generateData(7, { min: 10, max: 30 }) },
  ];

  const peakTimes = [
    { time: "6:00 PM - 9:00 PM", label: "Hora pico máxima", color: "#B85C5C" },
    { time: "12:00 PM - 2:00 PM", label: "Pico del mediodía", color: "#E8DD6C" },
    { time: "Viernes y Sábado", label: "Días con más tráfico", color: "#10B981" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-black flex items-center gap-2 mb-1">
            <Clock className="text-[#B85C5C]" size={24} />
            Horas{' '}
            <span className="font-italiana italic text-[#B85C5C]">Pico</span>
          </h3>
          <p className="text-gray-600 text-sm font-inter">Mapa de calor de actividad semanal</p>
        </div>
      </div>

      <ReactApexChart options={options} series={series} type="heatmap" height={300} />

      <div className="grid grid-cols-3 gap-3 mt-6">
        {peakTimes.map((peak, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
              style={{ backgroundColor: `${peak.color}15` }}
            >
              <Zap size={18} style={{ color: peak.color }} />
            </div>
            <p className="text-black font-playfair font-bold text-sm mb-1">{peak.time}</p>
            <p className="text-gray-600 text-xs font-inter">{peak.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
