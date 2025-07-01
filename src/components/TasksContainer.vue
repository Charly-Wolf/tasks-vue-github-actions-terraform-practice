<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { computed } from 'vue';
import TaskCard from './TaskCard.vue';

const { listId } = defineProps<{
  listId: string
}>()

const taskStore = useTaskStore()

const tasks = computed(() => taskStore.tasksByList(listId))

console.log("List ID:", listId)

</script>

<template>
  <div class="tasks-container">
    <h2 class="no-tasks-header" v-if="tasks.length === 0">No tasks found</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <TaskCard :task="task" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tasks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  list-style-type: none;
}
</style>
