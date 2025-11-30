
'use client';

import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, delay } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const toastMessages = [
  { greeting: 'Analizando...', message: 'Detecto alto interés. ¿Y si ajustamos el precio para que te lo lleves ya? 🤖' },
  { greeting: 'Oportunidad', message: 'Mis algoritmos dicen que podemos negociar. Tírame una oferta, no muerdo. 😉💸' },
  { greeting: 'Calculando...', message: 'Tengo margen para un descuento especial. ¿Hacemos trato ahora mismo? 🤝✨' },
];

// Productos mock de ropa y zapatos
const mockProducts = [
  { name: 'Blazer Oversize', price: '$89', image: '👔', color: 'from-stone-200 to-stone-300' },
  { name: 'Sneakers Classic', price: '$120', image: '👟', color: 'from-slate-200 to-slate-300' },
  { name: 'Vestido Midi', price: '$65', image: '👗', color: 'from-rose-100 to-rose-200' },
  { name: 'Boots Chelsea', price: '$145', image: '🥾', color: 'from-amber-100 to-amber-200' },
  { name: 'Jeans Slim', price: '$55', image: '👖', color: 'from-blue-100 to-blue-200' },
  { name: 'Tacones Elegantes', price: '$95', image: '👠', color: 'from-pink-100 to-pink-200' },
];

