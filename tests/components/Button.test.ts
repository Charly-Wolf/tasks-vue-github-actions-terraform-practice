import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/Button.vue'

describe('Button component test', async () => {
  it('should render the button with correct text', () => {
    // Given
    const wrapper = mount(Button, {
      props: {
        text: 'Test Text',
      },
    })
    // When
    // Then
    expect(wrapper.text()).toBe('Test Text')
  })
})
