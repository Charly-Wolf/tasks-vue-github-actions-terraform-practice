import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ListCard from '../../src/components/ListCard.vue'
import { createList } from '../fixtures'

describe('ListCard component test', async () => {
  it('should render the list card with correct content', () => {
    // Given
    const list = createList({amount: 2, list: {title: 'Test List!'}})
    
    const wrapper = mount(ListCard, {
      props: {
        list: list,
      },
    })
    
    // When
    // Then
    expect(wrapper.find('.list-title').text()).toBe('Test List!')
    expect(wrapper.find('.list-size').text()).toBe('2 tasks')
  })
})
