<script setup lang="ts">
import ListCard from './ListCard.vue'
import { useListStore } from '@/stores/listStore';
import { computed } from 'vue';

const props = defineProps<{
  userId: string
}>()

const listStore = useListStore()

const lists = computed(() => listStore.listsByUser(props.userId))

</script>

<template>
  <div class="lists-container">
    <h2 v-if="lists.length === 0">No lists found</h2>
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
  width: 90vw;
  align-items: center;
}
</style>
