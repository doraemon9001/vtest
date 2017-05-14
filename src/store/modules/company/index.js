import types from './companyTypes'
import Noty from 'noty'

const state = {
  Company: {}
}

const getters = {
  [types.GetCompany]: (state) => state.Company
}

const actions = {
  [types.CompanyList]({ commit }, { http }) {
    http({
      method: 'get',
      url: '/api/Company/Get'
    }).then(company => {
      commit(types.CompanyList, company.data)
    })
  },
  [types.CompanyEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Company/GetEdit/${id}`
    }).then(model => {
      commit(types.CompanyEditGet, model.data.data)
    })
  },
  [types.CompanyEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Company/Put/${model.識別碼}`,
      data: model
    }).then(comp => {
      commit(types.CompanyEditPut, { model: comp.data, rootState })
    })
  }
}

const mutations = {
  [types.CompanyList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Company = model.data
        return state.Company
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CompanyEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Company = model.data
        return state.Company
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.CompanyEditPut](state, { model, rootState }) {
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
        state.Company = model.data
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
