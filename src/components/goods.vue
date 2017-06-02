<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <GoodsForm :isAdd='isAdd' :HideDiv="HideDiv" />
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary">
            <div class="box-header">
              <div class="input-group">
                <span class="input-group-addon">商品列表</span>
                <input type="email" class="form-control" @keyup.enter="getPageData" v-model="goodsName" placeholder="請輸入商品編號或商品名稱">
                <span class="input-group-btn">
                  <button type="button" @click="getPageData(1)" class="btn btn-danger btn-flat">查詢</button>
                <button @click="add()" class="btn btn-info">新增</button>
                </span>
              </div>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(goods,index) in GetGoodsList" v-if="index <= 50">
                  <div class="box-header">
                    <table class="table table-striped " data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <!-- 標題  -->
                        <tr>
                          <th>
                            <button class="btn btn-block btn-social btn-facebook">{{goods.貨品編號|isEmpty}} 異動記錄</button>
                          </th>
                        </tr>
                        <!-- 內容 -->
                        <tr>
                          <td>
                            <div class="col-md-4">
                              <ul class="list-unstyled">
                                <li><b>貨品編號</b> : {{goods.貨品編號|isEmpty}} - {{goods.貨品名稱|isEmpty}}</li>
                                <li><b>類別編號</b> : {{goods.類別編號|isEmpty}}</li>
                                <li><b>注音碼</b> : {{goods.注音碼|isEmpty}}</li>
                                <li><b>原廠編號</b> : {{goods.原廠編號|isEmpty}}</li>
                                <li><b>條碼編號</b> : {{goods.條碼編號|isEmpty}}</li>
                                <li><b>規格</b> : {{goods.規格|isEmpty}}</li>
                                <li><b>庫存量</b> : {{goods.庫存量|isEmpty}}</li>
                                <li><b>最小單位</b> : {{goods.最小單位|isEmpty}}</li>
                              </ul>
                            </div>
                            <div class="col-md-4">
                              <ul class="list-unstyled">
                                <li><b>包裝單位</b> : {{goods.包裝單位|isEmpty}}</li>
                                <li><b>包裝數量</b> : {{goods.包裝數量|isEmpty}}</li>
                                <li><b>備註</b> : {{goods.備註|isEmpty}}</li>
                                <li><b>最近進貨日</b> : {{goods.最近進貨日|isEmpty}}</li>
                                <li><b>最近進貨單號</b> : {{goods.最近進貨單號|isEmpty}}</li>
                                <li><b>最近進貨金額</b> : {{goods.最近進貨金額|decimalComma|isEmpty}}</li>
                                <li><b>最近銷貨日</b> : {{goods.最近銷貨日|isEmpty}}</li>
                                <li><b>最近銷貨單號</b> : {{goods.最近銷貨單號|isEmpty}}</li>
                              </ul>
                            </div>
                            <div class="col-md-4">
                              <ul class="list-unstyled">
                                <li><b>最近銷貨金額</b> : {{goods.最近銷貨金額|decimalComma|isEmpty}}</li>
                                <li><b>建檔人</b> : {{goods.建檔人|isEmpty}}</li>
                                <li><b>建檔時間</b> : {{goods.建檔時間|isEmpty}}</li>
                                <li><b>異動人</b> : {{goods.異動人|isEmpty}}</li>
                                <li><b>異動時間</b> : {{goods.異動時間|isEmpty}}</li>
                                <li><b>狀態</b> : {{goods.狀態|isEmpty}}</li>
                                <li><b>廠商編號</b> : {{goods.廠商編號|isEmpty}}</li>
                                <li><b>廠商名稱</b> : {{goods.廠商名稱|isEmpty}}</li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--table end-->
      </div>
      <!-- Main content end-->
      <pagination v-show="!ShowLoading" :cur="tcur" :all="tall" :callback="getPageData" />
    </div>
    <!-- Page content end-->
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
import {
  noty
} from '../assets/commons.js'
import GoodsForm from '../components/form/goodsform'
export default {
  data() {
    return {
      tcur: 1,
      tall: 0,
      goodsName: '',
      GoodsAdd: false
    }
  },
  created() {
    this.getPageData(1)
  },
  components: {
    GoodsForm
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetGoodsList',
      'GetGoodsDtList',
      'GetGoodsPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'GoodsList',
      'GoodsDtList',
      'GoodsAddGet',
      'GoodsAddPost',
      'GoodsEditGet',
      'GoodsEditPut',
      'GoodsDelete',
      'ShowDiv',
      'HideDiv'
    ]),
    getPageData(page) {
      this.GoodsList({
        http: this.$http,
        model: {
          Search: this.goodsName,
          PageIndex: page,
          PageSize: 50
        }
      })
      setTimeout(() => {
        this.tall = this.GetGoodsPageCount
      }, 2000)
    },
    getdt(id) {
      this.GoodsDtList({
        http: this.$http,
        id
      })
    },
    get(id) {
      this.GoodsAdd = false
      this.GoodsEditGet({
        http: this.$http,
        id
      })
      this.ShowDiv()
    },
    del(id) {
      noty.Show('是否確定要刪除?', () => {
        this.GoodsDelete({
          http: self.$http,
          id: id
        })
      })
    },
    add() {
      this.GoodsAdd = true
      this.GoodsAddGet(this.$http)
      this.ShowDiv()
    },
    doMethods(model) {
      console.log(model)
      return
      // this.GetGoods.PageIndex = this.tcur
      // this.GetGoods.PageSize = 5
      // if (!this.GoodsAdd) {
      //   this.GoodsEditPut({
      //     http: this.$http,
      //     model: model
      //   })
      // } else {
      //   this.GoodsAddPost({
      //     http: this.$http,
      //     model: model
      //   })
      // }
    }
  }
}

</script>
<style scoped>
ul>li {
  text-align: left;
  font-family: '微軟正黑體';
  font-size: 16px;
}

.box-margin-left {
  margin-left: 10px;
}

.help {
  display: block;
  font-size: 11px;
  margin-top: 5px;
}

.myModal {
  position: fixed;
  /* Stay in place */
  z-index: 778;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.help.is-danger {
  background-color: #ff3860;
  font-size: 18px;
  font-weight: bold;
  color: #34495e;
  font-family: '微軟正黑體';
}

.input.is-danger,
.textarea.is-danger {
  border: 1px solid #ff3860;
}

.even {
  --background-color: #95da8b;
}

.box-body {
  --overflow: auto;
}

</style>
