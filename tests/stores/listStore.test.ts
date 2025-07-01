import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { createList, createLists } from '../fixtures'
import { useListStore } from '../../src/stores/listStore'
import { List } from '../../src/types/list'

describe('listStore test', async () => {
  let store: ReturnType<typeof useListStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useListStore()
  })

  it('should get lists by userId', async () => {
    // given
    store.lists = [
      createList({ id: '1', userId: 'test-user-1' }),
      createList({ id: '2', userId: 'test-user-2' }),
      createList({ id: '3', userId: 'test-user-1' }),
    ]

    // when
    const listsUser1: List[] = store.listsByUser('test-user-1')
    // then
    expect(listsUser1.length).toBe(2)
    expect(listsUser1.every(l => l.userId === 'test-user-1')).toBe(true)
  })

  it('should return an empty array if there are no lists', () => {
    // given
    store.lists = []

    // when
    const lists: List[] = store.listsByUser('test-user-1')

    //then
    expect(lists).toEqual([])
  })

  it('should return an empty array if user has no lists', () => {
    // given
    store.lists = createLists(2)

    // when
    const lists: List[] = store.listsByUser('non-existent-user')

    // then
    expect(lists).toEqual([])
  })
})
