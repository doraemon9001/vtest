import types from './goodsypes'
import { noty } from '../../../assets/commons'

const state = {
  GoodsList: [],
  Goods: {},
  GoodsPageCount: 0
}

const getters = {
  [types.GetGoodsList]: (state) => state.GoodsList,
  [types.GetGoods]: (state) => state.Goods,
  [types.GetGoodsPageCount]: (state) => state.GoodsPageCount
}

const actions = {
  [types.GoodsList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Goods/Get',
      params: model
    }).then(Goods => {
      commit(types.GoodsList, Goods.data)
    })
  },
  [types.GoodsEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Goods/GetEdit/${id}`
    }).then(model => {
      commit(types.GoodsEditGet, model.data)
    })
  },
  [types.GoodsEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Goods/Put/${model.員工編號}`,
      data: model
    }).then(emp => {
      commit(types.GoodsEditPut, { model: emp.data, rootState })
    })
  },
  [types.GoodsAddGet]({ commit }) {
    commit(types.GoodsAddGet)
  },
  [types.GoodsAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Goods/post`,
      data: model
    }).then(emp => {
      commit(types.GoodsAddPost, { model: emp.data, rootState })
    })
  },
  [types.GoodsDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Goods/delete/${id}`
    }).then(model => {
      commit(types.GoodsDelete, model.data)
    })
  }
}

const mutations = {
  [types.GoodsList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.GoodsList = model.data.list
        state.GoodsPageCount = model.data.PageCount
        return state.GoodsList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.GoodsEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Goods = model.data
        return state.Goods
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.GoodsEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.GoodsList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.GoodsAddGet](state) {
    state.Goods = {}
    return state.Goods
  },
  [types.GoodsAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
        rootState.isAdd = false
        state.GoodsList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.GoodsDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.GoodsList = model.data
        noty.TopRightShow('刪除成功!')
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
