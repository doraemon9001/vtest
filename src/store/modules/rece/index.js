import types from './receTypes'
import Noty from 'noty'

const state = {
  ReceList: [],
  ReceDtList: [],
  Rece: {},
  RecePageCount: 0
}

const getters = {
  [types.GetReceList]: (state) => state.ReceList,
  [types.GetReceDtList]: (state) => state.ReceDtList,
  [types.GetRece]: (state) => state.Rece,
  [types.GetRecePageCount]: (state) => state.RecePageCount
}

const actions = {
  [types.ReceList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Rece/Get',
      params: model
    }).then(Rece => {
      commit(types.ReceList, Rece.data)
    })
  },
  [types.ReceDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Rece/GetDt/${id}`
    }).then(Recedt => {
      commit(types.ReceDtList, Recedt.data)
    })
  },
  [types.ReceEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Rece/GetEdit/${id}`
    }).then(model => {
      commit(types.ReceEditGet, model.data)
    })
  },
  [types.ReceEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Rece/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.ReceEditPut, { model: emp.data, rootState })
    })
  },
  [types.ReceAddGet]({ commit }) {
    commit(types.ReceAddGet)
  },
  [types.ReceAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Rece/post`,
      data: model
    }).then(emp => {
      commit(types.ReceAddPost, { model: emp.data, rootState })
    })
  },
  [types.ReceDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Rece/delete/${id}`
    }).then(model => {
      commit(types.ReceDelete, model.data)
    })
  }
}

const mutations = {
  [types.ReceList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.ReceList = model.data.list
        state.RecePageCount = model.data.PageCount
        return state.ReceList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.ReceDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.ReceDtList = model.data
        return state.ReceDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.ReceEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Rece = model.data
        return state.Rece
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.ReceEditPut](state, { model, rootState }) {
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
        state.ReceList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.ReceAddGet](state) {
    state.Rece = {}
    return state.Rece
  },
  [types.ReceAddPost](state, { model, rootState }) {
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
        state.ReceList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.ReceDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.ReceList = model.data
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
