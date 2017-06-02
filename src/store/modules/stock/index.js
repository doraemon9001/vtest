import types from './stockTypes'
import { noty } from '../../../assets/commons'

const state = {
  StockList: [],
  StockDtList: [],
  Stock: {},
  StockDt: {},
  StockPageCount: 0
}

const getters = {
  [types.GetStockList]: (state) => state.StockList,
  [types.GetStockDtList]: (state) => state.StockDtList,
  [types.GetStock]: (state) => state.Stock,
  [types.GetStockdt]: (state) => state.StockDt,
  [types.GetStockPageCount]: (state) => state.StockPageCount
}

const actions = {
  [types.StockList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Stock/Get',
      params: model
    }).then(Stock => {
      commit(types.StockList, Stock.data)
    })
  },
  [types.StockDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Stock/GetDt/${id}`
    }).then(Stockdt => {
      commit(types.StockDtList, Stockdt.data)
    })
  },
  [types.StockEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Stock/GetEdit/${id}`
    }).then(model => {
      commit(types.StockEditGet, model.data)
    })
  },
  [types.StockEditPut]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'put',
      url: `/api/Stock/Put/${model.員工編號}`,
      data: {
        Stock: model,
        Stockdts: dtModel
      }
    }).then(emp => {
      commit(types.StockEditPut, { model: emp.data, rootState })
    })
  },
  [types.StockAddGet]({ commit }) {
    commit(types.StockAddGet)
  },
  [types.StockAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Stock/post`,
      data: model
    }).then(emp => {
      commit(types.StockAddPost, { model: emp.data, rootState })
    })
  },
  [types.StockDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Stock/delete/${id}`
    }).then(model => {
      commit(types.StockDelete, model.data)
    })
  },
  [types.StockdtAddGet]({ commit }) {
    commit(types.StockdtAddGet)
  },
  [types.StockdtEditGet]({ commit }, index) {
    state.StockDt = state.StockDtList[index]
    commit(types.StockdtEditGet)
  },
  [types.StockdtDelete]({ commit }, { http, formId, indexId }) {
    http({
      method: 'delete',
      url: `/api/Stock/DeleteDt/${indexId}`,
      data: {
        單據編號: formId,
        識別碼: indexId
      }
    }).then(model => {
      commit(types.StockdtDelete, model.data)
    })
  }
}

const mutations = {
  [types.StockList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockList = model.data.list
        state.StockPageCount = model.data.PageCount
        return state.StockList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockDtList = model.data
        return state.StockDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Stock = model.data.stock
        state.StockDtList = model.data.stockDt
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.StockList = model.data.list
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockAddGet](state) {
    state.Stock = {}
    state.StockDtList = []
  },
  [types.StockAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
        rootState.isAdd = false
        state.StockList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockList = model.data.list
        noty.TopRightShow('刪除成功!')
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockdtAddGet](state) {
    state.Stockdt = {}
    return state.Stockdt
  },
  [types.StockdtEditGet](state) {
    return state.Stockdt
  },
  [types.StockdtDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.StockDtList = model.data
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
