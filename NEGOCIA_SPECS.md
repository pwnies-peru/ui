# NegocIA - Especificaciones del Proyecto

## 🎯 Concepto Principal

**NegocIA** es un agente de regateo inteligente que conversa, negocia y cierra ventas como un vendedor real. Convierte dudas en decisiones de compra, 24/7.

### Propuesta de Valor

- **El regateo humano que cierra ventas online**
- No es un chatbot genérico, es un agente que detecta intención y negocia
- Tono cercano, cálido y latino (cero robots)
- Data como activo: cada conversación genera insights únicos

---

## 📋 Sistema de Toasts

### Categorías de Toasts

#### 1. Toast Inicial (Presencia Suave)
- **Trigger**: Usuario pasa 7-12 segundos viendo el producto sin interactuar
- **Mensajes**:
  - "Estoy por aquí si quieres ayuda 👀"
  - "¿Buscas la mejor oferta? Te puedo echar una mano 😉"
  - "Si quieres comparar o negociar, avísame ✨"
- **Duración**: 3-4 segundos
- **Posición**: Bottom-right
- **Estilo**: Semitransparente, no invasivo

#### 2. Toast de Re-engagement (Cuando el Usuario Duda)
- **Trigger**: 3+ scrolls arriba/abajo, cambio de variante, o visita repetida
- **Mensajes**:
  - "Si quieres, veo si puedo mejorar ese precio 👇"
  - "Te ayudo a elegir lo que más te conviene 💬"
  - "Puedo negociar por ti si lo necesitas 🤝"
- **Frecuencia**: Solo UNA vez por sesión

#### 3. Toast de Negociación Disponible
- **Trigger**: Usuario agrega al carrito pero no procede, o revisa envío varias veces
- **Mensajes**:
  - "Puedo desbloquear un descuento si realmente te interesa 👀"
  - "¿Quieres ver qué oferta puedo conseguirte? 😏"
- **Objetivo**: Invitar a abrir la ventana de negociación

#### 4. Toast de Micro-oferta
- **Trigger**: Después de analizar margen, inventario y reglas del negocio
- **Mensajes**:
  - "Puedo mejorar el precio en un poquito 👇"
  - "Puedo darte un beneficio especial por tiempo limitado ⏳"
  - "Tengo permiso para ofrecerte algo mejor 😉"

#### 5. Toast de Valor Añadido
- **Trigger**: Cuando no es viable aplicar descuento por margen
- **Mensajes**:
  - "No puedo bajar el precio, pero sí puedo darte una recomendación honesta 👍"
  - "Este producto se agota rápido, te conviene decidir hoy."

#### 6. Toast de Urgencia Real (No manipulativa)
- **Trigger**: Basado en inventario real o patrones de compra verificables
- **Mensajes**:
  - "Quedan pocas unidades, te lo aviso por si te sirve 🙌"
  - "Varias personas lo están viendo ahora mismo."
- **IMPORTANTE**: Debe ser verdad, evitar dark patterns

#### 7. Toast de Cierre
- **Trigger**: Usuario listo para pagar
- **Mensajes**:
  - "¿Quieres que te acompañe al cierre? 😉"
  - "¡Listo! Lo dejo todo preparado para tu compra ✨"

#### 8. Toast de Despedida
- **Trigger**: Usuario inactivo 15-20s y hubo interacción previa
- **Mensajes**:
  - "Si vuelves más tarde, sigo por aquí ✨"
  - "Cuando quieras negociar o comparar, me encuentras aquí 😉"

---

## 🎮 Reglas de Interacción

### Regla 1: Presencia Suave Inicial
- ✅ Mostrar toast solo después de 7-12s
- ❌ Nunca mostrar inmediatamente al entrar
- ✅ Solo si el usuario NO ha interactuado con el agente

### Regla 2: Re-engagement Basado en Duda
- ✅ Detectar: 3+ scrolls, cambio de variante, visita repetida
- ✅ Máximo 1 toast por sesión
- ❌ No ser insistente

### Regla 3: Intento de Compra Detectado
- ✅ Activar si: agregó al carrito sin checkout, revisa envío varias veces, intento de salir
- ✅ Mostrar toast de negociación disponible

### Regla 4: Motor de Regateo
- ✅ Solo ofrecer descuentos si:
  - Margen ≥ X%
  - Inventario alto o normal
  - Cliente muestra intención real
- ✅ Si no puede bajar precio → toast de valor añadido

### Regla 5: Evitar Invasión
- ✅ Máximo 1 toast cada 30-45 segundos
- ✅ No repetir el mismo patrón
- ✅ Desaparece automáticamente en 3s
- ❌ No cubrir botones importantes

### Regla 6: Humanización
- ✅ Tono: cercano, cálido, latino
- ✅ Cero robots, sin presión
- ❌ Evitar frases manipulativas tipo "compra ya"

### Regla 7: Despedida No Obligatoria
- ✅ Mostrar solo si: inactividad 15-20s Y hubo interacción previa
- ✅ No ser invasivo

---

## 🚀 Journey Ideal para Demo (2-3 minutos)

### Objetivo
Mostrar: **dolor → magia → conversión → data → escalabilidad**

### Flujo de la Demo

