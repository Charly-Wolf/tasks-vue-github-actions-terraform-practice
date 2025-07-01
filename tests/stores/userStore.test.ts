import { useUserStore } from './../../src/stores/userStore'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { createUsers } from '../fixtures'

describe('userStore test', async () => {
  let store: ReturnType<typeof useUserStore>
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useUserStore()
  })

  it('should have initial null currentUser', async () => {
    // given
    // when
    // then
    expect(store.currentUser).toBeNull()
  })

  it('should set currentUser by id', async () => {
    // given
    store.users = createUsers(2)

    // when
    store.setCurrentUser('test-user-2')

    // then
    expect(store.currentUser.id).toBe('test-user-2')
  })

  it('should not set currentUser if id does not exist', () => {
    // given
    store.users = createUsers(2)

    // when
    store.setCurrentUser('non-existent-userId')

    // then
    expect(store.currentUser).toBeNull()
  })
})
