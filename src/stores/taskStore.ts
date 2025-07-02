import type { Task } from '@/types/task'
import { defineStore } from 'pinia'
import { API_URL } from '@/constants/constants'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
  }),

  getters: {
    // TODO Validation so no one can get tasks of a non logged in user
    tasksByList: state => (listId: string) =>
      state.tasks.filter(t => t.listId === listId),
  },

  actions: {
    async fetchTasks() {
      const res = await fetch(`${API_URL}/tasks`)
      console.log('Res:', res)
      this.tasks = await res.json()
    },
  },
})
