import type { Task } from '@/types/task'
import { defineStore } from 'pinia'
import { mockTasks } from '@/mockdata/mockTasks.json'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: mockTasks as Task[],
  }),

  getters: {
    tasksByList: state => (listId: string) =>
      state.tasks.filter(t => t.listId === listId),
  },
})
