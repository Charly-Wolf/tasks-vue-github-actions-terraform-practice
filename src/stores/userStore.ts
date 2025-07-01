import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
  }),
  actions: {
    async fetchUsers() {
      const res = await fetch('http://localhost:8080/users')
      console.log('Res:', res)
      this.users = await res.json()
    },

    // TODO - Login
    async setCurrentUser(userId: string) {
      if (this.users.length === 0) {
        await this.fetchUsers()
      }
      const user = this.users.find(u => u.id === userId)
      if (user) {
        this.currentUser = user
      }
    },
  },
})
