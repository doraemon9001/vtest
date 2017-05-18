import types from './stockreturnTypes'
import Noty from 'noty'

const state = {
  StockReturnList: [],
  StockReturnDtList: [],
  StockReturn: {},
  StockReturnPageCount: 0
}

const getters = {
  [types.GetStockReturnList]: (state) => state.StockReturnList,
  [types.GetStockReturnDtList]: (state) => state.StockReturnDtList,
  [types.GetStockReturn]: (state) => state.StockReturn,
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
  [types.StockReturnEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/StockReturn/Put/${model.員工編號}`,
      data: model
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
        state.StockReturn = model.data
        return state.StockReturn
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnEditPut](state, { model, rootState }) {
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
        state.StockReturnList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.StockReturnAddGet](state) {
    state.StockReturn = {}
    return state.StockReturn
  },
  [types.StockReturnAddPost](state, { model, rootState }) {
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
        state.StockReturnList = model.data
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
