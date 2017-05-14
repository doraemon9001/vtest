import types from './saleTypes'
import Noty from 'noty'

const state = {
  SaleList: [],
  SaleDtList: [],
  Sale: {},
  SalePageCount: 0
}

const getters = {
  [types.GetSaleList]: (state) => state.SaleList,
  [types.GetSaleDtList]: (state) => state.SaleDtList,
  [types.GetSale]: (state) => state.Sale,
  [types.GetSalePageCount]: (state) => state.SalePageCount
}

const actions = {
  [types.SaleList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Sale/Get',
      params: model
    }).then(Sale => {
      commit(types.SaleList, Sale.data)
    })
  },
  [types.SaleDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Sale/GetDt/${id}`
    }).then(Saledt => {
      commit(types.SaleDtList, Saledt.data)
    })
  },
  [types.SaleEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Sale/GetEdit/${id}`
    }).then(model => {
      commit(types.SaleEditGet, model.data)
    })
  },
  [types.SaleEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Sale/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.SaleEditPut, { model: emp.data, rootState })
    })
  },
  [types.SaleAddGet]({ commit }) {
    commit(types.SaleAddGet)
  },
  [types.SaleAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Sale/post`,
      data: model
    }).then(emp => {
      commit(types.SaleAddPost, { model: emp.data, rootState })
    })
  },
  [types.SaleDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Sale/delete/${id}`
    }).then(model => {
      commit(types.SaleDelete, model.data)
    })
  }
}

const mutations = {
  [types.SaleList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleList = model.data.list
        state.SalePageCount = model.data.PageCount
        return state.SaleList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleDtList = model.data
        return state.SaleDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Sale = model.data
        return state.Sale
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleEditPut](state, { model, rootState }) {
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
        state.SaleList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleAddGet](state) {
    state.Sale = {}
    return state.Sale
  },
  [types.SaleAddPost](state, { model, rootState }) {
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
        state.SaleList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleList = model.data
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
