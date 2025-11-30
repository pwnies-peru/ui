/**
 * NegocIA - Interaction Rules Configuration
 * Reglas para mostrar toasts y gestionar interacciones del usuario
 */

export const INTERACTION_RULES = {
  // REGLA 1 — Presencia suave inicial
  initialPresence: {
    enabled: true,
    trigger: {
      minTimeOnPage: 7000, // 7-12 segundos
      maxTimeOnPage: 12000,
      conditions: [
        'user-has-not-interacted-with-agent',
        'no-toast-shown-yet'
      ]
    },
    action: 'show-initial-toast',
    notes: 'Nunca mostrar un toast inmediatamente al entrar'
  },

  // REGLA 2 — Re-engagement basado en duda
  reEngagement: {
    enabled: true,
    trigger: {
      scrollCount: 3, // 3 o más scrolls arriba/abajo
      or: [
        'variant-change',
        'repeat-visit-within-1min'
      ]
    },
    action: 'show-re-engagement-toast',
    maxPerSession: 1,
    notes: 'Solo UNA vez por sesión'
  },

  // REGLA 3 — Intento de compra detectado
  purchaseIntent: {
    enabled: true,
    trigger: {
      or: [
        'added-to-cart-but-no-checkout',
        'multiple-shipping-section-visits',
        'exit-intent-detected'
      ]
    },
    action: 'show-negotiation-available-toast',
    priority: 'high'
  },

  // REGLA 4 — Motor de regateo
  negotiationEngine: {
    enabled: true,
    conditions: {
      minMargin: 10, // Margen mínimo en porcentaje
      inventoryStatus: ['high', 'normal'], // No activar con inventario bajo
      userIntent: 'real' // Debe mostrar intención real
    },
    fallback: {
      noMargin: 'show-added-value-toast',
      lowInventory: 'show-real-urgency-toast'
    },
    notes: 'Si no puede bajar precio → lanzar toasts de valor añadido'
  },

  // REGLA 5 — Evitar invasión
  antiInvasion: {
    enabled: true,
    constraints: {
      minTimeBetweenToasts: 30000, // 30-45 segundos entre toasts
      maxTimeBetweenToasts: 45000,
      noRepeatPattern: true, // No repetir el mismo patrón de toast
      autoDisappear: 3000, // 3 segundos de duración
      noBlockImportantUI: true // No cubrir botones importantes
    }
  },

  // REGLA 6 — Humanización
  humanization: {
    enabled: true,
    tone: {
      style: 'casual-latino',
      characteristics: [
        'cercano',
        'cero-robots',
        'cálido',
        'sin-presión',
        'respetuoso'
      ],
      avoid: [
        'compra-ya',
        'última-oportunidad-falsa',
        'manipulación'
      ]
    }
  },

  // REGLA 7 — Despedida no obligatoria
  farewell: {
    enabled: true,
    trigger: {
      inactivityTime: 15000, // 15-20 segundos de inactividad
      maxInactivityTime: 20000,
      conditions: ['had-previous-interaction']
    },
    action: 'show-farewell-toast'
  }
} as const;

// Comportamiento del usuario (User Behavior Detection)
export const USER_BEHAVIOR = {
  // Señales de intención de compra
  purchaseIntent: {
    signals: {
      timeOnProduct: 30000, // Más de 30s viendo el producto
      scrollDepth: 70, // Scroll >70% de la página
      imageZoom: true, // Hizo zoom en imágenes
      variantSelection: true, // Cambió variante/color/talla
      priceCheck: 2, // Revisó precio 2+ veces
      addToCartHover: true // Hover sobre botón de compra
    },
    score: {
      high: 4, // 4+ señales = alta intención
      medium: 2, // 2-3 señales = media intención
      low: 1 // 1 señal = baja intención
    }
  },

  // Señales de duda
  doubtSignals: {
    signals: {
      backAndForth: true, // Va y vuelve entre productos
      tabSwitch: true, // Cambia de tab (comparando precios)
      longPause: 10000, // Pausa >10s sin acción
      exitIntent: true, // Cursor hacia cerrar/atrás
      cartAbandon: true // Agregó al carrito pero no procede
    }
  },

  // Señales de abandono
  abandonmentSignals: {
    signals: {
      exitIntent: true,
      inactivity: 20000, // >20s sin actividad
      tabBlur: true, // Cambió a otra pestaña
      scrollToTop: true // Scroll rápido al inicio
    },
    action: 'trigger-last-chance-engagement'
  }
} as const;

