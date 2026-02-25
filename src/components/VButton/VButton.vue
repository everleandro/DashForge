<template>
  <component
    v-ripple="rippleBinding"
    :is="tag"
    v-bind="externalLinkAttributes"
    :class="btnClass()"
    :type="tag === 'button' ? type || 'button' : undefined"
    :disabled="tag === 'button' ? props.disabled : undefined"
    :aria-disabled="props.disabled ? 'true' : undefined"
    :aria-busy="props.loading ? 'true' : undefined"
    :aria-label="ariaLabel"
    :tabindex="props.disabled && tag !== 'button' ? -1 : undefined"
    :style="style()"
  >
    <span
      v-show="props.loading"
      class="v-btn__loader"
      aria-live="polite"
      aria-atomic="true"
    >
      <slot name="loading">
        <span
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          class="e-progress-circular e-progress-circular--visible e-progress-circular--indeterminate"
          style="height: 23px; width: 23px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
            style="transform: rotate(0deg)"
          >
            <circle
              fill="transparent"
              cx="43.80952380952381"
              cy="43.80952380952381"
              r="20"
              stroke-width="3.8095238095238093"
              stroke-dasharray="125.664"
              stroke-dashoffset="125.66370614359172px"
              class="e-progress-circular__overlay"
            ></circle>
          </svg>
        </span>
      </slot>
    </span>
    <span v-if="prependIcon" class="v-btn__prepend">
      <EIcon v-bind="iconSize" :icon="prependIcon" />
    </span>
    <span class="v-btn__content">
      <slot name="default">
        <template v-if="icon || fab">
          <EIcon v-bind="iconSize" :icon="icon" />
        </template>
      </slot>
    </span>
    <span v-if="appendIcon" class="v-btn__append">
      <EIcon v-bind="iconSize" :icon="appendIcon" />
    </span>
  </component>
</template>
<script lang="ts" setup>
import { BUTTON_CLASS_MAP, ButtonProps } from "@/types/button";
import { ripple } from "@/directives/ripple";
import EIcon from "@/components/VIcon/VIcon.vue";

import { useAttrs, useSlots, computed, watchEffect } from "vue";
const vRipple = { ...ripple };
const attrs = useAttrs();
const slots = useSlots();
const props = withDefaults(defineProps<ButtonProps>(), {
  ripple: true,
});

const rippleBinding = computed(() =>
  props.ripple === false ? { disabled: true } : undefined,
);

const iconSize = computed(() => ({
  ...(props.size ? { size: props.size } : {}),
}));

const tag = computed(() => {
  if (props.link) return "a";
  const { to } = attrs;
  if (typeof to === "string" && to.startsWith("http")) return "a";
  if (to) return "router-link";
  return "button";
});

const externalLinkAttributes = computed(() => {
  const { to, target } = attrs;
  if (typeof to === "string" && to.startsWith("http")) {
    return {
      href: to,
      target,
      rel: target === "_blank" ? "noopener noreferrer" : undefined,
    };
  }
  return {};
});

const hasDefaultSlot = computed(() =>
  slots.default ? slots.default().length > 0 : false,
);

const isIconOnly = computed(() =>
  !!(props.icon || props.fab) &&
  !props.prependIcon &&
  !props.appendIcon &&
  !hasDefaultSlot.value,
);

const ariaLabel = computed(() => {
  const attrLabel = attrs["aria-label"];
  if (typeof attrLabel === "string" && attrLabel.trim().length) return attrLabel;
  if (isIconOnly.value && typeof props.icon === "string") return props.icon;
  return undefined;
});

watchEffect(() => {
  if (import.meta.env.DEV && isIconOnly.value && !ariaLabel.value) {
    console.warn(
      "[VButton] Icon-only buttons should provide aria-label for accessibility.",
    );
  }
});

const btnClass = (): Array<string> => {
  const classes = ["v-btn"];
  const size = props.size || "default";

  // Add size class
  classes.push(`v-btn--size-${size}`);

  const availableRootClassKeys = Object.keys(
    BUTTON_CLASS_MAP,
  );
  const classes2 = availableRootClassKeys
    .filter((key) => !!props[key as keyof typeof props])
    .map((key) => BUTTON_CLASS_MAP[key as keyof typeof BUTTON_CLASS_MAP]);

  if (props.ripple !== false) classes.push("v-ripple-element");
  return [...classes, ...classes2];
};
const style = (): Record<string, string> => {
  const result: Record<string, string> = {};

  // Apply color-based CSS variables
  if (props.color) {
    const colorName = props.color;
    result["--df-btn-bg-color"] =
      `var(--df-color-${colorName}, var(--df-color-primary))`;
    result["--df-btn-text-color"] =
      `var(--df-color-on-${colorName}, var(--df-color-on-primary))`;
    result["--df-btn-border-color"] =
      `var(--df-color-${colorName}, var(--df-color-primary))`;
  }

  // Custom height/width override CSS variables
  props.height && (result["--df-btn-height"] = `${props.height}px`);
  props.width && (result.width = `${props.width}px`);

  return result;
};
</script>

<style lang="scss" src="./VButton.scss"></style>
