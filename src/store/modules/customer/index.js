import types from './customerTypes'
import Noty from 'noty'

const state = {
  /**
   * 後臺管理員帳號列表
   */
  CustomerList: [],
  Customer: []
}

const getters = {
  [types.GetCustomerList]: (state) => state.CustomerList,
  [types.GetCustomer]: (state) => state.Customer
}

const actions = {
  [types.CustomerList]({ commit }, { http }) {
    http({
      method: 'get',
      url: '/api/Customer/Get'
    }).then(customerList => {
      commit(types.CustomerList, customerList.data)
    })
  },
  [types.AdminGroupAddGet]({ commit }, http) {
    http({
      method: 'get',
      url: `/api/AccountGroup/GetAddAdminGroup`
    }).then(model => {
      commit(types.AdminGroupAddGet, model.data.data)
    })
  },
  [types.AdminGroupAddPost]({ commit, rootState }, { http, model }) {
    console.log(model)
    http({
      method: 'post',
      url: `/api/AccountGroup/post/${model.AccountGroupName}`,
      data: model.menuGroup
    }).then(model => {
      commit(types.AdminGroupAddPost, { model: model.data, rootState })
    })
  },
  [types.AdminGroupEditGet]({ commit }, { id, http }) {
    http({
      method: 'get',
      url: `/api/AccountGroup/GetAdminGroup/${id}`
    }).then(model => {
      commit(types.AdminGroupEditGet, model.data.data)
    })
  },
  [types.AdminGroupEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/AccountGroup/put/${model.AccountGroupId}`,
      data: model.menuGroup
    }).then(model => {
      commit(types.AdminGroupEditPut, { model: model.data, rootState })
    })
  },
  [types.AdminGroupDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/AccountGroup/delete/${id}`
    }).then(model => {
      commit(types.AdminGroupDelete, model.data)
    })
  }
}

const mutations = {
  [types.CustomerList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustomerList = model.data
        return state.CustomerList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminGroupAddGet](state, model) {
    state.AdminGroup = model
  },
  [types.AdminGroupAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        new Noty({
          type: 'info',
          layout: 'topRight',
          theme: 'metroui',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 3000,
          text: '<h4>新增成功!</h4>'
        }).show()
        rootState.isAdd = false
        state.AdminGroupList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminGroupEditGet](state, model) {
    state.AdminGroup = model
    return state.AdminGroup
  },
  [types.AdminGroupEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        new Noty({
          type: 'info',
          layout: 'topRight',
          theme: 'metroui',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 6000,
          text: '<h4>修改成功,請重新登入套用新的權限!</h4>'
        }).show()
        rootState.isAdd = false
        state.GetAdminGroupList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminGroupDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.AdminGroupList = model.data
        new Noty({
          type: 'info',
          layout: 'topRight',
          theme: 'metroui',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 3000,
          text: '<h4>刪除成功!</h4>'
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
