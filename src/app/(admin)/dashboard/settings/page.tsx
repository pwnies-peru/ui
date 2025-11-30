"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function SettingsPage() {
  const [copied, setCopied] = useState(false);
  const [settings, setSettings] = useState({
    enabled: true,
    testMode: false,
    language: "es",
    timezone: "America/Mexico_City",
  });

  const integrationCode = `<script src="https://cdn.negocia.ai/widget.js" data-store-id="store_abc123"></script>`;

  const copyCode = () => {
    navigator.clipboard.writeText(integrationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-inter font-semibold text-gray-900">
          Ajustes
        </h1>
        <p className="text-gray-600 mt-1 font-inter text-sm">
          Configuración general de tu cuenta y la integración
        </p>
      </div>

      {/* Status Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-4">
          Estado del agente
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <span className="font-inter font-medium text-gray-900 block">Agente activo</span>
              <span className="text-sm text-gray-500">El agente aparecerá en tu tienda</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B85C5C]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#B85C5C]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <span className="font-inter font-medium text-gray-900 block">Modo de prueba</span>
              <span className="text-sm text-gray-500">Solo visible para ti (con ?negocia_test=true)</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.testMode}
                onChange={(e) => setSettings({ ...settings, testMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B85C5C]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#B85C5C]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-2">
          Código de integración
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Agrega este código antes de {`</body>`} en tu tienda
        </p>

        <div className="relative">
          <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto">
            {integrationCode}
          </pre>
          <button
            onClick={copyCode}
            className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {copied ? (
              <Check size={18} className="text-green-400" />
            ) : (
              <Copy size={18} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Regional Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-gray-900 mb-4">
          Configuración regional
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Idioma del agente
            </label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-inter focus:border-[#B85C5C] focus:outline-none focus:ring-1 focus:ring-[#B85C5C]"
            >
              <option value="es">Español (Latinoamérica)</option>
              <option value="es-mx">Español (México)</option>
              <option value="es-ar">Español (Argentina)</option>
              <option value="es-co">Español (Colombia)</option>
              <option value="pt-br">Português (Brasil)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Zona horaria
            </label>
            <select
              value={settings.timezone}
              onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-inter focus:border-[#B85C5C] focus:outline-none focus:ring-1 focus:ring-[#B85C5C]"
            >
              <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
              <option value="America/Bogota">Bogotá (GMT-5)</option>
              <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
              <option value="America/Santiago">Santiago (GMT-4)</option>
              <option value="America/Lima">Lima (GMT-5)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
        <h2 className="text-lg font-inter font-semibold text-red-900 mb-2">
          Zona de peligro
        </h2>
        <p className="text-sm text-red-700 mb-4">
          Estas acciones son irreversibles
        </p>

        <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg font-inter text-sm hover:bg-red-100 transition-colors">
          Eliminar todos los datos
        </button>
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

