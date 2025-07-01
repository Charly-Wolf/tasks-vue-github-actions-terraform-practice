import { useListStore } from './../../src/stores/listStore'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ListsContainer from '../../src/components/ListsContainer.vue'
import { createLists, createUser } from '../fixtures'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '../../src/stores/userStore'
import { RouterLink } from 'vue-router'

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
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
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
