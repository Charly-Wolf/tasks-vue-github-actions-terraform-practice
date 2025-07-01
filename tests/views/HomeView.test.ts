import HomeView from '../../src/views/HomeView.vue'
import { useUserStore } from './../../src/stores/userStore'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Button from '../../src/components/Button.vue'
import ListsContainer from '../../src/components/ListsContainer.vue'

describe('Home view component test', async () => {
  let store: ReturnType<typeof useUserStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useUserStore()
  })

  it('renders ListsContainer and Button when userId exists', async () => {
    // given
    const spy = vi.spyOn(store, 'setCurrentUser')
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    //when
    // then
    expect(spy).toHaveBeenCalledWith('user1') // TODO LOGIN!
    expect(wrapper.findComponent(ListsContainer).exists()).toBe(true)
    expect(wrapper.findComponent(Button).exists()).toBe(true)
  })
})
