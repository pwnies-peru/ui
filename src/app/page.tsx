'use client';

import { ArrowRight, Zap, TrendingUp, ShoppingCart, MessageCircle, BarChart3, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Blobs - Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl rounded-full px-6 py-3 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-white font-bold text-xl">k0</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  Casero
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#solución" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Solución</a>
                <a href="#impacto" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Impacto</a>
                <a href="#integración" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Integración</a>
                <a href="#casos" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Casos</a>
              </div>
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2">
                Prueba Gratis
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Announcement Banner */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full mb-8 mx-auto flex w-fit border border-white/10">
            <Sparkles size={20} className="text-orange-400" />
            <span className="font-semibold">Tu vendedor virtual que nunca duerme 🌟</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 leading-tight text-white">
            Tu asesor de ventas <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
                convence
              </span>
              <div className="absolute -inset-2 bg-orange-400/20 blur-2xl rounded-full -z-10" />
            </span>{' '}
            cada mes para que multipliques tus conversiones hasta 3X más
          </h1>

          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Trasladamos la experiencia latam de tener un vendedor que asesora, recomienda y cierra ventas
            directamente en tu ecommerce. Con IA, sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-2xl shadow-orange-500/50">
              Integrar en 5 minutos
              <ArrowRight size={22} />
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Ver demo en vivo
            </button>
          </div>

          {/* Liquid Glass Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: '+43%', label: 'Aumento en conversión' },
              { value: '2.8X', label: 'Más ticket promedio' },
              { value: '24/7', label: 'Atención continua' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-orange-400/50 transition-all">
                  {/* Glass highlight */}
                  <div className="absolute top-3 left-3 right-3 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem]" />

                  <div className="relative text-center">
                    <div className="text-6xl font-black bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium text-lg">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">IMPACTO</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No es un chatbot genérico, es una IA que optimiza tu proceso comercial a diario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: 'Asesoría Personalizada', desc: 'Como un vendedor en tienda física: recomienda productos, responde dudas y guía al cliente hasta el checkout' },
              { icon: Zap, title: 'Regateo Inteligente', desc: 'Ofrece descuentos estratégicos en el momento justo para cerrar la venta sin sacrificar margen' },
              { icon: BarChart3, title: 'Data como Activo', desc: 'Dashboard con KPIs en tiempo real: intenciones de compra, productos más consultados, objeciones comunes' }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-blue-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:border-orange-400/30 transition-all">
                  {/* Glass highlight */}
                  <div className="absolute top-4 left-4 right-4 h-32 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2.5rem]" />

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-orange-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border border-orange-400/30">
                      <feature.icon className="text-orange-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-lg">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solución" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-white">
            Enfócate en el momento que más importa
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-4xl mx-auto">
            Nos especializamos en el <span className="text-orange-400 font-bold">momento de decisión de compra</span> -
            cuando el cliente está explorando pero necesita ese empujón final
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: ShoppingCart, title: 'Aumenta Carrito', desc: 'Cross-selling y upselling inteligente basado en la conversación, no en algoritmos fríos', metric: 'Resultado promedio:', value: '+$45 por orden' },
              { icon: Zap, title: 'Reduce Abandono', desc: 'Interviene justo cuando el cliente duda, ofreciendo incentivos personalizados para cerrar la venta', metric: 'Reducción de abandono:', value: '-32%' },
              { icon: BarChart3, title: 'Genera Insights', desc: 'Cada conversación es data: qué buscan, qué les frena, qué productos combinan mejor', metric: 'Dashboard incluido:', value: '15+ KPIs' }
            ].map((solution, index) => (
              <div key={index} className="relative group">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:border-orange-400/30 hover:scale-[1.02] transition-all">
                  {/* Glass highlight */}
                  <div className="absolute top-4 left-4 right-4 h-40 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2.5rem]" />

                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-[2rem] flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/50">
                      <solution.icon className="text-white" size={40} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-white">{solution.title}</h3>
                    <p className="text-gray-400 text-lg mb-6">
                      {solution.desc}
                    </p>
                    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                      <div className="text-sm text-gray-400 font-bold mb-2">{solution.metric}</div>
                      <div className="text-3xl font-black bg-gradient-to-br from-orange-400 to-orange-300 bg-clip-text text-transparent">{solution.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integración" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
              Integración <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">seamless</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Una sola línea de código y estás listo. Compatible con Shopify, WooCommerce, Magento y custom stores
            </p>
          </div>

          {/* Code Block - Liquid Glass */}
          <div className="relative group max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10">
              {/* Glass highlight */}
              <div className="absolute top-4 left-4 right-4 h-32 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem]" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-gray-400 text-sm">index.html</span>
                </div>

                <pre className="text-orange-400 font-mono text-sm md:text-base overflow-x-auto">
                  <code>{`<!-- Paso 1: Pega este script antes del </body> -->
<script src="https://cdn.casero-k0.com/widget.js"
        data-store-id="tu-tienda-123">
</script>

<!-- ¡Eso es todo! k0 ya está activo 🚀 -->

<!-- Opcional: Personaliza el comportamiento -->
<script>
  CaseroK0.init({
    position: 'bottom-right',
    primaryColor: '#22d3ee',
    greeting: '¡Hola! Soy tu asesor virtual 👋',
    language: 'es-MX'
  });
</script>`}</code>
                </pre>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/50">
                    ⚡ Instalación en 5 min
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    🔒 GDPR Compliant
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    📱 Mobile-first
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
            ¿Listo para vender más con menos esfuerzo?
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            Únete a los ecommerce más inteligentes de Latinoamérica
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/50">
              Agendar Demo Personalizada
              <ArrowRight size={24} />
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all">
              Ver Caso de Éxito
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
              <span>Sin contrato de permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
              <span>ROI garantizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
              <span>Soporte 24/7 en español</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/50">
                  <span className="text-white font-black text-lg">k0</span>
                </div>
                <span className="text-2xl font-black text-white">Casero</span>
              </div>
              <p className="text-gray-500">
                El vendedor virtual que multiplica tus conversiones
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Producto</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Recursos</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Casos de éxito</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-600">© 2025 Casero (k0). Hecho con ❤️ en Latinoamérica</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
