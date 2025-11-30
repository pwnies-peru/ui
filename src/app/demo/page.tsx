'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import NegotiationWidget from '@/components/negocia/NegotiationWidget';
import { useToast } from '@/components/negocia/ToastManager';

export default function DemoPage() {
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { showToast } = useToast();

  // Contador de tiempo en página
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Detector de scroll (REGLA 2: Re-engagement)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 100) {
        setScrollCount(prev => prev + 1);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // REGLA 2: Mostrar toast de re-engagement después de 3 scrolls
  useEffect(() => {
    if (scrollCount === 3) {
      showToast('reEngagement');
    }
  }, [scrollCount, showToast]);

  // Simular detección de intento de compra
  const handleAddToCart = () => {
    console.log('🛒 Producto agregado al carrito');
    // REGLA 3: Mostrar toast de negociación disponible
    setTimeout(() => {
      showToast('negotiationAvailable');
    }, 2000);
  };

  // Simular exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        showToast('negotiationAvailable');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showToast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-gray-900/50 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white">NegocIA Demo</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gray-400 text-sm">
              Tiempo en página: <span className="text-orange-400 font-bold">{timeOnPage}s</span>
            </div>
            <div className="text-gray-400 text-sm">
              Scrolls: <span className="text-orange-400 font-bold">{scrollCount}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Product Page */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
            >
              <div className="text-center p-12">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-400 text-sm">Imagen del producto</p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/5 rounded-xl border border-white/10 hover:border-orange-400/50 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">(127 reseñas)</span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-3">
                Audífonos Premium Inalámbricos
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed">
                Experimenta sonido de calidad profesional con cancelación de ruido activa,
                batería de 30 horas y diseño ergonómico premium.
              </p>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-white">$120</span>
                <span className="text-2xl text-gray-500 line-through">$159</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                  -25%
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Precio normal. ¿Quieres negociar? 😉
              </p>
            </motion.div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="text-white font-medium mb-3 block">Color</label>
              <div className="flex gap-3">
                {[
                  { color: 'bg-black', name: 'Negro' },
                  { color: 'bg-white', name: 'Blanco' },
                  { color: 'bg-blue-500', name: 'Azul' },
                  { color: 'bg-red-500', name: 'Rojo' }
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 ${
                      i === 0 ? 'border-orange-400' : 'border-white/20'
                    } ${item.color} hover:scale-110 transition-transform`}
                    title={item.name}
                  />
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-3"
            >
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar al carrito
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl hover:bg-white/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-white font-bold text-lg">Características principales</h3>
              <ul className="space-y-2">
                {[
                  'Cancelación de ruido activa',
                  'Batería de 30 horas',
                  'Bluetooth 5.0',
                  'Micrófono integrado',
                  'Plegables y portátiles',
                  'Garantía de 2 años'
                ].map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Descripción</h2>
          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              Sumérgete en un mundo de sonido puro con nuestros audífonos premium.
              Diseñados para audiófilos exigentes, ofrecen una experiencia auditiva
              inigualable gracias a su tecnología de cancelación de ruido activa de última
              generación.
            </p>
            <p>
              Con una batería que dura hasta 30 horas con una sola carga, podrás disfrutar
              de tu música favorita durante días sin preocuparte por recargar. El diseño
              ergonómico garantiza comodidad incluso en sesiones de escucha prolongadas.
            </p>
            <p>
              Conectividad Bluetooth 5.0 para un emparejamiento rápido y estable con todos
              tus dispositivos. Incluye micrófono integrado de alta calidad para llamadas
              cristalinas.
            </p>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 bg-orange-500/10 border border-orange-400/30 rounded-2xl p-6"
        >
          <h3 className="text-orange-400 font-bold text-lg mb-3">💡 Instrucciones de la Demo</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Espera 7-12 segundos para ver el toast de presencia suave</li>
            <li>• Haz scroll 3 veces para activar el toast de re-engagement</li>
            <li>• Haz click en "Agregar al carrito" para ver el toast de negociación</li>
            <li>• Mueve el cursor al borde superior para simular exit intent</li>
            <li>• Haz click en el widget flotante para iniciar la negociación</li>
          </ul>
        </motion.div>
      </div>

      {/* NegocIA Widget */}
      <NegotiationWidget />
    </div>
  );
}
