'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ToastPosition, ToastStyle } from '@/config/toast-messages';

export interface ToastProps {
  id: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
  style?: ToastStyle;
  onClose?: (id: string) => void;
}

const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'top-6 left-6',
  'top-center': 'top-6 left-1/2 -translate-x-1/2',
  'top-right': 'top-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-6 right-6'
};

const styleClasses: Record<ToastStyle, string> = {
  subtle: 'bg-gray-900/80 border-gray-700/50 text-gray-200',
  info: 'bg-blue-900/80 border-blue-700/50 text-blue-100',
  success: 'bg-green-900/80 border-green-700/50 text-green-100',
  warning: 'bg-orange-900/80 border-orange-700/50 text-orange-100',
  highlighted: 'bg-gradient-to-r from-orange-500/90 to-orange-600/90 border-orange-400/50 text-white shadow-xl shadow-orange-500/30'
};

export default function Toast({
  id,
  message,
  duration = 3000,
  position = 'bottom-right',
  style = 'subtle',
  onClose
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position.includes('bottom') ? 20 : -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: position.includes('bottom') ? 20 : -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`
            fixed z-50 px-5 py-3.5 rounded-xl backdrop-blur-xl border
            ${positionClasses[position]}
            ${styleClasses[style]}
            max-w-md shadow-2xl
            cursor-pointer hover:scale-105 transition-transform
          `}
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(id), 300);
          }}
        >
          <p className="text-sm font-medium leading-relaxed">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
