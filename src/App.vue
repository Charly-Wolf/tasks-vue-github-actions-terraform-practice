<script setup lang="ts">
import Header from './components/Header.vue'
import { useUserStore } from './stores/userStore'

const userStore = useUserStore()


</script>

<template>
  <Header />
  <h3>{{ userStore.currentUser ? `Welcome ${userStore.currentUser?.name}` : 'Login' }}</h3>
  <nav class="nav-bar">
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
