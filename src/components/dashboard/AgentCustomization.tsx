"use client";
import { Settings, Sliders, MessageSquare, Shield, Clock, Save } from "lucide-react";
import { useState } from "react";

export default function AgentCustomization() {
  const [aggressiveness, setAggressiveness] = useState(60);
  const [minDiscount, setMinDiscount] = useState(5);
  const [maxDiscount, setMaxDiscount] = useState(20);
  const [tone, setTone] = useState("friendly");
  const [forbiddenWords, setForbiddenWords] = useState("spam, barato, oferta");
  const [approvedWords, setApprovedWords] = useState("exclusivo, premium, calidad");

  const toneOptions = [
    { value: "professional", label: "Profesional", description: "Formal y directo" },
    { value: "friendly", label: "Amigable", description: "Cercano y conversacional" },
    { value: "casual", label: "Casual", description: "Relajado e informal" },
  ];

  const schedules = [
    { day: "Lunes - Viernes", start: "09:00", end: "18:00", active: true },
    { day: "Sábado", start: "10:00", end: "14:00", active: true },
    { day: "Domingo", start: "00:00", end: "00:00", active: false },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-4xl font-playfair font-bold text-black mb-3 flex items-center gap-3">
          <Settings className="text-[#B85C5C]" size={36} strokeWidth={2.5} />
          Panel de{" "}
          <span className="font-italiana italic text-[#B85C5C]">Personalización</span>
        </h2>
        <p className="text-gray-600 text-base font-inter">
          Configura el comportamiento y límites del agente de negociación
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Aggressiveness Level */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-playfair font-bold text-black mb-6 flex items-center gap-2">
            <Sliders className="text-[#B85C5C]" size={24} strokeWidth={2.5} />
            Nivel de agresividad
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-inter font-medium">Conservador</span>
              <span className="text-3xl font-inter font-black text-[#B85C5C]">
                {aggressiveness}%
              </span>
              <span className="text-sm text-gray-600 font-inter font-medium">Agresivo</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={aggressiveness}
              onChange={(e) => setAggressiveness(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
            />
            <p className="text-xs text-gray-500 font-inter">
              {aggressiveness < 30
                ? "El agente será muy conservador al ofrecer descuentos"
                : aggressiveness < 70
                ? "Balance entre conservar margen y cerrar ventas"
                : "El agente ofrecerá descuentos rápidamente para cerrar ventas"}
            </p>
          </div>
        </div>

        {/* Discount Ranges */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-playfair font-bold text-black mb-4 flex items-center gap-2">
            <Sliders className="text-[#B85C5C]" size={20} />
            Rangos de descuento permitidos
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 font-inter mb-2 block">
                Descuento mínimo
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={minDiscount}
                  onChange={(e) => setMinDiscount(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
                />
                <span className="text-lg font-playfair font-bold text-black w-12">
                  {minDiscount}%
                </span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 font-inter mb-2 block">
                Descuento máximo
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={maxDiscount}
                  onChange={(e) => setMaxDiscount(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B85C5C]"
                />
                <span className="text-lg font-playfair font-bold text-black w-12">
                  {maxDiscount}%
                </span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-600 font-inter">
                <strong>Rango configurado:</strong> El agente podrá negociar descuentos entre{" "}
                <span className="text-[#B85C5C] font-bold">{minDiscount}%</span> y{" "}
                <span className="text-[#B85C5C] font-bold">{maxDiscount}%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Agent Tone */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-playfair font-bold text-black mb-4 flex items-center gap-2">
            <MessageSquare className="text-[#B85C5C]" size={20} />
            Tono del agente
          </h3>
          <div className="space-y-3">
            {toneOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  tone === option.value
                    ? "border-[#B85C5C] bg-[#B85C5C]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="tone"
                  value={option.value}
                  checked={tone === option.value}
                  onChange={(e) => setTone(e.target.value)}
                  className="mt-1 accent-[#B85C5C]"
                />
                <div>
                  <p className="font-inter font-medium text-black">{option.label}</p>
                  <p className="text-sm text-gray-600 font-inter">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Forbidden/Approved Words */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-playfair font-bold text-black mb-4 flex items-center gap-2">
            <Shield className="text-[#B85C5C]" size={20} />
            Control de palabras
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 font-inter mb-2 block">
                Palabras prohibidas
              </label>
              <input
                type="text"
                value={forbiddenWords}
                onChange={(e) => setForbiddenWords(e.target.value)}
                placeholder="spam, barato, oferta"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl font-inter text-sm focus:border-[#B85C5C] focus:outline-none focus:ring-2 focus:ring-[#B85C5C]/20"
              />
              <p className="text-xs text-gray-500 font-inter mt-1">
                El agente evitará usar estas palabras (separadas por comas)
              </p>
            </div>
            <div>
              <label className="text-sm text-gray-600 font-inter mb-2 block">
                Palabras aprobadas
              </label>
              <input
                type="text"
                value={approvedWords}
                onChange={(e) => setApprovedWords(e.target.value)}
                placeholder="exclusivo, premium, calidad"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl font-inter text-sm focus:border-[#B85C5C] focus:outline-none focus:ring-2 focus:ring-[#B85C5C]/20"
              />
              <p className="text-xs text-gray-500 font-inter mt-1">
                El agente priorizará el uso de estas palabras
              </p>
            </div>
          </div>
        </div>

        {/* Activation Schedules */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all lg:col-span-2">
          <h3 className="text-lg font-playfair font-bold text-black mb-4 flex items-center gap-2">
            <Clock className="text-[#B85C5C]" size={20} />
            Horarios de activación
          </h3>
          <div className="space-y-3">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    defaultChecked={schedule.active}
                    className="w-5 h-5 accent-[#B85C5C] cursor-pointer"
                  />
                  <span className="font-inter font-medium text-black w-32">
                    {schedule.day}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="time"
                    defaultValue={schedule.start}
                    disabled={!schedule.active}
                    className="px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm disabled:bg-gray-100 disabled:text-gray-400"
                  />
                  <span className="text-gray-600">-</span>
                  <input
                    type="time"
                    defaultValue={schedule.end}
                    disabled={!schedule.active}
                    className="px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-[#E8DD6C] text-black px-8 py-3 rounded-full font-inter font-semibold hover:bg-[#D4C854] transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
          <Save size={20} />
          Guardar configuración
        </button>
      </div>
    </div>
  );
}
