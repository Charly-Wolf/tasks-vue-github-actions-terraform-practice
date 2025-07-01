import ListDetailsView from '../../src/views/ListDetailsView.vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount, RouterLinkStub } from '@vue/test-utils'
import TasksContainer from '../../src/components/TasksContainer.vue'
import { useListStore } from '../../src/stores/listStore'
import { createList } from '../fixtures'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../src/routes/index'

describe('ListDetails view component test', async () => {
  let store: ReturnType<typeof useListStore>
  let router: ReturnType<typeof createRouter>

  beforeEach(async () => {
    setActivePinia(createPinia())
    store = useListStore()
    router = createRouter({
      history: createWebHistory(),
      routes,
    })
  })

  async function mountWithRoute(listId: string) {
    await router.push({ name: 'List details', params: { listId } })
    await router.isReady()

    return mount(ListDetailsView, {
      global: {
        plugins: [router],
        stubs: { RouterLink: RouterLinkStub },
      },
    })
  }

  it('renders TasksContainer when list exists', async () => {
    // given
    store.lists = [createList({ id: '1' })]

    const wrapper = await mountWithRoute('1')

    //when
    // then
    expect(wrapper.findComponent(TasksContainer).exists()).toBe(true)
    expect(wrapper.text()).not.toContain('No list found!')
  })

  it('renders show "No list found!" when list does not exists', async () => {
    // given
    store.lists = [createList({ id: '1' })]
    const wrapper = await mountWithRoute('2')

    //when
    // then
    expect(wrapper.findComponent(TasksContainer).exists()).toBe(false)
    expect(wrapper.text()).toContain('No list found!')
  })
})
