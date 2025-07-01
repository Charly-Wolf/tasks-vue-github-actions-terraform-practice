import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { mockUsers } from '../mockdata/mockUsers.json'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: mockUsers as User[], // TODO
    currentUser: null as User | null, // Current user is initially null
  }),
  actions: {
    setCurrentUser(userId: string) {
      const user = this.users.find(u => u.id === userId)
      if (user) {
        this.currentUser = user
      }
    },
  },
})
