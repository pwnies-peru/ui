'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-orange-500/20 via-orange-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold text-white">Negocia</span>
          </Link>

          <Link 
            href="/dashboard" 
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            Ver Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Vende{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              3X más
            </span>
            {' '}con IA.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            El asistente de ventas que asesora, recomienda y cierra ventas en tu ecommerce. 
            24/7, sin complicaciones.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <Link 
              href="/dashboard" 
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              Ver Dashboard
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Preview - Mitad visible */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-t from-transparent via-orange-500/20 to-orange-500/10 rounded-t-[2rem] blur-2xl" />
          
          {/* Dashboard Container - Clickeable */}
          <Link href="/dashboard" className="block relative bg-gray-900/80 backdrop-blur-xl rounded-t-2xl border border-white/10 border-b-0 shadow-2xl overflow-hidden hover:border-orange-400/30 transition-all cursor-pointer">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-gray-700/50 rounded-lg px-4 py-1 text-gray-400 text-sm">
                  app.negocia.ai
                </div>
              </div>
            </div>

            {/* Dashboard Content Preview */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-950">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Conversión', value: '12.4%', change: '+4.2%' },
                  { label: 'Revenue', value: '$47,832', change: '+23.5%' },
                  { label: 'Dudas Resueltas', value: '94.7%', change: '+2.1%' },
                  { label: 'Usuarios', value: '3,847', change: '+18.3%' },
                ].map((metric, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-gray-500 text-xs mb-1">{metric.label}</p>
                    <p className="text-white font-bold text-xl">{metric.value}</p>
                    <p className="text-green-400 text-xs">{metric.change}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Left Chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-white font-medium mb-4">Conversión vs Sin Agente</p>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-1">
                        <div 
                          className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                        <div 
                          className="bg-gray-700 rounded-t"
                          style={{ height: `${h * 0.3}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-white font-medium mb-4">Top Preguntas</p>
                  <div className="space-y-3">
                    {[
                      { q: '¿Disponible en otro color?', pct: 24 },
                      { q: '¿Cuánto tarda el envío?', pct: 20 },
                      { q: '¿Tienen descuento?', pct: 16 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400 truncate">{item.q}</span>
                          <span className="text-orange-400">{item.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                            style={{ width: `${item.pct * 3}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Impact Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Impacto <span className="text-orange-400">Real</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No es un chatbot genérico, es una IA que optimiza tu proceso comercial a diario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Asesoría Personalizada', desc: 'Como un vendedor en tienda física: recomienda productos, responde dudas y guía al cliente hasta el checkout' },
              { title: 'Regateo Inteligente', desc: 'Ofrece descuentos estratégicos en el momento justo para cerrar la venta sin sacrificar margen' },
              { title: 'Data como Activo', desc: 'Dashboard con KPIs en tiempo real: intenciones de compra, productos más consultados, objeciones comunes' }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-400/30 transition-all h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '+43%', label: 'Aumento en conversión' },
              { value: '2.8X', label: 'Más ticket promedio' },
              { value: '24/7', label: 'Atención continua' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            El momento que más importa
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Nos especializamos en el <span className="text-orange-400 font-bold">momento de decisión de compra</span> - 
            cuando el cliente está explorando pero necesita ese empujón final
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Aumenta Carrito', desc: 'Cross-selling y upselling inteligente basado en la conversación', metric: '+$45 por orden' },
              { title: 'Reduce Abandono', desc: 'Interviene justo cuando el cliente duda, ofreciendo incentivos personalizados', metric: '-32% abandono' },
              { title: 'Genera Insights', desc: 'Cada conversación es data: qué buscan, qué les frena, qué productos combinan', metric: '15+ KPIs' }
            ].map((solution, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-400/30 transition-all h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.desc}</p>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-black text-orange-400">{solution.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Integración <span className="text-orange-400">Simple</span>
            </h2>
            <p className="text-xl text-gray-400">
              Una sola línea de código. Compatible con Shopify, WooCommerce, Magento y custom stores.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 text-sm ml-2">index.html</span>
              </div>
              <pre className="text-orange-400 font-mono text-sm overflow-x-auto">
{`<script src="https://cdn.negocia.ai/widget.js"
        data-store-id="tu-tienda-123">
</script>

<!-- ¡Eso es todo! Negocia ya está activo 🚀 -->`}
              </pre>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">⚡ 5 min instalación</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">🔒 GDPR Compliant</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">📱 Mobile-first</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para vender más?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Explora el dashboard y ve lo que Negocia puede hacer por tu ecommerce
          </p>

          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-orange-500/30"
          >
            Ver Dashboard
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-white">Negocia</span>
            </Link>
            <p className="text-gray-600 text-sm">
              © 2025 Negocia. Hecho con ❤️ en Latinoamérica
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
