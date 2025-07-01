<script setup lang="ts">
import Button from '@/components/Button.vue';
import ListsContainer from '@/components/ListsContainer.vue';
import { useListStore } from '@/stores/listStore';
import { useTaskStore } from '@/stores/taskStore';
import { useUserStore } from '@/stores/userStore';
import { onMounted } from 'vue';

const userStore = useUserStore()
const listStore = useListStore()
const taskStore = useTaskStore()

// TODO Login
const userId: string = "user1"

onMounted(async () => {
  await userStore.setCurrentUser(userId)
  await listStore.fetchListsForCurrentUser(userId)
  await taskStore.fetchTasks()
})
</script>

<template>
  <div v-if="userId">
    <ListsContainer :userId="userId" />
    <Button text="Create list" />
  </div>
</template>

<style lang="css" scoped></style>