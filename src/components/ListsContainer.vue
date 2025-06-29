<script setup lang="ts">
import type { List } from '../model/List'
import ListCard from './ListCard.vue'

const props = defineProps<{
  lists: List[]
}>()
</script>
<template>
  <div class="lists-container">
    <ListCard v-for="list in props.lists" :key="list.id" :list="list" />
  </div>
</template>

<style scoped>
.lists-container {
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-items: center;
}
</style>
