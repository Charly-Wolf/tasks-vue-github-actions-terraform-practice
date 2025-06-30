import { defineStore } from 'pinia'
import { mockLists } from '../mockdata/mockLists.json'

import type { List } from '@/types/list'

export const useListStore = defineStore('list', {
  state: () => ({
    lists: mockLists as List[],
  }),

  getters: {
    listsByUser: state => (userId: string) =>
      state.lists.filter(l => l.userId === userId),
  },
})
