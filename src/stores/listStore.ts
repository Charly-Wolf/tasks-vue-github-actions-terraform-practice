import { defineStore } from 'pinia'
import { mockLists } from '../mockdata/mockLists.json'

import type { List } from '@/types/list'

export const useListStore = defineStore('list', {
  state: () => ({
    lists: [] as List[],
  }),

  getters: {
    // TODO Validation so no one can get lists of a non logged in user

    listById: state => (listId: string) =>
      state.lists.find(l => l.id === listId) ?? null,

    listsByUser: state => (userId: string) =>
      state.lists.filter(l => l.userId === userId),
  },

  actions: {
    async fetchListsForCurrentUser(currentUserId: string) {
      const res = await fetch(
        `http://localhost:8080/lists/byUser?userId=${currentUserId}`
      )
      console.log('Res:', res)
      this.lists = await res.json()
    },
  },
})
