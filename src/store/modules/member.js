import types from '../types'

const state = {
  /**
   * 會員列表
   */
  MemberList: [
    {
      id: 'X111111111',
      name: 'SKL1',
      age: 18,
      email: '123@123.com',
      address: '臺北市松山區松山路1號',
      phone: '02-22322232',
      mobile: '0912345678',
      joinTime: '2017/03/25 13:22:55',
      updateUser: 'admin',
      updateTime: '2017/03/28 14:22:26',
      receiveInfo: [
        {
          name: 'SKL1',
          phone: '0912345678',
          receiveAddress: '臺北市松山區松山路1號',
          email: '123@123.com',
          remark: '請於早上送達'
        },
        {
          name: 'SKL2',
          phone: '0998765432',
          receiveAddress: '臺北市松山區松山路1號',
          email: 'we@we.com',
          remark: '請於中午送達'
        },
        {
          name: 'SKL3',
          phone: '0987654321',
          receiveAddress: '臺北市松山區松山路1號',
          email: 'gh@gh.com',
          remark: '請於晚上送達'
        }
      ]
    },
    {
      id: 'S2222666666',
      name: 'LKK',
      age: 35,
      email: 'fd@fd.com',
      address: '臺北市松山區松山路1號',
      phone: '02-22322232',
      mobile: '0987654321',
      joinTime: '2017/03/25 13:22:55',
      updateUser: 'admin',
      updateTime: '2017/03/28 14:22:26',
      receiveInfo: [
        {
          name: 'LKK1',
          phone: '0912345678',
          receiveAddress: '臺北市松山區松山路1號',
          email: '123@123.com',
          remark: '請於早上送達'
        }
      ]
    }
  ],
  /**
   * 會員列表暫存
   */
  MemberListTemp: []
}

const getters = {
  [types.GetMemberList]: (state) => state.MemberList
}
const actions = {
  [types.MemberList]({commit}) {
    commit(types.MemberList)
  },
  [types.GetMember]({
    commit
  }, mem) {
    commit(types.GetMember, mem)
  }
}
const mutations = {
  [types.MemberList] (state) {
    return state.MemberList
  },
  [types.GetMember] (state, { name, id, mobile }) {
    if(state.MemberListTemp.length === 0) state.MemberListTemp = state.MemberList
    let newArr = state.MemberList.filter(mem => {
      if (mem.name === name || mem.id === id || mem.phone === mobile) {
        return mem
      }
    })
    if(newArr.length === 0) state.MemberList = state.MemberListTemp
    else state.MemberList = newArr
    return state.MemberList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
