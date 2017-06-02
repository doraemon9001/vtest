import types from './custqtyTypes'
import Noty from 'noty'

const state = {
  CustQtyList: [],
  CustQtyDtList: [],
  CustQty: {},
  CustQtyPageCount: 0
}

const getters = {
  [types.GetCustQtyList]: (state) => state.CustQtyList,
  [types.GetCustQtyDtList]: (state) => state.CustQtyDtList,
  [types.GetCustQty]: (state) => state.CustQty,
  [types.GetCustQtyPageCount]: (state) => state.CustQtyPageCount
}

const actions = {
  [types.CustQtyList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/CustQty/Get',
      params: model
    }).then(CustQty => {
      commit(types.CustQtyList, CustQty.data)
    })
  },
  [types.CustQtyDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/CustQty/GetDt/${id}`
    }).then(CustQtydt => {
      commit(types.CustQtyDtList, CustQtydt.data)
    })
  },
  [types.CustQtyEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/CustQty/GetEdit/${id}`
    }).then(model => {
      commit(types.CustQtyEditGet, model.data)
    })
  },
  [types.CustQtyEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/CustQty/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.CustQtyEditPut, { model: emp.data, rootState })
    })
  },
  [types.CustQtyAddGet]({ commit }) {
    commit(types.CustQtyAddGet)
  },
  [types.CustQtyAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/CustQty/post`,
      data: model
    }).then(emp => {
      commit(types.CustQtyAddPost, { model: emp.data, rootState })
    })
  },
  [types.CustQtyDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/CustQty/delete/${id}`
    }).then(model => {
      commit(types.CustQtyDelete, model.data)
    })
  }
}

const mutations = {
  [types.CustQtyList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustQtyList = model.data.list
        state.CustQtyPageCount = model.data.PageCount
        return state.CustQtyList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustQtyDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustQtyDtList = model.data
        console.log(state.CustQtyDtList)
        return state.CustQtyDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustQtyEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustQty = model.data
        return state.CustQty
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustQtyEditPut](state, { model, rootState }) {
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
        state.CustQtyList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustQtyAddGet](state) {
    state.CustQty = {}
    return state.CustQty
  },
  [types.CustQtyAddPost](state, { model, rootState }) {
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
        state.CustQtyList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CustQtyDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.CustQtyList = model.data
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
