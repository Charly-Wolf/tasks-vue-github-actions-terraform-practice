import type { List } from '@/model/List'
import { useListsStore } from '@/stores/listStore'

export function useLists() {
  const listsStore = useListsStore()

  function addList(list: List) {
    listsStore.addList(list)
  }

  function toggleTaskDone(listId: string, taskId: string) {
    listsStore.toggleTaskDone(listId, taskId)
  }

  function getUserLists() {
    return listsStore.userLists
  }

  return {
    addList,
    toggleTaskDone,
    getUserLists,
  }
}
