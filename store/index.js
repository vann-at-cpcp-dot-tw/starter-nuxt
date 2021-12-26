import { defineStore } from 'pinia'
export const useStore = defineStore('globalStore', {
  state(){
    return {
      lightbox: null, //pinia 不能用空字串當預設值，否則會報錯
    }
  }
})