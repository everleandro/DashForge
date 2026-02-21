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
})
