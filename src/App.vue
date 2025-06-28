<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import ListsContainer from './components/ListsContainer.vue'
import data from './mockdata/data.json'
import type { User } from './model/User'
import type { List } from './model/List'

const user = ref<User>(data.users[0])
const lists = ref<List[]>(user.value.lists)
</script>

<template>
  <Header />
  <ListsContainer :lists="lists" />
  <Button text="Create list" />
</template>

<style scoped></style>
