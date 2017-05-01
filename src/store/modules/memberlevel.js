import types from '../types'

const state = {
  /**
   * VIP群組列表
   */
  VipList: [
    {
      vlevel: 1,
      totalamount: 12000,
      discounted: 8
    },
    {
      vlevel: 5,
      totalamount: 53500,
      discounted: 8
    },
    {
      vlevel: 6,
      totalamount: 66500,
      discounted: 8
    }
  ]
}

const getters = {
  [types.GetVipList]: (state) => state.VipList
}
const actions = {
  [types.GetVipList]({commit}) {
    commit(types.GetVipList)
  },
  [types.AddVipList]({
    commit
  }, vipModel) {
    commit(types.AddVipList, vipModel)
  }
}
const mutations = {
  [types.GetVipList](state) {
    return state.VipList
  },
  [types.AddVipList](state, vipModel) {
    state.VipList.push({
      vlevel: vipModel.vlevel,
      totalamount: vipModel.totalamount,
      discounted: vipModel.discounted
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
