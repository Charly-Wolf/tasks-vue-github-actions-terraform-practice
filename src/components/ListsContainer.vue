<script setup lang="ts">
import ListCard from './ListCard.vue'
import { useListStore } from '@/stores/listStore';
import { computed, onMounted } from 'vue';

defineProps<{
  userId: string
}>()

const listStore = useListStore()

const lists = computed(() => listStore.lists)

</script>

<template>
  <div class="lists-container">
    <h2 class="no-lists-header" v-if="lists.length === 0">No lists found</h2>
    <ul>
      <li v-for="list in lists" :key="list.id">
        <ListCard :list="list" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lists-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  list-style-type: none;
}
</style>
