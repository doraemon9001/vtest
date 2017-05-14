import types from './customerTypes'
import Noty from 'noty'

const state = {
  /**
   * 後臺管理員帳號列表
   */
  CustomerList: [],
  Customer: [],
  CustomerPageCount: 0
}

const getters = {
  [types.GetCustomerList]: (state) => state.CustomerList,
  [types.GetCustomer]: (state) => state.Customer,
  [types.GetCustomerPageCount]: (state) => state.CustomerPageCount
}

const actions = {
  [types.CustomerList]({ commit }, { http, model }) {
    console.log(model)
    http({
      method: 'get',
      url: '/api/Customer/Get',
      params: model
    }).then(customerList => {
      commit(types.CustomerList, customerList.data)
    })
  },
  [types.CustomerAddGet]({ commit }) {
    commit(types.CustomerAddGet)
  },
  [types.CustomerAddPost]({ commit, rootState }, { http, model }) {
    console.log(model)
    http({
      method: 'post',
      url: `/api/Customer/post`,
      data: model
    }).then(model => {
      commit(types.CustomerAddPost, { model: model.data, rootState })
    })
  },
  [types.CustomerEditGet]({ commit }, { id, http }) {
    http({
      method: 'get',
      url: `/api/Customer/GetEdit/${id}`
    }).then(model => {
      commit(types.CustomerEditGet, model.data.data)
    })
  },
  [types.CustomerEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Customer/Put/${model.客戶編號}`,
      data: model
    }).then(model => {
      commit(types.CustomerEditPut, { model: model.data, rootState })
    })
  },
  [types.CustomerDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Customer/delete/${id}`
    }).then(model => {
      commit(types.CustomerDelete, model.data)
    })
  }
}

const mutations = {
  [types.CustomerList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustomerList = model.data.list
        state.CustomerPageCount = model.data.PageCount
        return state.CustomerList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustomerAddGet](state, model) {
    state.Customer = {}
  },
  [types.CustomerAddPost](state, { model, rootState }) {
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
        state.GetCustomerList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustomerEditGet](state, model) {
    state.Customer = model
    return state.Customer
  },
  [types.CustomerEditPut](state, { model, rootState }) {
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
          text: '<h4>修改成功!</h4>'
        }).show()
        rootState.isAdd = false
        state.CustomerList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustomerDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustomerList = model.data
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
