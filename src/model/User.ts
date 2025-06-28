import type { List } from './List'

export interface User {
  id: string
  name: string
  email: string
  password: string
  lists: List[]
}
