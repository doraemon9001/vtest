import types from './adminLoginTypes'

const state = {
  auth: false
}

const getters = {
  [types.GetAuth]: (state) => state.auth
}
const actions = {
  [types.AuthLogin]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Account/login`,
      data: model
    }).then(model => {
      commit(types.AuthLogin, { model: model.data, rootState })
    })
  }
}
const mutations = {
  /**
   * 驗證當前User是否登入
   * state.auth:是否登入
   */
  [types.AuthLogin](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        state.auth = true
        window.Lockr.set('auth', true)
        window.Lockr.set('antiKey', model.data)
        break
      case 'err':
        alert(model.msg)
        break
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
