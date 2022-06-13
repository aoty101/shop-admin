import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    count: 0,
    isCollapse: false
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    },
    setIsCollapse (payload:boolean) {
      this.isCollapse = payload
    }
  }
})
