import {defineStore} from "pinia"

export const mainStore = defineStore("storeId", {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  actions: {
    setCount(num: number) {
      this.count += num
    }
  }
})
