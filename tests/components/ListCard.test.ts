import { List } from './../../src/types/list'
import { useTaskStore } from './../../src/stores/taskStore'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ListCard from '../../src/components/ListCard.vue'
import { createList, createTask } from '../fixtures'
import { createPinia, setActivePinia } from 'pinia'

describe('ListCard component test', async () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it.each([
    {
      title: 'List with 2 tasks',
      tasks: [
        createTask({ listId: 'Test task 1' }),
        createTask({ listId: 'Test task 1' }),
      ],
      expectedSize: '2 tasks',
    },
    {
      title: 'Empty list',
      tasks: [],
      expectedSize: 'No tasks',
    },
    {
      title: 'List with 1 task',
      tasks: [createTask({ listId: 'Test task 1' })],
      expectedSize: '1 task',
    },
  ])(
    'should render the "$title" card with correct content',
    ({ title, tasks, expectedSize }) => {
      // Given
      const list: List = createList({
        id: 'Test task 1',
        title: title,
      })
      const taskStore = useTaskStore()
      taskStore.tasks = tasks

      const wrapper = mount(ListCard, {
        props: {
          list,
        },
      })

      // When
      // Then
      expect(wrapper.find('.list-title').text()).toBe(title)
      expect(wrapper.find('.list-size').text()).toBe(expectedSize)
    }
  )
})
