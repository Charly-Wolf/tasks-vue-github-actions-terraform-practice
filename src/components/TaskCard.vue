<script setup lang="ts">
import type { Task } from '@/types/task';

const { task } = defineProps<{
  task: Task
}>()

</script>

<template>
  <div class="card">
    <h3 class="task-title">{{ task.title }}</h3>
    <p class="task-done">{{ task.done ? 'Done' : 'Not done yet' }}</p>
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
  text-decoration: none;
  display: block;
}
</style>
