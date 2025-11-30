'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast from './Toast';
import { TOAST_MESSAGES, type ToastCategory } from '@/config/toast-messages';

interface ToastItem {
  id: string;
  message: string;
  duration?: number;
  position?: any;
  style?: any;
}

interface ToastContextType {
  showToast: (category: ToastCategory, messageIndex?: number) => void;
  showCustomToast: (message: string, options?: Partial<ToastItem>) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [lastToastTime, setLastToastTime] = useState<number>(0);
  const [sessionToastCounts, setSessionToastCounts] = useState<Record<string, number>>({});

  const showToast = useCallback((category: ToastCategory, messageIndex?: number) => {
    const now = Date.now();
    const config = TOAST_MESSAGES[category];

    // REGLA 5: Evitar invasión - Mínimo 30s entre toasts
    if (now - lastToastTime < 30000) {
      console.log('⏱️ Toast bloqueado: muy pronto desde el último toast');
      return;
    }

    // REGLA 2: Re-engagement - Máximo 1 por sesión
    if (category === 'reEngagement' && sessionToastCounts[category] >= 1) {
      console.log('🚫 Toast bloqueado: máximo de re-engagement alcanzado');
      return;
    }

    // Seleccionar mensaje aleatorio si no se especifica índice
    let message: string;
    if ('messages' in config) {
      const messages = config.messages;
      const index = messageIndex ?? Math.floor(Math.random() * messages.length);
      message = messages[index];
    } else {
      return; // No hay mensajes para esta categoría
    }

    const id = `toast-${now}-${Math.random()}`;
    const newToast: ToastItem = {
      id,
      message,
      duration: config.duration,
      position: config.position,
      style: config.style
    };

    setToasts(prev => [...prev, newToast]);
    setLastToastTime(now);
    setSessionToastCounts(prev => ({
      ...prev,
      [category]: (prev[category] || 0) + 1
    }));

    console.log(`✨ Toast mostrado: ${category} - "${message}"`);
  }, [lastToastTime, sessionToastCounts]);

  const showCustomToast = useCallback((message: string, options?: Partial<ToastItem>) => {
    const now = Date.now();

    // REGLA 5: Evitar invasión
    if (now - lastToastTime < 30000) {
      console.log('⏱️ Toast bloqueado: muy pronto desde el último toast');
      return;
    }

    const id = `toast-${now}-${Math.random()}`;
    const newToast: ToastItem = {
      id,
      message,
      duration: 3000,
      position: 'bottom-right',
      style: 'subtle',
      ...options
    };

    setToasts(prev => [...prev, newToast]);
    setLastToastTime(now);

    console.log(`✨ Toast custom mostrado: "${message}"`);
  }, [lastToastTime]);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const handleCloseToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, showCustomToast, clearToasts }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          duration={toast.duration}
          position={toast.position}
          style={toast.style}
          onClose={handleCloseToast}
        />
      ))}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast debe ser usado dentro de ToastProvider');
  }
  return context;
}
