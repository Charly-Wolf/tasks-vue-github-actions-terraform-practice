import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ListsContainer from '../../src/components/ListsContainer.vue'
import { createLists } from '../fixtures'

describe('ListContainer component test', async () => {
  it('should render the list container with correct content', () => {
    // Given
    const lists = createLists(2)

    const wrapper = mount(ListsContainer, {
      props: {
        lists: lists,
      },
    })

    // When
    // Then
    expect(wrapper.findAllComponents({name: 'ListCard'}).length).toBe(2)
  })
})
