import { User } from './../src/types/user'
import type { List } from '../src/types/list'
import { Task } from '../src/types/task'

export const createUser = (user?: Partial<User>): User => ({
  id: 'test-user-1',
  name: 'Test User 1',
  email: 'test-user-1@mail.com',
  password: 'p@s$1',
  createdAt: 'xxx',
  ...user,
})

export const createUsers = (amount: number): User[] => {
  const users: User[] = []
  for (let i = 1; i <= amount; i++) {
    users.push(
      createUser({
        id: `test-user-${i}`,
        name: `Test User ${i}`,
        email: `test-user-${i}@mail.com`,
        password: `pass-${i}`,
      })
    )
  }
  return users
}

export const createList = (list?: Partial<List>): List => ({
  id: 'test-list-1',
  title: 'Test list 1',
  userId: 'test-user-1',
  createdAt: 'xxx',
  ...list,
})

export const createLists = (amount: number): List[] => {
  const lists: List[] = []
  for (let i = 1; i <= amount; i++) {
    lists.push(createList({ id: `test-list-${i}`, title: `Test list ${i}` }))
  }
  return lists
}

export const createTask = (task?: Partial<Task>): Task => ({
  id: 'test-task-1',
  title: 'Test Task',
  done: false,
  listId: 'test-list-1',
  createdAt: 'xxx',
  ...task,
})

export const createTasks = (amount: number): Task[] => {
  const tasks: Task[] = []
  for (let i = 1; i <= amount; i++) {
    tasks.push(createTask({ id: `test-task-${i}`, title: `Test task ${i}` }))
  }
  return tasks
}
