import types from './types'

export default {
  [types.ShowLoading](state) {
    state.ShowLoading = true
  },
  [types.HideLoading](state) {
    setTimeout(() => {
      state.ShowLoading = false
    }, 1000)
  },
  [types.ShowDiv](state) {
    state.isAdd = true
  },
  [types.HideDiv](state) {
    state.isAdd = false
  }
}
