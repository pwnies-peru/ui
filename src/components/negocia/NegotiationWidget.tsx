'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { NEGOTIATION_MESSAGES } from '@/config/toast-messages';
import { useToast } from './ToastManager';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: number;
}

export default function NegotiationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [negotiationState, setNegotiationState] = useState<'idle' | 'asking-price' | 'thinking' | 'counter-offer' | 'deal'>('idle');
  const { showToast } = useToast();

  // Simular detección de intención (REGLA 1: Presencia suave)
  useEffect(() => {
    const timer = setTimeout(() => {
      showToast('initial');
    }, 8000); // 8 segundos después de cargar

    return () => clearTimeout(timer);
  }, [showToast]);

  const addMessage = (sender: 'user' | 'agent', text: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender,
      text,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOpenWidget = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      // Mensaje de bienvenida
      setTimeout(() => {
        const greeting = NEGOTIATION_MESSAGES.greeting[Math.floor(Math.random() * NEGOTIATION_MESSAGES.greeting.length)];
        addMessage('agent', greeting);
        setTimeout(() => {
          addMessage('agent', NEGOTIATION_MESSAGES.askPrice[0]);
          setNegotiationState('asking-price');
        }, 1500);
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    addMessage('user', userInput);
    const userPrice = parseInt(userInput.match(/\d+/)?.[0] || '0');
    setUserInput('');

    if (negotiationState === 'asking-price' && userPrice > 0) {
      // Simular pensamiento
      setNegotiationState('thinking');
      setTimeout(() => {
        addMessage('agent', NEGOTIATION_MESSAGES.thinking[0]);
        setTimeout(() => {
          // Contraoferta
          const counterPrice = Math.floor(userPrice * 1.1); // 10% más que lo que pidió
          const counterMessages = NEGOTIATION_MESSAGES.counterOffer(userPrice, counterPrice);
          addMessage('agent', counterMessages[0]);
          setTimeout(() => {
            addMessage('agent', counterMessages[1]);
            setNegotiationState('counter-offer');
          }, 2000);
        }, 1500);
      }, 500);
    } else if (negotiationState === 'counter-offer') {
      // Si acepta
      if (userInput.toLowerCase().includes('sí') || userInput.toLowerCase().includes('si') || userInput.toLowerCase().includes('ok') || userInput.toLowerCase().includes('dale')) {
        setTimeout(() => {
          const code = `NEGOCIA${Math.floor(Math.random() * 100)}`;
          const dealMessage = NEGOTIATION_MESSAGES.deal(98, code)[0];
          addMessage('agent', dealMessage);
          setNegotiationState('deal');

          // Mostrar toast de cierre
          setTimeout(() => {
            showToast('closing');
          }, 1000);
        }, 500);
      } else {
        addMessage('agent', 'Entiendo, ¿en qué precio estarías pensando entonces? 🤔');
        setNegotiationState('asking-price');
      }
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOpenWidget}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-2xl shadow-orange-500/50 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel de negociación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">N</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">NegocIA</h3>
                  <p className="text-white/80 text-xs">Te ayudo a conseguir el mejor precio</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-orange-500 text-white rounded-br-sm'
                        : 'bg-white/10 text-white rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={negotiationState === 'asking-price' ? 'Ej: 90' : 'Escribe tu respuesta...'}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim()}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Enviar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
