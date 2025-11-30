"use client";

import { useState } from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";

export default function MessagesPage() {
  const [greetings, setGreetings] = useState([
    { id: 1, text: "¡Hola! Veo que llevas rato mirando este producto. ¿Te ayudo?" },
    { id: 2, text: "¡Hey! ¿Y si te consigo un descuentito? Dame chance de ayudarte" },
    { id: 3, text: "¡Bienvenido de vuelta! ¿Seguimos con lo que estabas viendo?" },
  ]);

  const [toneStyle, setToneStyle] = useState("casual");
  const [useEmojis, setUseEmojis] = useState(true);

  const addGreeting = () => {
    setGreetings([...greetings, { id: Date.now(), text: "" }]);
  };

  const removeGreeting = (id: number) => {
    setGreetings(greetings.filter((g) => g.id !== id));
  };

  const updateGreeting = (id: number, text: string) => {
    setGreetings(greetings.map((g) => (g.id === id ? { ...g, text } : g)));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-inter font-semibold text-gray-900">
          Mensajes
        </h1>
        <p className="text-gray-600 mt-1 font-inter text-sm">
          Personaliza los mensajes y el tono de tu agente
        </p>
      </div>

      {/* Tone Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-4">
          Tono de comunicación
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { value: "casual", label: "Casual", desc: "Cercano y amigable, como un amigo" },
            { value: "professional", label: "Profesional", desc: "Formal pero cálido" },
            { value: "playful", label: "Divertido", desc: "Con humor y emojis" },
          ].map((tone) => (
            <label
              key={tone.value}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                toneStyle === tone.value
                  ? "border-[#B85C5C] bg-[#B85C5C]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="tone"
                value={tone.value}
                checked={toneStyle === tone.value}
                onChange={(e) => setToneStyle(e.target.value)}
                className="sr-only"
              />
              <span className="font-inter font-medium text-gray-900 block">{tone.label}</span>
              <span className="text-sm text-gray-500">{tone.desc}</span>
            </label>
          ))}
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={useEmojis}
            onChange={(e) => setUseEmojis(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-[#B85C5C] focus:ring-[#B85C5C]"
          />
          <span className="font-inter text-gray-700">Usar emojis en los mensajes</span>
        </label>
      </div>

      {/* Greetings Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-inter font-semibold text-gray-900">
              Saludos iniciales
            </h2>
            <p className="text-sm text-gray-500">
              El agente elegirá uno al azar para iniciar la conversación
            </p>
          </div>
          <button
            onClick={addGreeting}
            className="flex items-center gap-2 text-sm font-inter font-medium text-[#B85C5C] hover:text-[#A04E4E] transition-colors"
          >
            <Plus size={18} />
            Agregar
          </button>
        </div>

        <div className="space-y-3">
          {greetings.map((greeting, index) => (
            <div
              key={greeting.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group"
            >
              <GripVertical size={18} className="text-gray-400 cursor-grab" />
              <span className="text-sm text-gray-400 font-mono w-6">{index + 1}.</span>
              <input
                type="text"
                value={greeting.text}
                onChange={(e) => updateGreeting(greeting.id, e.target.value)}
                placeholder="Escribe un saludo..."
                className="flex-1 bg-transparent border-none font-inter text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
              />
              <button
                onClick={() => removeGreeting(greeting.id)}
                className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Negotiation Phrases */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-2">
          Frases de negociación
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Plantillas que usa el agente al ofrecer descuentos
        </p>

        <div className="space-y-3">
          {[
            "Mira, te tengo una propuesta: ¿qué tal si te hago un {discount}% de descuento?",
            "Déjame ver qué puedo hacer por ti... ¡Listo! Te aplico {discount}% off",
            "Como eres cliente especial, te dejo el producto en ${final_price}",
          ].map((phrase, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 rounded-xl font-inter text-sm text-gray-700"
            >
              {phrase}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Variables disponibles: {"{discount}"}, {"{final_price}"}, {"{product_name}"}, {"{original_price}"}
        </p>
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

