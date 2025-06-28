import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header component test', async () => {
  it('should render the header with correct text', () => {
    // Given
    const wrapper = mount(Header)
    // When
    // Then
    expect(wrapper.find('h1.title-text').text()).toBe('Tasks App')
  })
})
