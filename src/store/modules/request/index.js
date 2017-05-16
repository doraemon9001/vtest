import types from './requestTypes'
import Noty from 'noty'

const state = {
  RequestList: [],
  RequestDtList: [],
  Request: {},
  RequestPageCount: 0
}

const getters = {
  [types.GetRequestList]: (state) => state.RequestList,
  [types.GetRequestDtList]: (state) => state.RequestDtList,
  [types.GetRequest]: (state) => state.Request,
  [types.GetRequestPageCount]: (state) => state.RequestPageCount
}

const actions = {
  [types.RequestList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Request/Get',
      params: model
    }).then(Request => {
      commit(types.RequestList, Request.data)
    })
  },
  [types.RequestDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Request/GetDt/${id}`
    }).then(Requestdt => {
      commit(types.RequestDtList, Requestdt.data)
    })
  },
  [types.RequestEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Request/GetEdit/${id}`
    }).then(model => {
      commit(types.RequestEditGet, model.data)
    })
  },
  [types.RequestEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Request/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.RequestEditPut, { model: emp.data, rootState })
    })
  },
  [types.RequestAddGet]({ commit }) {
    commit(types.RequestAddGet)
  },
  [types.RequestAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Request/post`,
      data: model
    }).then(emp => {
      commit(types.RequestAddPost, { model: emp.data, rootState })
    })
  },
  [types.RequestDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Request/delete/${id}`
    }).then(model => {
      commit(types.RequestDelete, model.data)
    })
  }
}

const mutations = {
  [types.RequestList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.RequestList = model.data.list
        state.RequestPageCount = model.data.PageCount
        return state.RequestList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.RequestDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.RequestDtList = model.data
        return state.RequestDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.RequestEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Request = model.data
        return state.Request
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.RequestEditPut](state, { model, rootState }) {
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
        state.RequestList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.RequestAddGet](state) {
    state.Request = {}
    return state.Request
  },
  [types.RequestAddPost](state, { model, rootState }) {
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
        state.RequestList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.RequestDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.RequestList = model.data
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
