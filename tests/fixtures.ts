import type { List } from '../src/model/List'
import { Task } from '../src/model/Task'

export const createList = ({
  list = {},
  amount = 1,
}: {
  list?: Partial<List>
  amount?: number
}): List => ({
  id: '1',
  title: 'Test List',
  userId: 'test-user-1',
  tasks: createTasks(amount),
  ...list,
})

export const createLists = (amount: number): List[] => {
  const lists: List[] = []
  for (let i = 1; i <= amount; i++) {
    lists.push(
      createList({ list: { id: `${i}`, title: `Test-list-${i}` }, amount: 2 })
    )
  }
  return lists
}

export const createTask = (task?: Partial<Task>): Task => ({
  id: '1',
  title: 'Test Task',
  done: false,
  userId: 'test-user-1',
  ...task,
})

export const createTasks = (amount: number): Task[] => {
  const tasks: Task[] = []
  for (let i = 1; i <= amount; i++) {
    tasks.push(createTask({ id: `${i}`, title: `Test-task-${i}` }))
  }
  return tasks
}
