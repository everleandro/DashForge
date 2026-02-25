// Extiende HTMLElement para agregar el handler personalizado
interface El extends HTMLElement {
  __rippleHandler__?: (e: MouseEvent | KeyboardEvent) => void;
}
// Permite personalizar color, evento, duración, centrado y deshabilitado
export interface RippleBinding {
  color?: string;
  event?: "pointerdown" | "mousedown" | "click" | "keydown";
  center?: boolean;
  disabled?: boolean;
  duration?: number; // duración en ms
}
/**
 * Crea el handler para el efecto ripple
 * Soporta mouse, pointer y teclado (Enter/Espacio)
 */
const createRippleHandler = (
  el: El,
  binding?: Record<"value", RippleBinding>
) => {
  return (e: MouseEvent | KeyboardEvent) => {
    // Ignora si está deshabilitado
    if (binding?.value?.disabled) return;

    // Soporte para teclado: solo Enter/Espacio
    if (e instanceof KeyboardEvent) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    }

    // Añade clase para identificar el elemento ripple
    if (!el.classList.contains("v-ripple-element")) {
      el.classList.add("v-ripple-element");
    }

    // Crea el círculo ripple
    const circle = document.createElement("span");
    circle.classList.add("v-ripple");
    el.appendChild(circle);

    const rect = el.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const color = binding?.value?.color || getComputedStyle(el).color;
    const background = color || "rgb(255, 255, 255)";
    const center = !!binding?.value?.center;
    const duration = binding?.value?.duration || 500;

    // Estilos mínimos, el resto debe ir en CSS
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.backgroundColor = background;
    circle.style.animationDuration = `${duration}ms`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.pointerEvents = "none";
    circle.style.left = center
      ? `${(rect.width - diameter) / 2}px`
      : e instanceof MouseEvent
        ? `${e.clientX - rect.left - radius}px`
        : `${rect.width / 2 - radius}px`;
    circle.style.top = center
      ? `${(rect.height - diameter) / 2}px`
      : e instanceof MouseEvent
        ? `${e.clientY - rect.top - radius}px`
        : `${rect.height / 2 - radius}px`;

    // Elimina el círculo tras la animación
    setTimeout(() => {
      if (circle.parentElement) circle.parentElement.removeChild(circle);
    }, duration);
  };
};

/**
 * Directiva ripple para Vue
 * Soporta mouse, pointer y teclado
 */
export const ripple = {
  mounted(el: El, binding?: Record<"value", RippleBinding>) {
    if (binding?.value?.disabled) return;
    // Añade clase identificadora
    if (!el.classList.contains("v-ripple-element")) {
      el.classList.add("v-ripple-element");
    }

    el.__rippleHandler__ = createRippleHandler(el, binding);
    // Soporta mouse/pointer y teclado
    const eventType = binding?.value?.event || "pointerdown";
    el.addEventListener(eventType, el.__rippleHandler__);
    if (eventType !== "keydown") {
      el.addEventListener("keydown", el.__rippleHandler__);
    }
  },

  updated(el: El, binding?: Record<"value", RippleBinding>) {
    // Actualiza el handler según disabled
    const eventType = binding?.value?.event || "pointerdown";
    if (binding?.value?.disabled && el.__rippleHandler__) {
      el.removeEventListener(eventType, el.__rippleHandler__);
      el.removeEventListener("keydown", el.__rippleHandler__);
      el.classList.remove("v-ripple-element");
      delete el.__rippleHandler__;
    } else if (!binding?.value?.disabled && !el.__rippleHandler__) {
      el.__rippleHandler__ = createRippleHandler(el, binding);
      el.addEventListener(eventType, el.__rippleHandler__);
      if (eventType !== "keydown") {
        el.addEventListener("keydown", el.__rippleHandler__);
      }
      if (!el.classList.contains("v-ripple-element")) {
        el.classList.add("v-ripple-element");
      }
    }
  },

  unmounted(el: El, binding: Record<string, any>) {
    // Limpieza: elimina handler y clase
    const eventType = binding.event || "pointerdown";
    if (el.__rippleHandler__) {
      el.removeEventListener(eventType, el.__rippleHandler__);
      el.removeEventListener("keydown", el.__rippleHandler__);
      delete el.__rippleHandler__;
    }
    el.classList.remove("v-ripple-element");
  },
};

// Exporta la directiva por defecto
export default ripple;
