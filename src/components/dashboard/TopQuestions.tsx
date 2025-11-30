"use client";
import { MessageCircle, TrendingUp, Package, CreditCard, Truck, RefreshCw, HelpCircle } from "lucide-react";

export default function TopQuestions() {
  const questions = [
    {
      question: "¿Puedes bajar el precio?",
      count: 487,
      percentage: 34,
      trend: "+18%",
      icon: CreditCard,
      category: "Regateo",
      color: "#B85C5C",
    },
    {
      question: "¿Cuánto tarda el envío?",
      count: 412,
      percentage: 28,
      trend: "+8%",
      icon: Truck,
      category: "Envío",
      color: "#10B981",
    },
    {
      question: "¿Tienen en otro color/talla?",
      count: 298,
      percentage: 22,
      trend: "+12%",
      icon: Package,
      category: "Inventario",
      color: "#6366F1",
    },
    {
      question: "¿Aceptan descuento por cantidad?",
      count: 187,
      percentage: 16,
      trend: "+23%",
      icon: MessageCircle,
      category: "Precio",
      color: "#E8DD6C",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-black mb-1">
            Preguntas{' '}
            <span className="font-italiana italic text-[#B85C5C]">Frecuentes</span>
          </h3>
          <p className="text-gray-600 text-sm font-inter">Consultas más frecuentes de usuarios</p>
        </div>
        <span className="text-gray-500 text-xs font-inter">Últimos 30 días</span>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="group/item">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-black text-sm font-inter font-medium">{item.question}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-gray-600 text-xs font-inter">{item.category}</span>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-gray-500 text-xs font-inter">{item.count} consultas</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-black font-playfair font-bold text-xl">{item.percentage}%</p>
                <p className="text-green-600 text-xs flex items-center justify-end gap-1 font-inter font-medium">
                  <TrendingUp size={12} />
                  {item.trend}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm font-inter text-center">
          Total de consultas atendidas:{' '}
          <span className="font-playfair font-bold text-black text-lg">1,384</span>
        </p>
      </div>
    </div>
  );
}
