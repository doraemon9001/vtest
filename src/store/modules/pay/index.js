import types from './payTypes'
import Noty from 'noty'

const state = {
  PayList: [],
  PayDtList: [],
  Pay: {},
  PayPageCount: 0
}

const getters = {
  [types.GetPayList]: (state) => state.PayList,
  [types.GetPayDtList]: (state) => state.PayDtList,
  [types.GetPay]: (state) => state.Pay,
  [types.GetPayPageCount]: (state) => state.PayPageCount
}

const actions = {
  [types.PayList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Pay/Get',
      params: model
    }).then(Pay => {
      commit(types.PayList, Pay.data)
    })
  },
  [types.PayDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Pay/GetDt/${id}`
    }).then(Paydt => {
      commit(types.PayDtList, Paydt.data)
    })
  },
  [types.PayEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Pay/GetEdit/${id}`
    }).then(model => {
      commit(types.PayEditGet, model.data)
    })
  },
  [types.PayEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Pay/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.PayEditPut, { model: emp.data, rootState })
    })
  },
  [types.PayAddGet]({ commit }) {
    commit(types.PayAddGet)
  },
  [types.PayAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Pay/post`,
      data: model
    }).then(emp => {
      commit(types.PayAddPost, { model: emp.data, rootState })
    })
  },
  [types.PayDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Pay/delete/${id}`
    }).then(model => {
      commit(types.PayDelete, model.data)
    })
  }
}

const mutations = {
  [types.PayList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.PayList = model.data.list
        state.PayPageCount = model.data.PageCount
        return state.PayList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.PayDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.PayDtList = model.data
        return state.PayDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.PayEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Pay = model.data
        return state.Pay
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.PayEditPut](state, { model, rootState }) {
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
        state.PayList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.PayAddGet](state) {
    state.Pay = {}
    return state.Pay
  },
  [types.PayAddPost](state, { model, rootState }) {
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
        state.PayList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.PayDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.PayList = model.data
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
