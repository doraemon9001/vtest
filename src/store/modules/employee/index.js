import types from './employeeTypes'
import Noty from 'noty'

const state = {
  EmployeeList: [],
  Employee: {},
  EmployeePageCount: 0
}

const getters = {
  [types.GetEmployeeList]: (state) => state.EmployeeList,
  [types.GetEmployee]: (state) => state.Employee,
  [types.GetEmployeePageCount]: (state) => state.EmployeePageCount
}

const actions = {
  [types.EmployeeList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Employee/Get',
      params: model
    }).then(employee => {
      commit(types.EmployeeList, employee.data)
    })
  },
  [types.EmployeeEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Employee/GetEdit/${id}`
    }).then(model => {
      commit(types.EmployeeEditGet, model.data)
    })
  },
  [types.EmployeeEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Employee/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.EmployeeEditPut, { model: emp.data, rootState })
    })
  },
  [types.EmployeeAddGet]({ commit }) {
    commit(types.EmployeeAddGet)
  },
  [types.EmployeeAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Employee/post`,
      data: model
    }).then(emp => {
      commit(types.EmployeeAddPost, { model: emp.data, rootState })
    })
  },
  [types.EmployeeDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Employee/delete/${id}`
    }).then(model => {
      commit(types.EmployeeDelete, model.data)
    })
  }
}

const mutations = {
  [types.EmployeeList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.EmployeeList = model.data.list
        state.EmployeePageCount = model.data.PageCount
        return state.EmployeeList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.EmployeeEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Employee = model.data
        return state.Employee
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.EmployeeEditPut](state, { model, rootState }) {
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
        state.EmployeeList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.EmployeeAddGet](state) {
    state.Employee = {}
    return state.Employee
  },
  [types.EmployeeAddPost](state, { model, rootState }) {
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
        state.EmployeeList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.EmployeeDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.EmployeeList = model.data
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
