import types from './saleTypes'
import { noty } from '../../../assets/commons'

const state = {
  SaleList: [],
  SaleDtList: [],
  Sale: {},
  Saledt: {},
  SalePageCount: 0
}

const getters = {
  [types.GetSaleList]: (state) => state.SaleList,
  [types.GetSaleDtList]: (state) => state.SaleDtList,
  [types.GetSale]: (state) => state.Sale,
  [types.GetSaledt]: (state) => state.Saledt,
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
  [types.SaleEditPut]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'put',
      url: `/api/Sale/Put/${model.單據編號}`,
      data: {
        Sale: model,
        Saledts: dtModel
      }
    }).then(emp => {
      commit(types.SaleEditPut, { model: emp.data, rootState })
    })
  },
  [types.SaleAddGet]({ commit }) {
    commit(types.SaleAddGet)
  },
  [types.SaleAddPost]({ commit, rootState }, { http, model, dtModel }) {
    console.log(dtModel)
    http({
      method: 'post',
      url: `/api/Sale/post`,
      data: {
        Sale: model,
        Saledts: dtModel
      }
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
  },
  [types.SaledtAddGet]({ commit }) {
    commit(types.SaledtAddGet)
  },
  [types.SaledtEditGet]({ commit }, index) {
    state.Saledt = state.SaleDtList[index]
    commit(types.SaledtEditGet)
  },
  [types.SaledtDelete]({ commit }, { http, formId, indexId }) {
    http({
      method: 'delete',
      url: `/api/Sale/DeleteDt/${indexId}`,
      data: {
        單據編號: formId,
        識別碼: indexId
      }
    }).then(model => {
      commit(types.SaledtDelete, model.data)
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
        state.Sale = model.data.sale
        state.SaleDtList = model.data.saleDt
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.SaleList = model.data.list
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleAddGet](state) {
    state.Sale = {}
    state.SaleDtList = []
    return state.Sale
  },
  [types.SaleAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
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
        state.SaleList = model.data.list
        state.SalePageCount = model.data.PageCount
        noty.TopRightShow('刪除成功!')
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaledtAddGet](state) {
    state.Saledt = {}
    return state.Saledt
  },
  [types.SaledtEditGet](state) {
    return state.Saledt
  },
  [types.SaledtDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleDtList = model.data
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
