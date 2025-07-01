import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { createTask, createTasks } from '../fixtures'
import { useListStore } from '../../src/stores/listStore'
import { List } from '../../src/types/list'
import { useTaskStore } from '../../src/stores/taskStore'
import { Task } from '../../src/types/task'

describe('taskStore test', async () => {
  let store: ReturnType<typeof useTaskStore>
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTaskStore()
  })

  it('should get tasks by listId', async () => {
    // given

    store.tasks = [
      createTask({ id: '1', listId: 'test-list-1' }),
      createTask({ id: '2', listId: 'test-list-2' }),
      createTask({ id: '3', listId: 'test-list-1' }),
    ]

    // when
    const tasksList1: Task[] = store.tasksByList('test-list-1')
    // then
    expect(tasksList1.length).toBe(2)
    expect(tasksList1.every(l => l.listId === 'test-list-1')).toBe(true)
  })

  it('should return an empty array if there are no tasks', () => {
    // given
    store.tasks = []

    // when
    const tasks: Task[] = store.tasksByList('test-list-1')

    //then
    expect(tasks).toEqual([])
  })

  it('should return an empty array if list has no tasks', () => {
    // given
    store.tasks = createTasks(2)

    // when
    const tasks: Task[] = store.tasksByList('non-existent-list')

    // then
    expect(tasks).toEqual([])
  })
})
