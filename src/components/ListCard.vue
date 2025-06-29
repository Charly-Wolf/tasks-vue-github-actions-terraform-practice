<script setup lang="ts">
import type { List } from '../model/List'

const props = defineProps<{
  list: List
}>()
</script>
<template>
  <div class="card">
    <h2 class="list-title">{{ props.list.title }}</h2>
    <p class="list-size">{{ props.list.tasks.length }} tasks</p>
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
