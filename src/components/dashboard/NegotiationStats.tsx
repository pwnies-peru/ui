"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Percent, CheckCircle, XCircle, TrendingUp } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function NegotiationStats() {
  const series = [87];
  const options: ApexOptions = {
    colors: ["#B85C5C"],
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "radialBar",
      height: 280,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "72%" },
        track: {
          background: "#F3F4F6",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "48px",
            fontWeight: "700",
            offsetY: -20,
            color: "#000000",
            fontFamily: "Playfair Display, serif",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        gradientToColors: ["#D47676"],
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" },
  };

  const stats = [
    { label: "Total Intentos", value: "1,247", icon: Percent, color: "#6366F1" },
    { label: "Aceptados", value: "1,088", icon: CheckCircle, color: "#10B981" },
    { label: "Rechazados", value: "159", icon: XCircle, color: "#EF4444" },
    { label: "Ahorro Margen", value: "8.2%", icon: TrendingUp, color: "#E8DD6C" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
      <div className="mb-4">
        <h3 className="text-2xl font-playfair font-bold text-black mb-1">
          Tasa de{' '}
          <span className="font-italiana italic text-[#B85C5C]">Éxito</span>
        </h3>
        <p className="text-gray-600 text-sm font-inter">Negociaciones cerradas exitosamente</p>
      </div>

      <div className="flex justify-center -mt-2">
        <ReactApexChart options={options} series={series} type="radialBar" height={240} />
      </div>

      <p className="text-center text-gray-700 text-sm font-inter -mt-6 mb-6">
        De los usuarios que regatean,{' '}
        <span className="text-[#B85C5C] font-playfair font-bold text-lg">87%</span>{' '}
        aceptan la contraoferta
      </p>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
              style={{ backgroundColor: `${stat.color}15` }}
            >
              <stat.icon size={16} style={{ color: stat.color }} />
            </div>
            <p className="text-black font-playfair font-bold text-xl">{stat.value}</p>
            <p className="text-gray-600 text-xs font-inter">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
