"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Percent, CheckCircle, XCircle, TrendingUp } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function NegotiationStats() {
  const series = [68];
  const options: ApexOptions = {
    colors: ["#fb923c"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 280,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "75%" },
        track: {
          background: "rgba(255,255,255,0.1)",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "42px",
            fontWeight: "800",
            offsetY: -20,
            color: "#ffffff",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#f97316"],
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" },
  };

  const stats = [
    { label: "Total Intentos", value: "847", icon: Percent, color: "text-blue-400" },
    { label: "Aceptados", value: "576", icon: CheckCircle, color: "text-green-400" },
    { label: "Rechazados", value: "271", icon: XCircle, color: "text-red-400" },
    { label: "Ahorro Margen", value: "8.2%", icon: TrendingUp, color: "text-orange-400" },
  ];

  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Regateo Inteligente</h3>
            <p className="text-gray-400 text-sm mt-1">Tasa de éxito en negociaciones</p>
          </div>

          <div className="flex justify-center -mt-4">
            <ReactApexChart options={options} series={series} type="radialBar" height={220} />
          </div>

          <p className="text-center text-gray-400 text-sm -mt-8 mb-6">
            De los usuarios que regatean, <span className="text-orange-400 font-bold">68%</span> aceptan la contraoferta
          </p>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <stat.icon className={`${stat.color} size-5 mx-auto mb-1`} />
                <p className="text-white font-bold text-lg">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

