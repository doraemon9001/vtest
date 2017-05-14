import types from './SaleReturnTypes'
import Noty from 'noty'

const state = {
  SaleReturnList: [],
  SaleReturnDtList: [],
  SaleReturn: {},
  SaleReturnPageCount: 0
}

const getters = {
  [types.GetSaleReturnList]: (state) => state.SaleReturnList,
  [types.GetSaleReturnDtList]: (state) => state.SaleReturnDtList,
  [types.GetSaleReturn]: (state) => state.SaleReturn,
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
  [types.SaleReturnEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/SaleReturn/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.SaleReturnEditPut, { model: emp.data, rootState })
    })
  },
  [types.SaleReturnAddGet]({ commit }) {
    commit(types.SaleReturnAddGet)
  },
  [types.SaleReturnAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/SaleReturn/post`,
      data: model
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
        state.SaleReturn = model.data
        return state.SaleReturn
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnEditPut](state, { model, rootState }) {
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
        state.SaleReturnList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SaleReturnAddGet](state) {
    state.SaleReturn = {}
    return state.SaleReturn
  },
  [types.SaleReturnAddPost](state, { model, rootState }) {
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
        state.SaleReturnList = model.data
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
