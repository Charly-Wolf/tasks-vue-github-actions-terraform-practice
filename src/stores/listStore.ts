import { defineStore } from 'pinia'
import { mockLists } from '../mockdata/mockLists.json'

import type { List } from '@/types/list'

export const useListStore = defineStore('list', {
  state: () => ({
    lists: mockLists as List[],
  }),

  getters: {
    // TODO Validation so no one can get lists of a non logged in user

    listById: state => (listId: string) =>
      state.lists.find(l => l.id === listId) ?? null,

    listsByUser: state => (userId: string) =>
      state.lists.filter(l => l.userId === userId),
  },
})
