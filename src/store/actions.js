import types from './types'

export default {
  [types.ShowLoading]({commit}) {
    commit(types.ShowLoading)
  },
  [types.HideLoading]({commit}) {
    commit(types.HideLoading)
  },
  [types.ShowDiv]({ commit }) {
    commit('ShowDiv')
  },
  [types.HideDiv]({ commit }) {
    commit('HideDiv')
  }
}
