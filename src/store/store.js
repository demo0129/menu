import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    leftItems: JSON.parse(localStorage.getItem('leftItems')) || {},
    shopcars: JSON.parse(localStorage.getItem('shopcar')) || [],
    shopiconChange: false,
    shows: localStorage.shows || 1
  },
  getters: {

  },
  mutations: {
    setLeftItems (state, data) {
      state.leftItems = data
      localStorage.setItem('leftItems', JSON.stringify(data))
    },
    addShopcar (state, data) {
      state.shopcars = data
      localStorage.setItem('shopcar', JSON.stringify(data))
    },
    increaseQuantity (state, data) {
      state.shopcars = data
      localStorage.setItem('shopcar', JSON.stringify(data))
    },
    decreaseQuantity (state, data) {
      state.shopcars = data
      localStorage.setItem('shopcar', JSON.stringify(data))
    },
    clearShopcar (state) {
      let a = state.shopcars.length
      state.shopcars.splice(0, a)
      localStorage.removeItem('shopcar')
    },
    shopiconChange (state) {
      state.shopiconChange = !state.shopiconChange
    },
    commClick (state, data) {
      state.shows = data
      localStorage.shows = data
    },
    evalClick (state, data) {
      state.shows = data
      localStorage.shows = data
    },
    busiClick (state, data) {
      state.shows = data
      localStorage.shows = data
    }
  },
  actions: {

  }
})