// Configuración del motor de negociación
export const NEGOTIATION_CONFIG = {
  // Rangos de descuento permitidos
  discountRanges: {
    aggressive: { min: 15, max: 30 }, // 15-30% descuento
    moderate: { min: 5, max: 15 },   // 5-15% descuento
    conservative: { min: 2, max: 8 }  // 2-8% descuento
  },

  // Factores que determinan el rango
  factors: {
    margin: {
      high: 'aggressive',      // Margen >40%
      medium: 'moderate',      // Margen 20-40%
      low: 'conservative'      // Margen <20%
    },
    inventory: {
      excess: 'aggressive',    // Inventario excesivo
      normal: 'moderate',      // Inventario normal
      low: 'conservative'      // Inventario bajo
    },
    userBehavior: {
      highIntent: 'moderate',  // Alta intención = oferta moderada
      mediumIntent: 'conservative', // Media intención = oferta conservadora
      lowIntent: 'none'        // Baja intención = no ofrecer
    }
  },

  // Estrategia de contraoferta
  counterOfferStrategy: {
    // Si el usuario pide un precio muy bajo
    tooLow: {
      action: 'counter-with-minimum-viable',
      message: 'noMargin'
    },
    // Si el usuario pide un precio razonable
    reasonable: {
      action: 'accept-or-counter-slightly-higher',
      message: 'counterOffer'
    },
    // Si el usuario pide un precio cercano al precio actual
    tooHigh: {
      action: 'offer-small-discount',
      message: 'microOffer'
    }
  },

  // Generación de códigos de descuento
  discountCodes: {
    prefix: 'NEGOCIA',
    format: 'NEGOCIA{RANDOM}',
    expiration: 3600000, // 1 hora de validez
    oneTimeUse: true
  }
} as const;

// Journey del usuario ideal para la demo
export const DEMO_JOURNEY = {
  steps: [
    {
      step: 1,
      name: 'Escenario inicial',
      duration: 10, // segundos
      description: 'Usuario viendo un producto (zapatillas, audífonos, mochila)',
      agentAction: 'show-subtle-banner',
      message: '👋 Oe, si te gusta esto… yo te consigo un mejor deal 😉'
    },
    {
      step: 2,
      name: 'Inicio del regateo',
      duration: 25,
      description: 'Usuario hace hover/click en el banner',
      agentAction: 'open-negotiation-panel',
      flow: [
        { agent: 'Dime, ¿cuánto estás dispuesto a pagar? A ver si lo negocio por ti 😎' },
        { user: 'Quisiera pagar 90.' },
        { agent: '90 está difícil, causa 😅 pero déjame ver qué puedo hacer...' },
        { agent: 'Ya, mira… puedo bajarte a 98 si lo compras ahorita. ¿Lo cerramos?' }
      ]
    },
    {
      step: 3,
      name: 'Cierre de venta',
      duration: 12,
      description: 'Usuario acepta la oferta',
      agentAction: 'generate-discount-code',
      flow: [
        { agent: 'Listo 😎 usa el código NEGOCIA98 y llévatelo al toque.' },
        { action: 'redirect-to-checkout-with-discount' }
      ]
    },
    {
      step: 4,
      name: 'Vista del Dashboard',
      duration: 45,
      description: 'Cambio a interfaz del proveedor',
      sections: [
        {
          name: 'Overview',
          metrics: [
            'Conversaciones iniciadas',
            'Conversaciones que llegaron a regateo',
            'Órdenes cerradas',
            '% uplift de conversión',
            '% uplift AOV',
            'Valor total recuperado',
            'Ahorro por cliente vs precio original'
          ]
        },
        {
          name: 'Heatmap de intención',
          shows: [
            'Qué productos reciben más regateos',
            'Qué precios contra-ofertan más los usuarios',
            'Qué perfiles regatean más'
          ]
        },
        {
          name: 'Panel de personalización',
          features: [
            'Nivel de agresividad del regateo',
            'Rango de descuentos permitidos',
            'Tonalidad del agente',
            'Palabras prohibidas/aprobadas',
            'Horarios de activación'
          ]
        }
      ]
    },
    {
      step: 5,
      name: 'Final de la demo',
      duration: 10,
      description: 'Vuelta rápida a la tienda',
      message: 'Así se vende online… pero humano 💛 — NegocIA',
      slogan: 'Cerrar ventas online nunca fue tan humano.'
    }
  ],
  totalDuration: 150, // ~2.5 minutos
  purpose: 'Mostrar: dolor → magia → conversión → data → escalabilidad'
} as const;

// Tipos para TypeScript
export type InteractionRule = keyof typeof INTERACTION_RULES;
export type UserSignal = keyof typeof USER_BEHAVIOR;
export type DiscountRange = keyof typeof NEGOTIATION_CONFIG.discountRanges;