#### 1. Escenario Inicial (10 segundos)
- Usuario viendo un producto (zapatillas, audífonos, mochila)
- Micro-banner aparece: "👋 Oe, si te gusta esto… yo te consigo un mejor deal 😉"

#### 2. Inicio del Regateo (20-30 segundos)
- Usuario hace hover/click
- **NegocIA**: "Dime, ¿cuánto estás dispuesto a pagar? A ver si lo negocio por ti 😎"
- **Usuario**: "Quisiera pagar 90."
- **NegocIA**: "90 está difícil, causa 😅 pero déjame ver qué puedo hacer..."
- **NegocIA**: "Ya, mira… puedo bajarte a 98 si lo compras ahorita. ¿Lo cerramos?"

#### 3. Cierre de Venta (10-15 segundos)
- Usuario acepta
- **NegocIA**: "Listo 😎 usa el código NEGOCIA98 y llévatelo al toque."
- Click → checkout con descuento aplicado
- **WOW MOMENT** ✨

#### 4. Vista del Dashboard (40-50 segundos)

**A. Overview (Métricas Principales)**
- Conversaciones iniciadas
- Conversaciones que llegaron a regateo
- Órdenes cerradas
- % uplift de conversión
- % uplift AOV (average order value)
- Valor total recuperado por NegocIA
- Ahorro por cliente vs precio original

**B. Heatmap de Intención**
- Qué productos reciben más regateos
- Qué precios contra-ofertan más los usuarios
- Qué perfiles regatean más
- **Mensaje**: "Data asset, no solo chat"

**C. Panel de Personalización**
- Nivel de agresividad del regateo
- Rango de descuentos permitidos
- Tonalidad del agente ("casero", "formal", "premium")
- Palabras prohibidas/aprobadas
- Horarios de activación
- **Mensaje**: "Producto real, configurable, listo para producción"

#### 5. Final de la Demo (10 segundos)
- Vuelta rápida a la tienda
- **NegocIA**: "Así se vende online… pero humano 💛 — NegocIA"
- **Slogan**: "Cerrar ventas online nunca fue tan humano."

---

## 🎨 Identidad de Marca

### Nombre
**NegocIA**

### Slogan
"El regateo humano que cierra ventas"

### Personalidad
- Cercano y cálido
- Latino auténtico
- Sin presión
- Honesto y transparente
- Nada de robots ni frases genéricas

### Tono de Voz
- **Bueno**: "Oe, causa, déjame ver qué puedo hacer 😉"
- **Malo**: "¡Última oportunidad! ¡Compra ya!" ❌

---

## 📊 KPIs Principales

### Métricas de Conversión
- Conversaciones iniciadas
- % de conversaciones que llegaron a regateo
- % de regateos exitosos (cerrados)
- Órdenes totales cerradas
- Uplift de conversión vs sin agente

### Métricas de Revenue
- Revenue total generado
- AOV (Average Order Value)
- Uplift de AOV vs sin agente
- Valor total recuperado por NegocIA
- Ahorro promedio por cliente

### Métricas de Comportamiento
- Productos más regateados
- Rangos de precio más contra-ofertados
- Perfiles que regatean más
- Horarios pico de negociación
- Tasa de abandono reducida

### Métricas de Eficiencia
- Tiempo promedio de negociación
- Tasa de aceptación de primera oferta
- Tasa de aceptación de contraoferta
- % de negociaciones sin margen

---

## 🛠️ Stack Técnico

### Frontend
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animaciones)
- React Context (estado global)

### Configuración
- `/src/config/toast-messages.ts` - Mensajes de toasts
- `/src/config/interaction-rules.ts` - Reglas de interacción
- `/src/config/negotiation-engine.ts` - Motor de negociación (próximo)

### Componentes Clave
- `ToastManager` - Gestor de toasts
- `NegotiationPanel` - Panel de negociación
- `AgentWidget` - Widget del agente
- `DashboardMetrics` - Métricas del dashboard

---

## 📝 Próximos Pasos

### Fase 1: MVP
- [ ] Implementar ToastManager con reglas básicas
- [ ] Crear NegotiationPanel con flujo de regateo
- [ ] Integrar motor de negociación simple
- [ ] Dashboard con métricas básicas

### Fase 2: Inteligencia
- [ ] Algoritmo de detección de intención
- [ ] Motor de precios dinámico
- [ ] Personalización de tonalidad
- [ ] A/B testing de mensajes

### Fase 3: Escalabilidad
- [ ] Integración con plataformas (Shopify, WooCommerce)
- [ ] API pública
- [ ] Webhooks
- [ ] Multi-idioma

---

## 🎯 Diferenciadores Clave

1. **No es un chatbot**: Es un agente que negocia de verdad
2. **Data como activo**: Insights únicos que ningún analytics tradicional ofrece
3. **Humanización real**: Tono latino auténtico, sin frases robóticas
4. **No invasivo**: Presencia suave, toasts inteligentes
5. **Configurable**: El proveedor controla agresividad, rangos, tonalidad
6. **Respeta el margen**: No regala descuentos, optimiza conversión

---

**Última actualización**: 2025-11-29
**Versión**: 1.0
**Producto**: NegocIA - El regateo humano que cierra ventas
