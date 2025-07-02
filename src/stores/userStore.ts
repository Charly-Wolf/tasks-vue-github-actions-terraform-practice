import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { API_URL } from '@/constants/constants'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
  }),
  actions: {
    async fetchUsers() {
      const res = await fetch(`${API_URL}/users`)
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
