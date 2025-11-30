"use client";
import { MessageCircle, TrendingUp, Package, CreditCard, Truck, RefreshCw, HelpCircle } from "lucide-react";

export default function TopQuestions() {
  const questions = [
    {
      question: "¿Tienen disponible en otro color/talla?",
      count: 342,
      percentage: 24,
      trend: "+12%",
      icon: Package,
      category: "Inventario",
    },
    {
      question: "¿Cuánto tarda el envío?",
      count: 287,
      percentage: 20,
      trend: "+8%",
      icon: Truck,
      category: "Envío",
    },
    {
      question: "¿Tienen descuento por cantidad?",
      count: 234,
      percentage: 16,
      trend: "+23%",
      icon: CreditCard,
      category: "Precio",
    },
    {
      question: "¿Cuál es la política de devoluciones?",
      count: 198,
      percentage: 14,
      trend: "-3%",
      icon: RefreshCw,
      category: "Políticas",
    },
    {
      question: "¿Es compatible con...?",
      count: 156,
      percentage: 11,
      trend: "+5%",
      icon: HelpCircle,
      category: "Producto",
    },
  ];

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50" />
      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />
        <div className="relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageCircle className="text-orange-400" size={20} />
                Top Preguntas
              </h3>
              <p className="text-gray-400 text-sm mt-1">Consultas más frecuentes de usuarios</p>
            </div>
            <span className="text-gray-400 text-sm">Últimos 30 días</span>
          </div>

          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="group/item">
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-orange-400/30 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <item.icon className="text-orange-400" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{item.question}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-gray-500 text-xs">{item.category}</span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{item.count} consultas</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{item.percentage}%</p>
                    <p className={`text-xs flex items-center justify-end gap-1 ${item.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      <TrendingUp size={12} />
                      {item.trend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

