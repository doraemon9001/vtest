import types from './adminListTypes'
import Noty from 'noty'

const state = {
  /**
   * 後臺管理員帳號列表
   */
  AdminList: [],
  Admin: {}
}

const getters = {
  [types.GetAdminAccountList]: (state) => state.AdminList,
  [types.GetAdminAccount]: (state) => state.Admin
}

const actions = {
  [types.AdminAccountList]({ commit }, { $http, $router }) {
    $http
      .post('/api/Account/GetAdminList')
      .then(adminList => {
        commit(types.AdminAccountList, adminList.data.data)
      })
  },
  [types.AdminAccountAddGet]({ commit }) {
    commit(types.AdminAccountAddGet)
  },
  [types.AdminAccountAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Account/post`,
      data: model
    }).then(model => {
      commit(types.AdminAccountAddPost, { model: model.data, rootState })
    })
  },
  [types.AdminAccountEditGet]({ commit }, { id, http }) {
    http
      .get(`/api/Account/GetAdmin/${id}`)
      .then(val => {
        commit(types.AdminAccountEditGet, val.data.data)
      })
  },
  [types.AdminAccountEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Account/put/${model.AccountId}`,
      data: model
    }).then(model => {
      commit(types.AdminAccountEditPut, { model: model.data, rootState })
    })
  },
  [types.AdminAccountDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Account/delete/${id}`
    }).then(model => {
      commit(types.AdminAccountDelete, { model: model.data })
    })
  }
}

const mutations = {
  [types.AdminAccountList](state, item) {
    state.AdminList = item
    return state.AdminList
  },
  [types.AdminAccountAddGet](state) {
    state.Admin = {}
  },
  [types.AdminAccountAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        rootState.isAdd = false
        state.AdminList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminAccountEditGet](state, admin) {
    state.Admin = admin
    return state.Admin
  },
  [types.AdminAccountEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        new Noty({
          type: 'info',
          layout: 'topRight',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 3000,
          text: '修改成功!'
        }).show()
        rootState.isAdd = false
        state.AdminList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminAccountDelete](state, { model }) {
    switch (model.statu) {
      case 'ok':
        state.AdminList = model.data
        new Noty({
          type: 'info',
          layout: 'topRight',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 3000,
          text: '刪除成功'
        }).show()
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
