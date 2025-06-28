import type { Task } from './Task'

export interface List {
  id: string
  title: string
  userId: string
  tasks: Task[]
}
