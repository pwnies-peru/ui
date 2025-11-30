"use client";

import { useState } from "react";

export default function BehaviorPage() {
  const [triggers, setTriggers] = useState({
    timeOnPage: true,
    scrollDepth: true,
    exitIntent: true,
    cartAbandonment: true,
    productComparison: false,
    repeatVisit: true,
  });

  const [timing, setTiming] = useState({
    initialDelay: 5,
    reappearDelay: 30,
    maxAppearances: 3,
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-inter font-semibold text-gray-900">
          Comportamiento
        </h1>
        <p className="text-gray-600 mt-1 font-inter text-sm">
          Configura cuándo y cómo aparece el agente a tus clientes
        </p>
      </div>

      {/* Triggers Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-4">
          Disparadores de aparición
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          El agente aparecerá cuando detecte estos comportamientos
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { key: "timeOnPage", label: "Tiempo en página", desc: "Después de X segundos en el producto" },
            { key: "scrollDepth", label: "Profundidad de scroll", desc: "Cuando el usuario scrollea 50%+ de la página" },
            { key: "exitIntent", label: "Intención de salida", desc: "Cuando el cursor se dirige al botón cerrar" },
            { key: "cartAbandonment", label: "Abandono de carrito", desc: "Cuando hay productos en carrito sin checkout" },
            { key: "productComparison", label: "Comparación de productos", desc: "Cuando visita el mismo producto múltiples veces" },
            { key: "repeatVisit", label: "Visita recurrente", desc: "Usuarios que regresan sin comprar" },
          ].map((trigger) => (
            <label
              key={trigger.key}
              className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={triggers[trigger.key as keyof typeof triggers]}
                onChange={(e) => setTriggers({ ...triggers, [trigger.key]: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[#B85C5C] focus:ring-[#B85C5C]"
              />
              <div>
                <span className="font-inter font-medium text-gray-900 block">{trigger.label}</span>
                <span className="text-sm text-gray-500">{trigger.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Timing Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-4">
          Tiempos de aparición
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Delay inicial (segundos)
            </label>
            <input
              type="range"
              min="0"
              max="30"
              value={timing.initialDelay}
              onChange={(e) => setTiming({ ...timing, initialDelay: Number(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Inmediato</span>
              <span className="font-medium text-[#B85C5C]">{timing.initialDelay}s</span>
              <span>30s</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Delay entre apariciones (segundos)
            </label>
            <input
              type="range"
              min="10"
              max="120"
              value={timing.reappearDelay}
              onChange={(e) => setTiming({ ...timing, reappearDelay: Number(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10s</span>
              <span className="font-medium text-[#B85C5C]">{timing.reappearDelay}s</span>
              <span>2min</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Máximo de apariciones por sesión
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={timing.maxAppearances}
              onChange={(e) => setTiming({ ...timing, maxAppearances: Number(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span className="font-medium text-[#B85C5C]">{timing.maxAppearances}</span>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-[#B85C5C] text-white px-6 py-3 rounded-xl font-inter font-medium hover:bg-[#A04E4E] transition-colors">
          Guardar cambios
        </button>
      </div>
    </div>
  );
}

