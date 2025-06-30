<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import type { List } from '@/types/list.ts';
import { computed } from 'vue';


const { list } = defineProps<{
  list: List
}>()

const taskStore = useTaskStore()
const tasks = computed(() => taskStore.tasksByList(list.id))
</script>

<template>
  <div class="card">
    <h3 class="list-title">{{ list.title }}</h3>
    <p class="list-size">{{ tasks.length > 0 ? tasks.length : `No` }} {{ tasks.length === 1 ? 'task' : 'tasks' }}</p>
  </div>
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
}
</style>
