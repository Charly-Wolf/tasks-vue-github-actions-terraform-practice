import HomeView from '@/views/HomeView.vue'
import ListDetailsView from '@/views/ListDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/lists/:listId/tasks',
    name: 'List details',
    component: ListDetailsView,
  },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
