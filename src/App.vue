<script setup lang="ts">
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import ListsContainer from './components/ListsContainer.vue'
import { useLists } from './composables/useListsComposable'
import { computed } from 'vue'

const { getUserLists } = useLists()

const lists = computed(() => getUserLists())
</script>

<template>
  <Header />
  <ListsContainer :lists="lists" />
  <Button text="Create list" />
</template>

<style scoped></style>
