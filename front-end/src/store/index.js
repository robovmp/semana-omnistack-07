import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postFeed: null
  },
  getters: {
    retornaPost(state){
      return state.postFeed
    }
  },
  mutations: {
    adicionarPost(state, payload){
      state.postFeed = payload
    }
  },
  actions: { 
    backEnd(context, payload){
      context.commit('adicionarPost', payload)
    }
  },
  modules: {
  }
})
