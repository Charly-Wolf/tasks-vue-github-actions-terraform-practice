import { defineStore } from 'pinia'
import data from '../mockdata/data.json'
import type { User } from '@/model/User'
import type { List } from '@/model/List'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUserId: 'user-1', // TODO: Replace with actual user ID logic
    users: data?.users ?? ([] as User[]),
  }),
  getters: {
    allUsers(): User[] {
      return this.users
    },
    currentUser(): User | null {
      if (!this.users || this.users.length === 0) return null
      return this.users.find(user => user.id === this.currentUserId) || null
    },
  },
  actions: {
    setCurrentUser(userId: string) {
      this.currentUserId = userId
    },
    setCurrentUserLists(lists: List[]) {
      const user = this.currentUser || null
      if (user) {
        user.lists = lists
      }
    },
  },
})
