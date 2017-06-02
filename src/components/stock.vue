<template>
  <div class="zoomIn animated" :class="{modalTop:isAdd}">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <StockForm :isAdd='isAdd' :HideDiv="HideDiv" />
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3>進貨單 <button @click="add()" class="btn btn-info pull-right">新增</button></h3>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(stock,index) in GetStockList" v-if="index < 5">
                  <div class="box-header with-border" style="min-width:3500px">
                    <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                    <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <tr>
                          <th>
                            <a :href="index|anchorHash" data-toggle="collapse" data-parent="#accordion" @click="getdt(stock.單據編號)">詳細資料</a>
                          </th>
                          <th>單據日期</th>
                          <th>類別</th>
                          <th>單據編號</th>
                          <th>廠商編號</th>
                          <th>廠商名稱</th>
                          <th>結帳日</th>
                          <th>工廠地址</th>
                          <th>預到貨日</th>
                          <th>部門編號</th>
                          <th>業務編號</th>
                          <th>單據金額</th>
                          <th>單據折讓</th>
                          <th>貨品折讓</th>
                          <th>付款折讓</th>
                          <th>稅額</th>
                          <th>稅金計算</th>
                          <th>發票號碼</th>
                          <th>應付金額</th>
                          <th>預付現金</th>
                          <th>預付支票</th>
                          <th>預付其他</th>
                          <th>支票號碼</th>
                          <th>備註</th>
                          <th>調撥入倉</th>
                          <th>已沖帳金額</th>
                          <th>已付金額</th>
                          <th>未付金額</th>
                          <th>採購單號</th>
                          <th>製單人員</th>
                          <th>狀態</th>
                          <th>建檔人</th>
                          <th>建檔時間</th>
                          <th>異動人</th>
                          <th>異動時間</th>
                        </tr>
                        <tr>
                          <td>
                            <div class="btn-group">
                              <button @click="get(stock.單據編號)" class="btn bg-orange btn-flat" type="button">修改</button>
                              <button @click="del(stock.單據編號)" class="btn bg-maroon btn-flat" type="button">刪除</button>
                            </div>
                          </td>
                          <td>{{stock.單據日期}}</td>
                          <td>{{stock.類別}}</td>
                          <td>{{stock.單據編號}}</td>
                          <td>{{stock.廠商編號}}</td>
                          <td>{{stock.廠商名稱}}</td>
                          <td>{{stock.結帳日}}</td>
                          <td>{{stock.工廠地址}}</td>
                          <td>{{stock.預到貨日}}</td>
                          <td>{{stock.部門編號}}</td>
                          <td>{{stock.業務編號}}</td>
                          <td>{{stock.單據金額}}</td>
                          <td>{{stock.單據折讓}}</td>
                          <td>{{stock.貨品折讓}}</td>
                          <td>{{stock.付款折讓}}</td>
                          <td>{{stock.稅額}}</td>
                          <td>{{stock.稅金計算}}</td>
                          <td>{{stock.發票號碼}}</td>
                          <td>{{stock.應付金額}}</td>
                          <td>{{stock.預付現金}}</td>
                          <td>{{stock.預付支票}}</td>
                          <td>{{stock.預付其他}}</td>
                          <td>{{stock.支票號碼}}</td>
                          <td>{{stock.備註}}</td>
                          <td>{{stock.調撥入倉}}</td>
                          <td>{{stock.已沖帳金額}}</td>
                          <td>{{stock.已付金額}}</td>
                          <td>{{stock.未付金額}}</td>
                          <td>{{stock.採購單號}}</td>
                          <td>{{stock.製單人員}}</td>
                          <td>{{stock.狀態}}</td>
                          <td>{{stock.建檔人}}</td>
                          <td>{{stock.建檔時間}}</td>
                          <td>{{stock.異動人}}</td>
                          <td>{{stock.異動時間}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetStockDtList.length > 0">
                      <div class="box-body" :id="index">
                        <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                        <table class="table table-striped table-hover">
                          <tbody>
                            <tr>
                              <th>
                                <a :href="index|anchorHash" data-toggle="collapse">關閉</a>
                              </th>
                              <th>識別碼</th>
                              <th>單據日期</th>
                              <th>單據編號</th>
                              <th>類別</th>
                              <th>倉庫編號</th>
                              <th>貨品編號</th>
                              <th>貨品名稱</th>
                              <th>單價</th>
                              <th>單位</th>
                              <th>數量</th>
                              <th>小計</th>
                              <th>折數</th>
                              <th>折讓</th>
                              <th>保固起始日</th>
                              <th>保固終止日</th>
                              <th>使用包裝</th>
                              <th>包裝數量</th>
                              <th>採購單號</th>
                              <th>備註</th>
                              <th>狀態</th>
                              <th>庫存量</th>
                              <th>未入庫數量</th>
                              <th>廠牌</th>
                              <th>車型</th>
                              <th>年份</th>
                              <th>規格</th>
                              <th>重量</th>
                              <th>扣抵</th>
                              <th>自備車</th>
                              <th>匯率</th>
                              <th>幣值</th>
                              <th>幣值總額</th>
                            </tr>
                            <tr v-for="(dt,tindex) in GetStockDtList" key="dt.識別碼">
                              <td><i class="fa fa-info-circle"></i></td>
                              <td>{{dt.識別碼}}</td>
                              <td>{{dt.單據日期}}</td>
                              <td>{{dt.單據編號}}</td>
                              <td>{{dt.類別}}</td>
                              <td>{{dt.倉庫編號}}</td>
                              <td>{{dt.貨品編號}}</td>
                              <td>{{dt.貨品名稱}}</td>
                              <td>{{dt.單價}}</td>
                              <td>{{dt.單位}}</td>
                              <td>{{dt.數量}}</td>
                              <td>{{dt.小計}}</td>
                              <td>{{dt.折數}}</td>
                              <td>{{dt.折讓}}</td>
                              <td>{{dt.保固起始日}}</td>
                              <td>{{dt.保固終止日}}</td>
                              <td>{{dt.使用包裝}}</td>
                              <td>{{dt.包裝數量}}</td>
                              <td>{{dt.採購單號}}</td>
                              <td>{{dt.備註}}</td>
                              <td>{{dt.狀態}}</td>
                              <td>{{dt.庫存量}}</td>
                              <td>{{dt.未入庫數量}}</td>
                              <td>{{dt.廠牌}}</td>
                              <td>{{dt.車型}}</td>
                              <td>{{dt.年份}}</td>
                              <td>{{dt.規格}}</td>
                              <td>{{dt.重量}}</td>
                              <td>{{dt.扣抵}}</td>
                              <td>{{dt.自備車}}</td>
                              <td>{{dt.匯率}}</td>
                              <td>{{dt.幣值}}</td>
                              <td>{{dt.幣值總額}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>
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
import StockForm from '../components/form/stockform.vue'
export default {
  data() {
    return {
      tcur: 1,
      tall: 0,
      StockAdd: false
    }
  },
  components: {
    StockForm
  },
  created() {
    this.getPageData(1)
    setTimeout(() => {
      this.tall = this.GetStockPageCount
    }, 2000)
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetStockList',
      'GetStockDtList',
      'GetStock',
      'GetStockPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'StockList',
      'StockDtList',
      'StockAddGet',
      'StockEditGet',
      'StockDelete',
      'ShowDiv',
      'HideDiv'
    ]),
    getPageData(page) {
      this.StockList({
        http: this.$http,
        model: {
          PageIndex: page,
          PageSize: 5
        }
      })
    },
    getdt(id) {
      this.StockDtList({
        http: this.$http,
        id
      })
    },
    /* 修改按鈕 */
    get(id) {
      this.StockAdd = false
      this.StockEditGet({
        http: this.$http,
        id
      })
      this.ShowDiv()
    },
    del(id) {
      noty.Show('是否確定要刪除?', () => {
        this.StockDelete({
          http: this.$http,
          id: id
        })
      })
    },
    add() {
      this.StockAdd = true
      this.StockAddGet()
      this.ShowDiv()
    }
  }
}

</script>
<style scoped>
.modalTop {
  position: relative;
  z-index: 999
}

.margincenter {
  width: 350px;
  text-align: left;
  margin: 0px auto;
  font-size: 16px;
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

.box-margin-left {
  margin-left: 10px;
}

.help {
  display: block;
  font-size: 11px;
  margin-top: 5px;
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
