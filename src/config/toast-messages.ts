/**
 * NegocIA - Toast Messages Configuration
 * Mensajes de micro-interacción humanos y cercanos para el agente de regateo
 */

export const TOAST_MESSAGES = {
  // 1) Toast inicial — presencia suave (NO invasivo)
  initial: {
    messages: [
      "Estoy por aquí si quieres ayuda 👀",
      "¿Buscas la mejor oferta? Te puedo echar una mano 😉",
      "Si quieres comparar o negociar, avísame ✨",
      "¿Dudas del precio? Podemos conversar."
    ],
    duration: 3500, // 3-4 segundos
    position: 'bottom-right',
    style: 'subtle'
  },

  // 2) Toast de re-engagement — cuando el usuario duda
  reEngagement: {
    messages: [
      "Si quieres, veo si puedo mejorar ese precio 👇",
      "Te ayudo a elegir lo que más te conviene 💬",
      "Puedo negociar por ti si lo necesitas 🤝"
    ],
    duration: 4000,
    position: 'bottom-right',
    style: 'subtle',
    maxPerSession: 1 // Solo una vez por sesión
  },

  // 3) Toast de negociación disponible
  negotiationAvailable: {
    messages: [
      "Puedo desbloquear un descuento si realmente te interesa 👀",
      "¿Quieres ver qué oferta puedo conseguirte? 😏",
      "Quizás pueda conseguirte algo mejor, ¿lo reviso?"
    ],
    duration: 4500,
    position: 'bottom-center',
    style: 'highlighted',
    trigger: 'cart-intent'
  },

  // 4) Toast de micro-oferta
  microOffer: {
    messages: [
      "Puedo mejorar el precio en un poquito 👇",
      "Puedo darte un beneficio especial por tiempo limitado ⏳",
      "Tengo permiso para ofrecerte algo mejor 😉"
    ],
    duration: 5000,
    position: 'bottom-center',
    style: 'success',
    trigger: 'after-analysis'
  },

  // 5) Toast de valor añadido (cuando no hay descuento)
  addedValue: {
    messages: [
      "No puedo bajar el precio, pero sí puedo darte una recomendación honesta 👍",
      "Este producto se agota rápido, te conviene decidir hoy.",
      "Lo mejor que puedo hacer es ayudarte a elegir bien."
    ],
    duration: 4000,
    position: 'bottom-right',
    style: 'info'
  },

  // 6) Toast de urgencia REAL (no manipulativa)
  realUrgency: {
    messages: [
      "Quedan pocas unidades, te lo aviso por si te sirve 🙌",
      "Este modelo se mueve rápido hoy 👀",
      "Varias personas lo están viendo ahora mismo."
    ],
    duration: 4000,
    position: 'top-center',
    style: 'warning',
    requiresTruth: true // Solo si es verdad
  },

  // 7) Toast de cierre
  closing: {
    messages: [
      "¿Quieres que te acompañe al cierre? 😉",
      "¡Listo! Lo dejo todo preparado para tu compra ✨",
      "Cuando quieras, te guío al checkout."
    ],
    duration: 3500,
    position: 'bottom-center',
    style: 'success'
  },

  // 8) Toast de despedida
  farewell: {
    messages: [
      "Si vuelves más tarde, sigo por aquí ✨",
      "Cuando quieras negociar o comparar, me encuentras aquí 😉"
    ],
    duration: 3000,
    position: 'bottom-right',
    style: 'subtle'
  }
} as const;

// Mensajes del agente durante la negociación
export const NEGOTIATION_MESSAGES = {
  greeting: [
    "👋 Oe, si te gusta esto... yo te consigo un mejor deal 😉",
    "¿Te interesa? Puedo negociar por ti 😎"
  ],

  askPrice: [
    "Dime, ¿cuánto estás dispuesto a pagar? A ver si lo negocio por ti 😎"
  ],

  thinking: [
    "Déjame ver qué puedo hacer...",
    "Un momento, revisando...",
    "Vamos a ver..."
  ],

  counterOffer: (userPrice: number, counterPrice: number) => [
    `${userPrice} está difícil, causa 😅 pero déjame ver qué puedo hacer...`,
    `Mira... puedo bajarte a ${counterPrice} si lo compras ahorita. ¿Lo cerramos?`
  ],

  deal: (finalPrice: number, code: string) => [
    `Listo 😎 usa el código ${code} y llévatelo al toque.`
  ],

  noMargin: [
    "Uff, con ese precio me dejas sin margen 😅",
    "No puedo llegar tan abajo, pero te propongo algo..."
  ],

  outOfStock: [
    "Este producto se está agotando rápido 👀",
    "Solo quedan pocas unidades disponibles"
  ]
} as const;

// Tipos para TypeScript
export type ToastCategory = keyof typeof TOAST_MESSAGES;
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ToastStyle = 'subtle' | 'info' | 'success' | 'warning' | 'highlighted';
