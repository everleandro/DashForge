import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import VButton from './VButton.vue'

describe('VButton', () => {
  it('renders slot content and emits click', async () => {
    const wrapper = mount(VButton, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('applies size class', () => {
    const wrapper = mount(VButton, { props: { size: 'large' } })
    expect(wrapper.classes()).toContain('v-btn--size-large')
  })

  it('disables ripple when ripple is false', () => {
    const wrapper = mount(VButton, { props: { ripple: false } })
    expect(wrapper.classes()).not.toContain('v-ripple-element')
  })

  it('sets disabled and aria-disabled for button tag', () => {
    const wrapper = mount(VButton, { props: { disabled: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('sets aria-busy when loading', () => {
    const wrapper = mount(VButton, { props: { loading: true } })
    expect(wrapper.attributes('aria-busy')).toBe('true')
  })

  it('adds rel noopener noreferrer for external links', () => {
    const wrapper = mount(VButton, {
      attrs: { to: 'https://example.com', target: '_blank' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('adds aria-label for icon-only buttons when icon is string', () => {
    const wrapper = mount(VButton, { props: { icon: 'check' } })
    expect(wrapper.attributes('aria-label')).toBe('check')
  })
})
