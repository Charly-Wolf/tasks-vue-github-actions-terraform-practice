import type { Task } from '@/types/task'
import { defineStore } from 'pinia'
import { mockTasks } from '@/mockdata/mockTasks.json'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: mockTasks as Task[],
  }),

  getters: {
    // TODO Validation so no one can get tasks of a non logged in user
    tasksByList: state => (listId: string) =>
      state.tasks.filter(t => t.listId === listId),
  },
})
