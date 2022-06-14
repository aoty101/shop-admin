import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    count: 0,
    isCollapse: false,
    user: getItem<IUserInfo>(USER)
    // user: JSON.parse(window.localStorage.getItem(USER) || 'null') as IUserInfo | null
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    },
    setIsCollapse (payload: boolean) {
      this.isCollapse = payload
    },
    setUser (payload: IUserInfo | null) {
      this.user = payload
      setItem(USER, this.user)
    }
  }
})
