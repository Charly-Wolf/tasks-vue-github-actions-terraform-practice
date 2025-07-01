<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import type { List } from '@/types/list.ts';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';


const { list } = defineProps<{
  list: List
}>()

const taskStore = useTaskStore()
const tasks = computed(() => taskStore.tasksByList(list.id))
</script>

<template>
  <RouterLink :to="`lists/${list.id}/tasks`" class="card">
    <h3 class="list-title">{{ list.title }}</h3>
    <p class="list-size">{{ tasks.length > 0 ? tasks.length : `No` }} {{ tasks.length === 1 ? 'task' : 'tasks' }}</p>
  </RouterLink>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  margin: 2rem;
  background-color: white;
  color: black;
  text-decoration: none;
  display: block;
}
</style>
