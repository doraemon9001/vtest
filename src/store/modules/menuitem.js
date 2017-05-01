import types from '../types'

const state = {
  /**
   * 功能列表
   */
  MenuItemList: []
}

// getters
const getters = {
  [types.GetMetuItem]: (state) => {
    return state.MenuItemList
  }
}

// actions
const actions = {
  [types.MetuItem]({ commit }, { http }) {
    http({
      method: 'get',
      url: `/api/Menu/Get`
    }).then(model => {
      commit(types.MetuItem, { model: model.data })
    })
  }
}

// mutations
const mutations = {
  [types.MetuItem](state, { model }) {
    switch (model.statu) {
      case 'ok':
        state.MenuItemList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
    return state.MenuItemList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
