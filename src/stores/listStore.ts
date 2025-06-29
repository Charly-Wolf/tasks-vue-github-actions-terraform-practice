import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import type { List } from '@/model/List'

export const useListsStore = defineStore('lists', {
  getters: {
    userLists() {
      const userStore = useUserStore()
      return userStore.currentUser?.lists || []
    }
  },
  actions: {
    addList(list: List) {
      const userStore = useUserStore()
      if (userStore.currentUser) {
        userStore.currentUser.lists = [...userStore.currentUser.lists, list]
      }
    },
    toggleTaskDone(listId: string, taskId: string) {
      const userStore = useUserStore()
      const list = userStore.currentUser?.lists.find(l => l.id === listId)
      if (!list) return
      const task = list.tasks.find(t => t.id === taskId)
      if (!task) return
      task.done = !task.done
    }
  },
})
