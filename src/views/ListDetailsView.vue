<script setup lang="ts">
import TasksContainer from '@/components/TasksContainer.vue';
import { useListStore } from '@/stores/listStore';
import { useRoute } from 'vue-router';

const route = useRoute()
const listId = route.params.listId as string
const list = useListStore().listById(listId)

</script>

<template>
  <p v-if="!list">No list found!</p>
  <TasksContainer v-else :listId="listId" />
</template>

<style lang="css" scoped></style>