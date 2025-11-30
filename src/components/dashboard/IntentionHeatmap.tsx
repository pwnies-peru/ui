"use client";
import { Target, TrendingUp, Users, DollarSign } from "lucide-react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function IntentionHeatmap() {
  // Product negotiation data
  const productData = [
    { product: "iPhone 15 Pro", negotiations: 142, conversion: 87, avgDiscount: "12%" },
    { product: "AirPods Pro", negotiations: 98, conversion: 92, avgDiscount: "8%" },
    { product: "MacBook Air", negotiations: 76, conversion: 78, avgDiscount: "15%" },
    { product: "iPad Air", negotiations: 64, conversion: 85, avgDiscount: "10%" },
    { product: "Apple Watch", negotiations: 54, conversion: 90, avgDiscount: "7%" },
  ];

  // Price range acceptance
  const priceRangeOptions: ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "bar",
      height: 280,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 8,
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      offsetX: 30,
      style: {
        fontSize: "12px",
        fontFamily: "Inter, sans-serif",
        colors: ["#000"],
      },
    },
    xaxis: {
      categories: ["$0-100", "$100-300", "$300-500", "$500-1000", "$1000+"],
      labels: {
        style: { colors: "#6B7280", fontFamily: "Inter" },
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#6B7280", fontFamily: "Inter" },
      },
    },
    colors: ["#B85C5C"],
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => `${val}% de aceptación`,
      },
    },
  };

  const priceRangeSeries = [
    {
      name: "Tasa de aceptación",
      data: [92, 85, 78, 65, 52],
    },
  ];

  // User profiles
  const userProfiles = [
    { profile: "Compradores frecuentes", percentage: 45, color: "#B85C5C" },
    { profile: "Primera compra", percentage: 28, color: "#E8DD6C" },
    { profile: "Compradores esporádicos", percentage: 18, color: "#10B981" },
    { profile: "Abandonadores recurrentes", percentage: 9, color: "#6366F1" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-1">
          Heatmap de Intención
        </h2>
        <p className="text-gray-600 text-sm font-inter">
          Análisis de patrones de negociación y comportamiento del cliente
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Products with most negotiations */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200">
          <h3 className="text-base font-inter font-semibold text-gray-900 mb-4">
            Productos más negociados
          </h3>
          <div className="space-y-2">
            {productData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-inter font-medium text-gray-900 text-sm">{item.product}</p>
                  <p className="text-xs text-gray-600 font-inter">
                    {item.negotiations} negociaciones • {item.conversion}% conversión
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-inter font-bold text-[#B85C5C] text-sm">{item.avgDiscount}</p>
                  <p className="text-xs text-gray-500 font-inter">descuento avg</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price ranges */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200">
          <h3 className="text-base font-inter font-semibold text-gray-900 mb-4">
            Rangos de precio más aceptados
          </h3>
          <ReactApexChart
            options={priceRangeOptions}
            series={priceRangeSeries}
            type="bar"
            height={280}
          />
          <p className="text-xs text-gray-500 font-inter text-center mt-2">
            Los rangos más bajos tienen mayor aceptación de descuentos
          </p>
        </div>
      </div>

      {/* User profiles */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200">
        <h3 className="text-base font-inter font-semibold text-gray-900 mb-6">
          Perfiles de usuario que más negocian
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userProfiles.map((profile, index) => (
            <div key={index} className="text-center">
              <div className="relative w-28 h-28 mx-auto mb-3">
                <svg className="w-28 h-28 transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="#F3F4F6"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke={profile.color}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(profile.percentage / 100) * 301.59} 301.59`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-inter font-bold text-gray-900">
                    {profile.percentage}%
                  </span>
                </div>
              </div>
              <p className="font-inter font-medium text-gray-900 text-sm mb-1">{profile.profile}</p>
              <div
                className="w-2 h-2 rounded-full mx-auto"
                style={{ backgroundColor: profile.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
