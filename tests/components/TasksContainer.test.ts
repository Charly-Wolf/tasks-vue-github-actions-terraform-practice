import { useTaskStore } from './../../src/stores/taskStore'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TasksContainer from '../../src/components/TasksContainer.vue'
import { createTasks } from '../fixtures'
import { createPinia, setActivePinia } from 'pinia'

describe('TasksContainer component test', async () => {
  let store: ReturnType<typeof useTaskStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTaskStore()
  })

  it('should render the tasks container with correct content', () => {
    // Given
    const listId = 'test-list-1'
    store.tasks = createTasks(2)

    const wrapper = mount(TasksContainer, {
      props: {
        listId,
      },
    })

    // When
    // Then
    expect(wrapper.findAllComponents({ name: 'TaskCard' }).length).toBe(2)
  })

  it("should show 'No tasks found' if list has no tasks", async () => {
    const listId = 'test-list-1'
    store.tasks = []

    const wrapper = mount(TasksContainer, {
      props: { listId },
    })

    expect(wrapper.find('h2').text()).toBe('No tasks found')
  })
})
