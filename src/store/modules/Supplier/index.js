import types from './SupplierTypes'
import Noty from 'noty'

const state = {
  SupplierList: [],
  SupplierDtList: [],
  Supplier: {},
  SupplierPageCount: 0
}

const getters = {
  [types.GetSupplierList]: (state) => state.SupplierList,
  [types.GetSupplierDtList]: (state) => state.SupplierDtList,
  [types.GetSupplier]: (state) => state.Supplier,
  [types.GetSupplierPageCount]: (state) => state.SupplierPageCount
}

const actions = {
  [types.SupplierList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Supplier/Get',
      params: model
    }).then(Supplier => {
      commit(types.SupplierList, Supplier.data)
    })
  },
  [types.SupplierDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Supplier/GetDt/${id}`
    }).then(Supplierdt => {
      commit(types.SupplierDtList, Supplierdt.data)
    })
  },
  [types.SupplierEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Supplier/GetEdit/${id}`
    }).then(model => {
      commit(types.SupplierEditGet, model.data)
    })
  },
  [types.SupplierEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Supplier/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.SupplierEditPut, { model: emp.data, rootState })
    })
  },
  [types.SupplierAddGet]({ commit }) {
    commit(types.SupplierAddGet)
  },
  [types.SupplierAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Supplier/post`,
      data: model
    }).then(emp => {
      commit(types.SupplierAddPost, { model: emp.data, rootState })
    })
  },
  [types.SupplierDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Supplier/delete/${id}`
    }).then(model => {
      commit(types.SupplierDelete, model.data)
    })
  }
}

const mutations = {
  [types.SupplierList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SupplierList = model.data.list
        state.SupplierPageCount = model.data.PageCount
        return state.SupplierList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SupplierDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SupplierDtList = model.data
        return state.SupplierDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SupplierEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Supplier = model.data
        return state.Supplier
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SupplierEditPut](state, { model, rootState }) {
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
        state.SupplierList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.SupplierAddGet](state) {
    state.Supplier = {}
    return state.Supplier
  },
  [types.SupplierAddPost](state, { model, rootState }) {
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
        state.SupplierList = model.data
        break
      case 'err':
        new Noty({
          type: 'warning',
          layout: 'topRight',
          theme: 'metroui',
          animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
          },
          timeout: 3000,
          text: `<div style="width:500px">${model.msg}</div>`
        }).show()
        break
    }
  },
  [types.SupplierDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.SupplierList = model.data
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
