import types from './stockreturnTypes'
import { noty } from '../../../assets/commons'

const state = {
  StockReturnList: [],
  StockReturnDtList: [],
  StockReturn: {},
  StockReturnDt: {},
  StockReturnPageCount: 0
}

const getters = {
  [types.GetStockReturnList]: (state) => state.StockReturnList,
  [types.GetStockReturnDtList]: (state) => state.StockReturnDtList,
  [types.GetStockReturn]: (state) => state.StockReturn,
  [types.GetStockReturndt]: (state) => state.StockReturnDt,
  [types.GetStockReturnPageCount]: (state) => state.StockReturnPageCount
}

const actions = {
  [types.StockReturnList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/StockReturn/Get',
      params: model
    }).then(StockReturn => {
      commit(types.StockReturnList, StockReturn.data)
    })
  },
  [types.StockReturnDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/StockReturn/GetDt/${id}`
    }).then(StockReturndt => {
      commit(types.StockReturnDtList, StockReturndt.data)
    })
  },
  [types.StockReturnEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/StockReturn/GetEdit/${id}`
    }).then(model => {
      commit(types.StockReturnEditGet, model.data)
    })
  },
  [types.StockReturnEditPut]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'put',
      url: `/api/StockReturn/Put/${model.單據編號}`,
      data: {
        Stock: model,
        Stockdts: dtModel
      }
    }).then(emp => {
      commit(types.StockReturnEditPut, { model: emp.data, rootState })
    })
  },
  [types.StockReturnAddGet]({ commit }) {
    commit(types.StockReturnAddGet)
  },
  [types.StockReturnAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/StockReturn/post`,
      data: model
    }).then(emp => {
      commit(types.StockReturnAddPost, { model: emp.data, rootState })
    })
  },
  [types.StockReturnDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/StockReturn/delete/${id}`
    }).then(model => {
      commit(types.StockReturnDelete, model.data)
    })
  },
  [types.StockReturndtAddGet]({ commit }) {
    commit(types.StockReturndtAddGet)
  },
  [types.StockReturndtEditGet]({ commit }, index) {
    state.StockReturnDt = state.StockReturnDtList[index]
    commit(types.StockReturndtEditGet)
  },
  [types.StockReturndtDelete]({ commit }, { http, formId, indexId }) {
    http({
      method: 'delete',
      url: `/api/StockReturn/DeleteDt/${indexId}`,
      data: {
        單據編號: formId,
        識別碼: indexId
      }
    }).then(model => {
      commit(types.StockReturndtDelete, model.data)
    })
  }
}

const mutations = {
  [types.StockReturnList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockReturnList = model.data.list
        state.StockReturnPageCount = model.data.PageCount
        return state.StockReturnList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockReturnDtList = model.data
        return state.StockReturnDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockReturn = model.data.stock
        state.StockReturnDtList = model.data.stockDt
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.StockReturnList = model.data.list
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnAddGet](state) {
    state.StockReturn = {}
    state.StockReturnDtList = []
  },
  [types.StockReturnAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
        rootState.isAdd = false
        state.StockReturnList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockReturnList = model.data.list
        noty.TopRightShow('刪除成功!')
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturndtAddGet](state) {
    state.StockReturnDt = {}
    return state.StockReturndt
  },
  [types.StockReturndtEditGet](state) {
    return state.StockReturndt
  },
  [types.StockReturndtDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockReturnDtList = model.data
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
