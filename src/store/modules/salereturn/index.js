import types from './SaleReturnTypes'
import { noty } from '../../../assets/commons'

const state = {
  SaleReturnList: [],
  SaleReturnDtList: [],
  SaleReturn: {},
  SaleReturndt: {},
  SaleReturnPageCount: 0
}

const getters = {
  [types.GetSaleReturnList]: (state) => state.SaleReturnList,
  [types.GetSaleReturnDtList]: (state) => state.SaleReturnDtList,
  [types.GetSaleReturn]: (state) => state.SaleReturn,
  [types.GetSaleReturndt]: (state) => state.SaleReturndt,
  [types.GetSaleReturnPageCount]: (state) => state.SaleReturnPageCount
}

const actions = {
  [types.SaleReturnList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/SaleReturn/Get',
      params: model
    }).then(SaleReturn => {
      commit(types.SaleReturnList, SaleReturn.data)
    })
  },
  [types.SaleReturnDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/SaleReturn/GetDt/${id}`
    }).then(SaleReturndt => {
      commit(types.SaleReturnDtList, SaleReturndt.data)
    })
  },
  [types.SaleReturnEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/SaleReturn/GetEdit/${id}`
    }).then(model => {
      commit(types.SaleReturnEditGet, model.data)
    })
  },
  [types.SaleReturnEditPut]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'put',
      url: `/api/SaleReturn/Put/${model.員工編號}`,
      data: {
        Sale: model,
        Saledts: dtModel
      }
    }).then(emp => {
      commit(types.SaleReturnEditPut, { model: emp.data, rootState })
    })
  },
  [types.SaleReturnAddGet]({ commit }) {
    commit(types.SaleReturnAddGet)
  },
  [types.SaleReturnAddPost]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'post',
      url: `/api/SaleReturn/post`,
      data: {
        Sale: model,
        Saledts: dtModel
      }
    }).then(emp => {
      commit(types.SaleReturnAddPost, { model: emp.data, rootState })
    })
  },
  [types.SaleReturnDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/SaleReturn/delete/${id}`
    }).then(model => {
      commit(types.SaleReturnDelete, model.data)
    })
  },
  [types.SaleReturndtAddGet]({ commit }) {
    commit(types.SaleReturndtAddGet)
  },
  [types.SaleReturndtEditGet]({ commit }, index) {
    state.SaleReturndt = state.SaleReturnDtList[index]
    commit(types.SaleReturndtEditGet)
  },
  [types.SaleReturndtDelete]({ commit }, { http, formId, indexId }) {
    http({
      method: 'delete',
      url: `/api/Sale/DeleteDt/${indexId}`,
      data: {
        單據編號: formId,
        識別碼: indexId
      }
    }).then(model => {
      commit(types.SaleReturndtDelete, model.data)
    })
  }
}

const mutations = {
  [types.SaleReturnList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleReturnList = model.data.list
        state.SaleReturnPageCount = model.data.PageCount
        return state.SaleReturnList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleReturnDtList = model.data
        return state.SaleReturnDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleReturn = model.data.sale
        state.SaleReturnDtList = model.data.saleDt
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.SaleReturnList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnAddGet](state) {
    state.SaleReturn = {}
    state.SaleReturnDtList = []
  },
  [types.SaleReturnAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
        rootState.isAdd = false
        state.SaleReturnList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleReturnList = model.data.list
        noty.TopRightShow('刪除成功!')
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaledtEditGet](state) {
    return state.SaleReturndt
  },
  [types.SaleReturndtAddGet](state) {
    state.SaleReturndt = {}
    return state.Saledt
  },
  [types.SaleReturndtEditGet](state) {
    return state.SaleReturndt
  },
  [types.SaleReturndtDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SaleReturnDtList = model.data
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
