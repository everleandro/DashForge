<template>
  <button
    :class="['df-btn', `df-btn--${variant}`, `df-btn--${size}`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VButton',
  props: {
    variant: { type: String as () => 'default' | 'primary' | 'secondary' | 'text', default: 'default' },
    size: { type: String as () => 'sm' | 'md' | 'lg', default: 'md' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['click']
})
</script>

<style lang="scss" scoped>
@use '../../styles/theme' as *;

.df-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 600;
  background: var(--df-color-surface);
  color: var(--df-color-text);
  border-radius: 6px;

  &--primary {
    background: var(--df-color-primary);
    color: var(--df-color-on-primary, #fff);
  }

  &--secondary {
    background: var(--df-color-secondary);
    color: #fff;
  }

  &--text {
    background: transparent;
    color: var(--df-color-primary);
  }

  &--sm { font-size: 0.8rem; padding: 0.25rem 0.6rem }
  &--md { font-size: 1rem }
  &--lg { font-size: 1.125rem; padding: 0.75rem 1.25rem }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
