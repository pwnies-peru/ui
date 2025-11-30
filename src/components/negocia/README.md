# Componentes NegocIA

Sistema de componentes para el agente de regateo NegocIA.

## 📦 Componentes Disponibles

### 1. Toast
Componente individual de notificación tipo toast.

**Props:**
- `id`: string - Identificador único
- `message`: string - Mensaje a mostrar
- `duration?`: number - Duración en ms (default: 3000)
- `position?`: ToastPosition - Posición en pantalla
- `style?`: ToastStyle - Estilo visual
- `onClose?`: (id: string) => void - Callback al cerrar

**Ejemplo:**
```tsx
<Toast
  id="toast-1"
  message="Estoy por aquí si quieres ayuda 👀"
  duration={3500}
  position="bottom-right"
  style="subtle"
/>
```

### 2. ToastManager
Provider y hook para gestionar toasts globalmente.

**Uso:**

```tsx
// 1. Envolver la app con ToastProvider en layout.tsx
import { ToastProvider } from '@/components/negocia/ToastManager';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

// 2. Usar el hook en componentes
import { useToast } from '@/components/negocia/ToastManager';

function MyComponent() {
  const { showToast, showCustomToast } = useToast();

  // Mostrar toast predefinido
  const handleClick = () => {
    showToast('initial'); // Usa mensajes de TOAST_MESSAGES
  };

  // Mostrar toast personalizado
  const handleCustom = () => {
    showCustomToast('Mensaje personalizado 🎉', {
      duration: 4000,
      position: 'top-center',
      style: 'success'
    });
  };

  return (
    <button onClick={handleClick}>Mostrar Toast</button>
  );
}
```

**Métodos disponibles:**
- `showToast(category, messageIndex?)` - Muestra un toast de una categoría predefinida
- `showCustomToast(message, options?)` - Muestra un toast personalizado
- `clearToasts()` - Limpia todos los toasts activos

**Categorías de toasts:**
- `initial` - Presencia suave inicial
- `reEngagement` - Re-engagement cuando el usuario duda
- `negotiationAvailable` - Negociación disponible
- `microOffer` - Micro-oferta
- `addedValue` - Valor añadido (cuando no hay descuento)
- `realUrgency` - Urgencia real
- `closing` - Cierre de venta
- `farewell` - Despedida

### 3. NegotiationWidget
Widget completo de negociación con chat interactivo.

**Características:**
- Botón flotante que abre el panel
- Chat conversacional
- Flujo de negociación automático
- Integración con sistema de toasts
- Animaciones suaves con Framer Motion

**Uso:**
```tsx
import NegotiationWidget from '@/components/negocia/NegotiationWidget';

export default function ProductPage() {
  return (
    <div>
      {/* Tu contenido de producto */}
      <NegotiationWidget />
    </div>
  );
}
```

## 🎯 Flujo de Negociación

### Estado 1: Idle
Widget cerrado, esperando interacción.

### Estado 2: Asking Price
```
Agent: "Dime, ¿cuánto estás dispuesto a pagar?"
User: "90"
```

### Estado 3: Thinking
```
Agent: "Déjame ver qué puedo hacer..."
```

### Estado 4: Counter Offer
```
Agent: "90 está difícil, causa 😅"
Agent: "puedo bajarte a 98 si lo compras ahorita. ¿Lo cerramos?"
```

### Estado 5: Deal
```
Agent: "Listo 😎 usa el código NEGOCIA98"
+ Toast de cierre
```

## 🎨 Estilos Disponibles

### Posiciones
- `top-left`, `top-center`, `top-right`
- `bottom-left`, `bottom-center`, `bottom-right`

### Estilos Visuales
- `subtle` - Gris semitransparente (default)
- `info` - Azul informativo
- `success` - Verde exitoso
- `warning` - Naranja de advertencia
- `highlighted` - Gradiente naranja destacado

## 🔧 Configuración

Los mensajes y reglas se definen en:
- `/src/config/toast-messages.ts` - Mensajes de toasts y negociación
- `/src/config/interaction-rules.ts` - Reglas de interacción

## 📊 Reglas Implementadas

El ToastManager implementa automáticamente:

### ✅ Regla 5: Anti-invasión
- Mínimo 30s entre toasts
- Auto-desaparece en 3s
- No repite patrones

### ✅ Regla 2: Re-engagement limitado
- Máximo 1 toast de re-engagement por sesión

### ✅ Regla 1: Presencia suave
- Toast inicial aparece después de 7-12s (implementado en NegotiationWidget)

## 🚀 Ejemplo Completo

```tsx
// app/layout.tsx
import { ToastProvider } from '@/components/negocia/ToastManager';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

// app/product/[id]/page.tsx
import NegotiationWidget from '@/components/negocia/NegotiationWidget';
import { useToast } from '@/components/negocia/ToastManager';

export default function ProductPage() {
  const { showToast } = useToast();

  // Detectar señales de abandono
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
    <div>
      <h1>Producto Increíble</h1>
      <p>Precio: $120</p>
      <button>Agregar al carrito</button>

      {/* Widget de negociación */}
      <NegotiationWidget />
    </div>
  );
}
```

## 🎯 Próximas Mejoras

- [ ] Integrar con backend para descuentos reales
- [ ] Almacenar historial de conversaciones
- [ ] A/B testing de mensajes
- [ ] Analytics de interacciones
- [ ] Personalización por producto
- [ ] Multi-idioma
