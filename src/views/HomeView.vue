<script setup lang="ts">
import Button from '@/components/Button.vue';
import ListsContainer from '@/components/ListsContainer.vue';
import { useUserStore } from '@/stores/userStore';
import { onMounted } from 'vue';

const userStore = useUserStore()

// TODO Login
const userId: string = "user1"

onMounted(() => {
  userStore.setCurrentUser(userId)
})
</script>

<template>
  <div v-if="userId">
    <ListsContainer :userId="userId" />
    <Button text="Create list" />
  </div>
</template>

<style lang="css" scoped></style>