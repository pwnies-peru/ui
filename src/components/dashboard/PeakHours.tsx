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
      fontFamily: "Outfit, sans-serif",
      type: "heatmap",
      height: 280,
      toolbar: { show: false },
      background: "transparent",
    },
    dataLabels: { enabled: false },
    colors: ["#fb923c"],
    xaxis: {
      categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      labels: { style: { colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      categories: ["6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
      labels: { style: { colors: "#9ca3af" } },
    },
    grid: { show: false },
    tooltip: {
      theme: "dark",
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const value = w.config.series[seriesIndex].data[dataPointIndex].y;
        const day = w.config.xaxis.categories[dataPointIndex];
        const hour = w.config.series[seriesIndex].name;
        return `<div class="px-3 py-2 bg-gray-900 border border-white/10 rounded-lg">
          <p class="text-white font-medium">${day} ${hour}</p>
          <p class="text-orange-400">${value} interacciones</p>
        </div>`;
      },
    },
    plotOptions: {
      heatmap: {
        radius: 4,
        enableShades: true,
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 20, color: "rgba(251,146,60,0.1)", name: "Bajo" },
            { from: 21, to: 50, color: "rgba(251,146,60,0.3)", name: "Medio" },
            { from: 51, to: 80, color: "rgba(251,146,60,0.6)", name: "Alto" },
            { from: 81, to: 100, color: "rgba(251,146,60,1)", name: "Pico" },
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
    { time: "6:00 PM - 9:00 PM", label: "Hora pico máxima", intensity: "100%" },
    { time: "12:00 PM - 2:00 PM", label: "Pico del mediodía", intensity: "75%" },
    { time: "Viernes y Sábado", label: "Días con más tráfico", intensity: "85%" },
  ];

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="text-orange-400" size={20} />
                Horas Pico de Interacción
              </h3>
              <p className="text-gray-400 text-sm mt-1">Mapa de calor de actividad semanal</p>
            </div>
          </div>

          <ReactApexChart options={options} series={series} type="heatmap" height={280} />

          <div className="grid grid-cols-3 gap-3 mt-4">
            {peakTimes.map((peak, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <Zap className="text-orange-400 mx-auto mb-1" size={18} />
                <p className="text-white font-bold text-sm">{peak.time}</p>
                <p className="text-gray-500 text-xs">{peak.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

