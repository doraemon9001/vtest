const state = {
  dbName: '宏億展業有限公司'
}

const getters = {
  GetDbName: (state) => state.dbName
}

const actions = {
  DbNameGet({ commit }, { http, name }) {
    http({
      method: 'put',
      url: `/api/header/put/${name}`
    }).then(name => {
      commit('DbNameGet', name.data)
    })
  }
}

const mutations = {
  DbNameGet(state, model) {
    switch (model.statu) {
      case 'ok':
        state.dbName = model.data
        console.log(state.dbName)
        return state.dbName
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
