import { useListStore } from './../../src/stores/listStore'
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
    const listStore = useListStore()
    listStore.lists = createLists(2)

    const wrapper = mount(ListsContainer, {
      props: {
        userId,
      },
    })

    // When
    // Then
    expect(wrapper.findAllComponents({ name: 'ListCard' }).length).toBe(2)
  })

  it("should show 'No lists found' if user has no lists", async () => {
    const userId = 'test-user-1'
    const listStore = useListStore()
    listStore.lists = []

    const wrapper = mount(ListsContainer, {
      props: { userId },
    })

    expect(wrapper.find('h2').text()).toBe('No lists found')
  })
})
