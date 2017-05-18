import types from './stockTypes'
import Noty from 'noty'

const state = {
  StockList: [],
  StockDtList: [],
  Stock: {},
  StockPageCount: 0
}

const getters = {
  [types.GetStockList]: (state) => state.StockList,
  [types.GetStockDtList]: (state) => state.StockDtList,
  [types.GetStock]: (state) => state.Stock,
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
  [types.StockEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Stock/Put/${model.員工編號}`,
      data: model
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
        state.Stock = model.data
        return state.Stock
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockEditPut](state, { model, rootState }) {
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
        state.StockList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockAddGet](state) {
    state.Stock = {}
    return state.Stock
  },
  [types.StockAddPost](state, { model, rootState }) {
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
        state.StockList = model.data
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
