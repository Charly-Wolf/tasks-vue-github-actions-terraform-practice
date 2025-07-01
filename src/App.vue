<script setup lang="ts">
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import ListsContainer from './components/ListsContainer.vue'
import { useUserStore } from './stores/userStore'
import { onMounted } from 'vue'

const userStore = useUserStore()

// TODO Login
const userId: string = "user1"

onMounted(() => {
  userStore.setCurrentUser(userId)
})
</script>

<template>
  <Header />
  <h3>{{ userStore.currentUser ? `Welcome ${userStore.currentUser?.name}` : 'Login' }}</h3>
  <ListsContainer :userId="userId" />
  <Button text="Create list" />
</template>

<style scoped></style>