// Componente para efecto de tipeo
function TypewriterText({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setStarted(false);
  }, [text]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay, text]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <span>
      {displayedText}
      {started && currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-4 bg-[#B85C5C] ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
}

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [messageKey, setMessageKey] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  // Función para iniciar el ciclo de mensajes
  const startMessageCycle = () => {
    setIsMinimized(false);
    setCurrentMessageIndex(0);
    setMessageKey(prev => prev + 1);
    setShowSplash(true);
    setTimeout(() => setShowToast(true), 400);
  };

  useEffect(() => {
    // Mostrar primer toast después de 1 segundo
    const initialTimer = setTimeout(() => {
      setShowSplash(true);
      setTimeout(() => setShowToast(true), 400);
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (isMinimized) return; // No ciclar si está minimizado

    // Ciclo de mensajes cada 8 segundos
    const interval = setInterval(() => {
      const nextIndex = (currentMessageIndex + 1) % toastMessages.length;

      // Si completamos un ciclo, minimizar
      if (nextIndex === 0) {
        setShowToast(false);
        setTimeout(() => {
          setIsMinimized(true);
          setCycleCount(prev => prev + 1);
        }, 300);
        return;
      }

      // Siguiente mensaje
      setShowToast(false);
      setTimeout(() => {
        setCurrentMessageIndex(nextIndex);
        setMessageKey(prev => prev + 1);
        setTimeout(() => setShowToast(true), 200);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentMessageIndex, isMinimized]);

  const currentToast = toastMessages[currentMessageIndex];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Top Black Bar - Anuncio */}
      <div className="bg-[#1A1A1A] text-white py-3 px-6 text-center">
        <p className="text-sm md:text-base">
          🛒 <span className="font-medium">El primer vendedor digital latino que regatea por ti.</span> Transforma tu e-commerce →
        </p>
      </div>

      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo - Serif */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl md:text-4xl font-playfair font-bold text-black">
              negocIA<span className="text-[#B85C5C]">!</span>
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold text-black mb-6 leading-tight"
            >
              Tu vendedor digital que{' '}
              <span className="font-italiana text-[#B85C5C] italic">
                regatea y cierra ventas
              </span>{' '}
              24/7
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 font-inter leading-relaxed"
            >
              Acompaña, asesora y negocia con tus clientes en tiempo real. Con el estilo cercano que solo un latino entiende.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Link
                href="/login"
                className="bg-[#E8DD6C] text-black px-8 md:px-10 py-4 rounded-full font-inter font-semibold text-base hover:bg-[#D4C854] transition-all inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg min-w-[200px] flex-1"
              >
                Comenzar gratis
                <div className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center">
                  <ArrowRight size={18} />
                </div>
              </Link>
              <Link
                href="/login"
                className="text-black border-2 border-gray-300 px-8 md:px-10 py-4 rounded-full font-inter font-semibold text-base hover:border-gray-400 transition-all inline-flex items-center justify-center min-w-[200px] flex-1"
              >
                Ver demo
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Toast Demo Container */}
          <div className="flex-1 w-full max-w-xl lg:max-w-2xl relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 md:p-8 min-h-[400px] md:min-h-[520px] overflow-hidden border border-gray-200 shadow-xl"
            >
              {/* Splash Animation Background - Vibrante y sutil */}
              <AnimatePresence>
                {showSplash && (
                  <>
                    {/* Círculo principal expandiéndose */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{ scale: 6, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                      onAnimationComplete={() => setShowSplash(false)}
                      className="absolute bottom-16 right-16 w-20 h-20 rounded-full z-0"
                      style={{
                        background: 'radial-gradient(circle, rgba(232,221,108,0.5) 0%, rgba(184,92,92,0.3) 50%, transparent 70%)'
                      }}
                    />
                    {/* Ondas secundarias */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0.4 }}
                      animate={{ scale: 5, opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                      className="absolute bottom-16 right-16 w-16 h-16 rounded-full border-2 border-[#E8DD6C]/40 z-0"
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0.3 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="absolute bottom-16 right-16 w-12 h-12 rounded-full border border-[#B85C5C]/30 z-0"
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Decorative Elements - Browser dots */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Fake store header */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 mb-4 flex items-center justify-between relative z-10">
                <span className="font-inter text-xs text-gray-500 uppercase tracking-wider">Mi Tienda Fashion</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs">🔍</span>
                  <span className="text-gray-400 text-xs">🛒</span>
                </div>
              </div>

              {/* Mock Product Cards - Ropa y Zapatos con BLUR */}
              <div className="grid grid-cols-3 gap-3 mb-20 relative">
                {/* Blur overlay */}
                <div className="absolute inset-0 backdrop-blur-[2px] z-[1] pointer-events-none rounded-xl" />

                {mockProducts.map((product, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/90 rounded-xl p-2.5 shadow-sm cursor-pointer relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className={`w-full aspect-square bg-gradient-to-br ${product.color} rounded-lg mb-2 flex items-center justify-center text-2xl`}>
                      {product.image}
                    </div>
                    <p className="text-[10px] font-inter text-gray-700 truncate">{product.name}</p>
                    <p className="text-xs font-inter font-semibold text-gray-900">{product.price}</p>
                  </motion.div>
                ))}
              </div>

              {/* Toast Notification - Aligned to RIGHT with 3/4 width */}
              <AnimatePresence mode="wait">
                {showToast && !isMinimized && (
                  <motion.div
                    key={messageKey}
                    initial={{ opacity: 0, x: 50, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28
                    }}
                    className="absolute bottom-6 right-6 left-auto w-[75%] z-10"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex items-start gap-4 relative overflow-hidden">
                      {/* Fleeting Gradient Animation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: '100%', y: '100%' }}
                        animate={{ opacity: [0, 0.5, 0], scale: 2, x: '-20%', y: '-20%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-gradient-to-tl from-[#B85C5C]/20 via-[#E8DD6C]/20 to-transparent pointer-events-none z-0"
                      />

                      {/* Logo Avatar - mr.jpeg */}
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-white z-10 relative">
                        <Image
                          src="/images/logo/mr.jpeg"
                          alt="NegocIA Avatar"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>

                      {/* Content - Progressive typing */}
                      <div className="flex-1 min-w-0 z-10 relative">
                        {/* Greeting with typing effect */}
                        <motion.p
                          className="font-playfair font-bold text-[#B85C5C] text-base mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <TypewriterText
                            key={`greeting-${messageKey}`}
                            text={currentToast.greeting}
                            delay={200}
                            speed={60}
                          />
                        </motion.p>

                        {/* Message with cascading typing effect */}
                        <p className="text-gray-700 text-sm font-inter leading-relaxed">
                          <TypewriterText
                            key={`message-${messageKey}`}
                            text={currentToast.message}
                            delay={600}
                            speed={25}
                          />
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FAB Minimizado - Floating Action Button */}
              <AnimatePresence>
                {isMinimized && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                    onClick={startMessageCycle}
                    className="absolute bottom-6 right-6 z-10 group"
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B85C5C] to-[#8B4545] flex items-center justify-center shadow-xl cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          '0 10px 30px -10px rgba(184, 92, 92, 0.4)',
                          '0 10px 40px -10px rgba(184, 92, 92, 0.6)',
                          '0 10px 30px -10px rgba(184, 92, 92, 0.4)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <span className="font-playfair font-bold text-white text-2xl">N</span>
                    </motion.div>

                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#B85C5C]"
                      animate={{
                        scale: [1, 1.4, 1.4],
                        opacity: [0.6, 0, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />

                    {/* Tooltip on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg whitespace-nowrap pointer-events-none"
                    >
                      <span className="text-sm font-inter text-gray-700">¿Necesitas ayuda?</span>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
                    </motion.div>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div >
          </div >
        </div >
      </section >

      {/* Features Section */}
      < section id="features" className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24" >
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              icon: '🧠',
              title: 'Detecta el momento exacto',
              desc: 'Analiza comportamiento y aparece cuando el cliente duda o está por abandonar.'
            },
            {
              icon: '⚡',
              title: 'Negocia sin perder margen',
              desc: 'Ofrece descuentos y bundles dinámicos respetando tu rentabilidad.'
            },
            {
              icon: '💬',
              title: 'Conversación natural',
              desc: 'Habla como un vendedor de confianza, cercano y cálido. Estilo latino.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-playfair font-bold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section >

      {/* How it Works */}
      < section id="how-it-works" className="bg-white py-16 md:py-24" >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black text-center mb-12">
            Así funciona
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Detecta', desc: 'Identifica dudas y abandono' },
              { step: '02', title: 'Conversa', desc: 'Ofrece ayuda personalizada' },
              { step: '03', title: 'Negocia', desc: 'Propone ofertas dinámicas' },
              { step: '04', title: 'Cierra', desc: 'Guía hasta el checkout' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-playfair font-bold text-[#E8DD6C] mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-playfair font-bold text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-inter">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Stats */}
      < section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24" >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: '+43%', label: 'Conversión asistida' },
            { value: '24/7', label: 'Siempre disponible' },
            { value: '1 línea', label: 'De código para integrar' },
            { value: '100%', label: 'Estilo latino' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-playfair font-black text-[#B85C5C] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* Integration CTA */}
      < section className="bg-white py-16 md:py-24" >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-black mb-6">
            Una línea de código y listo
          </h2>

          <div className="bg-gray-900 rounded-2xl p-5 font-mono text-sm text-green-400 mb-8 text-left overflow-x-auto">
            <span className="text-pink-400">{'<script'}</span> <span className="text-yellow-300">src</span>=<span className="text-green-300">"https://cdn.negocia.ai/widget.js"</span><span className="text-pink-400">{'/>'}</span>
          </div>

          <p className="text-gray-600 font-inter">
            Dashboard incluido con métricas de conversión, carritos recuperados e insights de compra.
          </p>
        </div>
      </section >

      {/* CTA Final */}
      < section className="bg-[#F5F5F0] py-16 md:py-24" >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-black mb-4">
            Vender online nunca fue{' '}
            <span className="font-italiana italic text-[#B85C5C]">tan humano</span>
          </h2>
          <p className="text-gray-600 font-inter mb-8">
            Recupera la calidez que el e-commerce perdió.
          </p>

          <Link
            href="/dashboard"
            className="bg-[#E8DD6C] text-black px-10 py-4 rounded-full font-inter font-semibold hover:bg-[#D4C854] transition-all inline-flex items-center gap-3 shadow-md hover:shadow-lg"
          >
            Ver Dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-white border-t border-gray-200 py-12" >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl md:text-3xl font-playfair font-bold text-black">
              negocIA<span className="text-[#B85C5C]">!</span>
            </span>
            <p className="text-gray-600 text-sm font-inter">
              © 2025 negocIA. Humanizamos el e-commerce latino. 🇲🇽🇨🇴🇦🇷🇨🇱🇵🇪
            </p>
          </div>
        </div>
      </footer >
    </div >
  );
}
