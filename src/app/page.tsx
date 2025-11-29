'use client';

import { ArrowRight, Zap, TrendingUp, ShoppingCart, MessageCircle, BarChart3, Sparkles, CheckCircle2, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
      <section className="pt-40 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Announcement Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full mb-8 mx-auto flex w-fit border border-white/10"
          >
            <Sparkles size={20} className="text-orange-400" />
            <span className="font-semibold">Tu vendedor virtual que nunca duerme 🌟</span>
          </motion.div>

          {/* Título en 2 líneas EXACTAS */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight text-white max-w-6xl mx-auto"
          >
            Multiplica tus conversiones hasta <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
                3X más
              </span>
              <div className="absolute -inset-2 bg-orange-400/20 blur-2xl rounded-full -z-10" />
            </span>
            <br />
            con tu asesor de ventas que nunca duerme
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12"
          >
            Trasladamos la experiencia latam de tener un vendedor que asesora, recomienda y cierra ventas
            directamente en tu ecommerce. Con IA, sin complicaciones.
          </motion.p>

          {/* CTA en el medio - MUY VISIBLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center mb-20"
          >
            <Link href="/dashboard" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-14 py-7 rounded-full font-black text-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-orange-500/60">
              Ver demo en vivo
              <ArrowRight size={28} className="font-bold" />
            </Link>
          </motion.div>

          {/* Dashboard Screenshot - MUY DESTACADA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-7xl mx-auto mb-24"
          >
            {/* Título para la captura */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                Dashboard en tiempo real
              </h3>
              <p className="text-xl text-gray-400">
                Visualiza y controla todas tus métricas desde un solo lugar
              </p>
            </div>

            {/* Glow effect MÁS FUERTE */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-purple-500/40 rounded-[2rem] blur-3xl opacity-70" />

            {/* Dashboard Image Container - MÁS GRANDE */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-2 border-white/20 shadow-2xl">
              {/* Glass highlight */}
              <div className="absolute top-8 left-8 right-8 h-40 bg-gradient-to-b from-white/15 to-transparent rounded-t-[1.5rem]" />

              {/* Placeholder para la captura del dashboard */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl overflow-hidden border-2 border-orange-400/20 shadow-2xl">
                {/* Aquí irá tu captura real del dashboard */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 size={100} className="text-orange-400/40 mx-auto mb-6" />
                    <p className="text-gray-400 text-2xl font-bold mb-2">Dashboard Preview</p>
                    <p className="text-gray-500 text-lg">Reemplaza esto con tu captura real</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats - Resaltando más los porcentajes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: TrendingUp, value: '+43%', label: 'Aumento en conversión' },
              { icon: ShoppingCart, value: '2.8X', label: 'Más ticket promedio' },
              { icon: MessageCircle, value: '24/7', label: 'Atención continua' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-orange-400/50 transition-all">
                  {/* Glass highlight */}
                  <div className="absolute top-3 left-3 right-3 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem]" />

                  <div className="relative text-center">
                    {/* Icono más pequeño y sutil */}
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                        <stat.icon className="text-orange-400/60" size={24} />
                      </div>
                    </div>

                    {/* Porcentaje MUCHO más grande y destacado */}
                    <div className="text-7xl md:text-8xl font-black bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent mb-3 tracking-tight">
                      {stat.value}
                    </div>

                    <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

      {/* Features Showcase Section - Imágenes Alternadas */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Funcionalidades que <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">transforman</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubre cómo cada característica impulsa tus ventas
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 - Imagen a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Contenido izquierda */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-xl text-orange-400 px-6 py-3 rounded-full border border-orange-400/20">
                  <CheckCircle2 size={20} />
                  <span className="font-semibold">Asesoría Inteligente</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white">
                  Recomendaciones personalizadas en tiempo real
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  El asistente analiza el comportamiento del usuario y sugiere productos complementarios,
                  aumentando el valor del carrito hasta un <span className="text-orange-400 font-bold text-2xl">45%</span> más.
                </p>
                <ul className="space-y-4">
                  {['Cross-selling automático', 'Upselling basado en preferencias', 'Combos personalizados'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-orange-400" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-[2rem] blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle size={60} className="text-orange-400/40 mx-auto mb-3" />
                      <p className="text-gray-500">Feature Screenshot 1</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 2 - Imagen a la izquierda */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Imagen izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative md:order-1 order-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-500/20 rounded-[2rem] blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 size={60} className="text-orange-400/40 mx-auto mb-3" />
                      <p className="text-gray-500">Analytics Dashboard</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contenido derecha */}
              <div className="space-y-6 md:order-2 order-1">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl text-blue-400 px-6 py-3 rounded-full border border-blue-400/20">
                  <BarChart3 size={20} />
                  <span className="font-semibold">Analytics Avanzado</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white">
                  Insights que impulsan decisiones
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Métricas en tiempo real que te muestran qué funciona. Identifica patrones,
                  optimiza tu catálogo y aumenta conversiones en <span className="text-orange-400 font-bold text-2xl">32%</span>.
                </p>
                <ul className="space-y-4">
                  {['Productos más consultados', 'Objeciones frecuentes', 'Horarios de mayor conversión'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-blue-400" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Feature 3 - Imagen a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Contenido izquierda */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-xl text-purple-400 px-6 py-3 rounded-full border border-purple-400/20">
                  <Zap size={20} />
                  <span className="font-semibold">Negociación Dinámica</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white">
                  Descuentos inteligentes que cierran ventas
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  El sistema detecta cuando un cliente está por abandonar y ofrece incentivos personalizados,
                  recuperando hasta <span className="text-orange-400 font-bold text-2xl">68%</span> de carritos abandonados.
                </p>
                <ul className="space-y-4">
                  {['Ofertas automáticas personalizadas', 'Control de margen mínimo', 'A/B testing de descuentos'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-purple-400" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-orange-500/20 rounded-[2rem] blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <Target size={60} className="text-orange-400/40 mx-auto mb-3" />
                      <p className="text-gray-500">Smart Offers Interface</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
