
'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Top Black Bar - Anuncio */}
      <div className="bg-[#1A1A1A] text-white py-3 px-6 text-center">
        <p className="text-sm md:text-base">
          ✨ <span className="font-medium">¿Vendes productos online?</span> Crea tu agente de ventas IA GRATIS aquí →
        </p>
      </div>

      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo - Serif */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl md:text-4xl font-playfair font-bold text-black">
              NegocIA<span className="text-[#B85C5C]">!</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-black hover:text-[#B85C5C] transition-colors font-inter">
              Beneficios
            </Link>
            <Link href="#how-it-works" className="text-black hover:text-[#B85C5C] transition-colors font-inter">
              Cómo funciona
            </Link>
            <Link href="/dashboard" className="text-black hover:text-[#B85C5C] transition-colors font-inter">
              Dashboard
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="bg-[#E8DD6C] text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-inter font-medium hover:bg-[#D4C854] transition-all inline-flex items-center gap-2 shadow-sm"
          >
            Ver Dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-inter font-medium text-gray-700">+1,247 vendedores usando NegocIA hoy</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-black mb-8 leading-tight"
        >
          Tus clientes prefieren comprar con atención humana,{' '}
          <br className="hidden md:block" />
          pero{' '}
          <span className="font-italiana text-[#B85C5C] italic">
            responderles toma demasiado tiempo
          </span>{' '}
          para crecer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 font-inter leading-relaxed"
        >
          NegocIA negocia, asesora y cierra ventas por ti. Como un vendedor real, pero disponible 24/7 sin descanso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="/dashboard"
            className="bg-[#E8DD6C] text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-inter font-semibold text-base md:text-lg hover:bg-[#D4C854] transition-all inline-flex items-center gap-3 shadow-md hover:shadow-lg"
          >
            Comenzar Gratis
            <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </Link>
          <Link
            href="/dashboard"
            className="text-black border-2 border-gray-300 px-10 md:px-12 py-4 md:py-5 rounded-full font-inter font-semibold text-base md:text-lg hover:border-gray-400 transition-all inline-flex items-center gap-2"
          >
            Ver Demo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-sm text-gray-600 font-inter"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Setup en 5 minutos
          </span>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Conversaciones que convierten',
              desc: 'Más clientes significa más tiempo respondiendo mensajes. NegocIA lo hace por ti sin que pierdas el toque humano.'
            },
            {
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Los clientes compran al primero que responde',
              desc: 'El 78% compra al que le responde más rápido. Con NegocIA, tú siempre eres el primero.'
            },
            {
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Configuración en 5 minutos',
              desc: 'Sin complicaciones técnicas. Una línea de código y NegocIA ya está vendiendo por ti.'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-[#B85C5C] mb-6 mx-auto md:mx-0">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 font-inter leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black text-center mb-16">
            Cómo funciona el{' '}
            <span className="font-italiana italic text-[#B85C5C]">regateo inteligente</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Detecta intención de compra',
                desc: 'NegocIA analiza el comportamiento del cliente: tiempo en página, productos que revisa, señales de duda. Aparece en el momento exacto.'
              },
              {
                step: '02',
                title: 'Inicia la conversación',
                desc: 'Con un tono cercano y humano, NegocIA pregunta qué necesita el cliente y propone soluciones personalizadas.'
              },
              {
                step: '03',
                title: 'Negocia como un vendedor real',
                desc: 'Si el cliente pide un descuento, NegocIA contraoferta respetando tu margen de ganancia. Genera códigos de descuento dinámicos al instante.'
              },
              {
                step: '04',
                title: 'Cierra la venta',
                desc: 'Guía al cliente hasta el checkout, resuelve dudas de envío, recomienda productos adicionales y asegura que complete la compra.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-8 items-start"
              >
                <div className="text-5xl md:text-6xl font-playfair font-bold text-[#E8DD6C] flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '+43%', label: 'Conversión por regateo' },
            { value: '87%', label: 'Tasa de cierre' },
            { value: '24/7', label: 'Siempre disponible' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-playfair font-black text-[#B85C5C] mb-3">
                {stat.value}
              </div>
              <div className="text-lg text-gray-700 font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black text-center mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-gray-600 font-inter mb-16 max-w-2xl mx-auto">
            Más de 1,200 negocios ya están vendiendo más con NegocIA
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Antes perdíamos el 60% de clientes que pedían descuentos. Ahora NegocIA los convierte en ventas.",
                author: "María González",
                business: "Tienda de ropa online",
                metric: "+38% en ventas"
              },
              {
                quote: "No tengo que estar pegado al celular respondiendo mensajes. NegocIA lo hace mejor que yo.",
                author: "Carlos Ramírez",
                business: "Electrónica",
                metric: "12 horas ahorradas/día"
              },
              {
                quote: "El ROI fue inmediato. En la primera semana recuperamos 15 ventas que se hubieran perdido.",
                author: "Ana Martínez",
                business: "Productos naturales",
                metric: "$12,400 recuperados"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#E8DD6C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 font-inter mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-playfair font-bold text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 font-inter">{testimonial.business}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair font-bold text-[#B85C5C]">{testimonial.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black text-center mb-4">
            Calcula tu{' '}
            <span className="font-italiana italic text-[#B85C5C]">retorno de inversión</span>
          </h2>
          <p className="text-center text-gray-600 font-inter mb-10">
            Promedio basado en más de 1,200 tiendas activas
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-sm text-gray-600 font-inter mb-2">Ventas perdidas al mes</p>
              <p className="text-4xl font-playfair font-bold text-black mb-1">~120</p>
              <p className="text-xs text-gray-500 font-inter">Clientes que abandonan sin comprar</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-sm text-gray-600 font-inter mb-2">Ticket promedio</p>
              <p className="text-4xl font-playfair font-bold text-black mb-1">$350</p>
              <p className="text-xs text-gray-500 font-inter">Valor promedio de compra</p>
            </div>
          </div>

          <div className="bg-[#F5F5F0] border-2 border-[#E8DD6C] rounded-2xl p-8 text-center">
            <p className="text-sm text-gray-600 font-inter mb-2">Con NegocIA recuperas el 43% →</p>
            <p className="text-5xl md:text-6xl font-playfair font-black text-[#B85C5C] mb-2">$18,060</p>
            <p className="text-lg text-gray-700 font-inter font-medium">de ingresos adicionales al mes</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#F5F5F0] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-black mb-6">
            Vende más con{' '}
            <span className="font-italiana italic text-[#B85C5C]">
              conversaciones inteligentes
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 font-inter max-w-2xl mx-auto">
            Explora el dashboard y descubre cómo NegocIA puede transformar tu ecommerce
          </p>

          <Link
            href="/dashboard"
            className="bg-[#E8DD6C] text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-inter font-semibold text-base md:text-lg hover:bg-[#D4C854] transition-all inline-flex items-center gap-3 shadow-md hover:shadow-lg"
          >
            Ver Dashboard en acción
            <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl md:text-3xl font-playfair font-bold text-black">
              NegocIA<span className="text-[#B85C5C]">!</span>
            </span>
            <p className="text-gray-600 text-sm font-inter">
              © 2025 NegocIA. El regateo inteligente que cierra ventas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
