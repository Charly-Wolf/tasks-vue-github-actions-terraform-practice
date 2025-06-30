import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ListsContainer from '../../src/components/ListsContainer.vue'
import { createLists } from '../fixtures'
import { createPinia, setActivePinia } from 'pinia'

describe('ListContainer component test', async () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the list container with correct content', () => {
    // Given
    const userId = 'test-user-1'

    const wrapper = mount(ListsContainer, {
      props: {
        userId: userId,
      },
    })

    // When
    // Then
    expect(wrapper.findAllComponents({ name: 'ListCard' }).length).toBe(2)
  })
})
