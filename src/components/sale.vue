<template>
  <div class="zoomIn animated" :class="{modalTop:isAdd}">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <Saleform :isAdd='isAdd' :HideDiv="HideDiv" />
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3>銷貨單
                <button @click="add()" class="btn btn-info pull-right">新增</button>
              </h3>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(sale,index) in GetSaleList">
                  <div class="box-header with-border" style="min-width:3500px">
                    <h4 class="pull-left">詳細資料
                      <i class="fa fa-arrow-circle-down"></i>
                    </h4>
                    <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <tr>
                          <th>
                            <a :href="index|anchorHash" data-toggle="collapse" data-parent="#accordion" @click="getdt(sale.單據編號)">詳細資料</a>
                          </th>
                          <th>單據日期</th>
                          <th>類別</th>
                          <th>單據編號</th>
                          <th>客戶編號</th>
                          <th>客戶名稱</th>
                          <th>結帳日</th>
                          <th>送貨方式</th>
                          <th>送貨地址</th>
                          <th>物流公司</th>
                          <th>請款人編號</th>
                          <th>寄貨單號</th>
                          <th>部門編號</th>
                          <th>業務編號</th>
                          <th>單據金額</th>
                          <th>單據折讓</th>
                          <th>貨品折讓</th>
                          <th>收款折讓</th>
                          <th>稅額</th>
                          <th>稅金計算</th>
                          <th>發票號碼</th>
                          <th>應收金額</th>
                          <th>預收現金</th>
                          <th>預收支票</th>
                          <th>預收其他</th>
                          <th>支票號碼</th>
                          <th>已沖帳金額</th>
                          <th>已收金額</th>
                          <th>未收金額</th>
                          <th>報價單號</th>
                          <th>製單人員</th>
                          <th>備註</th>
                          <th>狀態</th>
                          <th>建檔人</th>
                          <th>建檔時間</th>
                          <th>異動人</th>
                          <th>異動時間</th>
                          <th>預出貨日</th>
                          <th>收款人</th>
                          <th>補價單號</th>
                          <th>補價金額</th>
                          <th>來源單號</th>
                          <th>送貨電話</th>
                          <th>EMAIL</th>
                          <th>訂單編號</th>
                        </tr>
                        <tr>
                          <td>
                            <div class="btn-group">
                              <button @click="get(sale.單據編號)" class="btn bg-orange btn-flat" type="button">修改</button>
                              <button @click="del(sale.單據編號)" class="btn bg-maroon btn-flat" type="button">刪除</button>
                            </div>
                          </td>
                          <td>{{sale.單據日期}}</td>
                          <td>{{sale.類別}}</td>
                          <td>{{sale.單據編號}}</td>
                          <td>{{sale.客戶編號}}</td>
                          <td>{{sale.客戶名稱}}</td>
                          <td>{{sale.結帳日}}</td>
                          <td>{{sale.送貨方式}}</td>
                          <td>{{sale.送貨地址}}</td>
                          <td>{{sale.物流公司}}</td>
                          <td>{{sale.請款人編號}}</td>
                          <td>{{sale.寄貨單號}}</td>
                          <td>{{sale.部門編號}}</td>
                          <td>{{sale.業務編號}}</td>
                          <td>{{sale.單據金額|decimalComma}}</td>
                          <td>{{sale.單據折讓}}</td>
                          <td>{{sale.貨品折讓}}</td>
                          <td>{{sale.收款折讓}}</td>
                          <td>{{sale.稅額}}</td>
                          <td>{{sale.稅金計算}}</td>
                          <td>{{sale.發票號碼}}</td>
                          <td>{{sale.應收金額|decimalComma}}</td>
                          <td>{{sale.預收現金}}</td>
                          <td>{{sale.預收支票}}</td>
                          <td>{{sale.預收其他}}</td>
                          <td>{{sale.支票號碼}}</td>
                          <td>{{sale.已沖帳金額|decimalComma}}</td>
                          <td>{{sale.已收金額|decimalComma}}</td>
                          <td>{{sale.未收金額|decimalComma}}</td>
                          <td>{{sale.報價單號}}</td>
                          <td>{{sale.製單人員}}</td>
                          <td>{{sale.備註}}</td>
                          <td>{{sale.狀態}}</td>
                          <td>{{sale.建檔人}}</td>
                          <td>{{sale.建檔時間}}</td>
                          <td>{{sale.異動人}}</td>
                          <td>{{sale.異動時間}}</td>
                          <td>{{sale.預出貨日}}</td>
                          <td>{{sale.收款人}}</td>
                          <td>{{sale.補價單號}}</td>
                          <td>{{sale.補價金額}}</td>
                          <td>{{sale.來源單號}}</td>
                          <td>{{sale.送貨電話}}</td>
                          <td>{{sale.EMAIL}}</td>
                          <td>{{sale.訂單編號}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetSaleDtList.length > 0">
                      <div class="box-body" :id="index">
                        <h4 class="pull-left">詳細資料
                          <i class="fa fa-arrow-circle-down"></i>
                        </h4>
                        <table class="table table-striped table-hover">
                          <tbody>
                            <tr>
                              <th>
                                <a :href="index|anchorHash" data-toggle="collapse">關閉</a>
                              </th>
                              <th>單據日期</th>
                              <th>單據編號</th>
                              <th>貨品編號</th>
                              <th>貨品名稱</th>
                              <th>單價</th>
                              <th>單位</th>
                              <th>數量</th>
                              <th>小計</th>
                              <th>折數</th>
                              <th>折讓</th>
                              <th>寄庫量</th>
                              <th>單位成本</th>
                              <th>成本方式</th>
                              <th>保固起始日</th>
                              <th>保固終止日</th>
                              <th>贈品</th>
                              <th>使用包裝</th>
                              <th>包裝數量</th>
                              <th>備註</th>
                              <th>經理成本</th>
                              <th>業務成本</th>
                              <th>合約編號</th>
                              <th>廠牌</th>
                              <th>車型</th>
                              <th>年份</th>
                              <th>規格</th>
                              <th>業務折數</th>
                              <th>贈品金額</th>
                              <th>OrderCode</th>
                              <th>補價數量</th>
                              <th>補價金額</th>
                              <th>補價合計</th>
                              <th>重量</th>
                              <th>扣抵</th>
                              <th>自備車</th>
                              <th>尺寸W</th>
                              <th>尺寸H</th>
                              <th>才數</th>
                              <th>解析度</th>
                              <th>冷錶</th>
                              <th>匯率</th>
                              <th>幣值</th>
                              <th>幣值總額</th>
                              <th>客戶編號</th>
                            </tr>
                            <tr v-for="(dt,tindex) in GetSaleDtList" key="dt.識別碼">
                              <td>
                                <i class="fa fa-info-circle"></i>
                              </td>
                              <td>{{dt.單據日期}}</td>
                              <td>{{dt.單據編號}}</td>
                              <td>{{dt.貨品編號}}</td>
                              <td>{{dt.貨品名稱}}</td>
                              <td>{{dt.單價|decimalComma}}</td>
                              <td>{{dt.單位}}</td>
                              <td>{{dt.數量}}</td>
                              <td>{{dt.小計|decimalComma}}</td>
                              <td>{{dt.折數}}</td>
                              <td>{{dt.折讓}}</td>
                              <td>{{dt.寄庫量}}</td>
                              <td>{{dt.單位成本}}</td>
                              <td>{{dt.成本方式}}</td>
                              <td>{{dt.保固起始日}}</td>
                              <td>{{dt.保固終止日}}</td>
                              <td>{{dt.贈品}}</td>
                              <td>{{dt.使用包裝}}</td>
                              <td>{{dt.包裝數量}}</td>
                              <td>{{dt.備註}}</td>
                              <td>{{dt.經理成本}}</td>
                              <td>{{dt.業務成本}}</td>
                              <td>{{dt.合約編號}}</td>
                              <td>{{dt.廠牌}}</td>
                              <td>{{dt.車型}}</td>
                              <td>{{dt.年份}}</td>
                              <td>{{dt.規格}}</td>
                              <td>{{dt.業務折數}}</td>
                              <td>{{dt.贈品金額}}</td>
                              <td>{{dt.OrderCode}}</td>
                              <td>{{dt.補價數量}}</td>
                              <td>{{dt.補價金額}}</td>
                              <td>{{dt.補價合計}}</td>
                              <td>{{dt.重量}}</td>
                              <td>{{dt.扣抵}}</td>
                              <td>{{dt.自備車}}</td>
                              <td>{{dt.尺寸W}}</td>
                              <td>{{dt.尺寸H}}</td>
                              <td>{{dt.才數}}</td>
                              <td>{{dt.解析度}}</td>
                              <td>{{dt.冷錶}}</td>
                              <td>{{dt.匯率}}</td>
                              <td>{{dt.幣值}}</td>
                              <td>{{dt.幣值總額}}</td>
                              <td>{{dt.客戶編號}}</td>
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
import Saleform from '../components/form/saleform.vue'
export default {
  data() {
    return {
      tcur: 1, // 當前頁
      tall: 0 // 總分頁數
    }
  },
  created() {
    this.getPageData(1)
    setTimeout(() => {
      this.tall = this.GetSalePageCount
    }, 2000)
  },
  components: {
    Saleform
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetSaleList',
      'GetSaleDtList',
      'GetSalePageCount'
    ])
  },
  methods: {
    ...mapActions([
      'SaleList', // 獲取單頭資料
      'SaleDtList', // 獲取單身資料
      'SaleAddGet', // 銷貨單新增資料
      'SaleEditGet', // 銷貨單修改資料
      'SaleDelete', // 銷貨單刪除資料
      'ShowDiv',
      'HideDiv'
    ]),
    /* 獲取分頁資料 */
    getPageData(page) {
      this.SaleList({
        http: this.$http,
        model: {
          PageIndex: page,
          PageSize: 5
        }
      })
    },
    /* 獲取單身資料 */
    getdt(id) {
      this.SaleDtList({
        http: this.$http,
        id
      })
    },
    /* 修改按鈕 */
    get(id) {
      this.SaleEditGet({
        http: this.$http,
        id
      })
      this.ShowDiv()
    },
    /* 刪除按鈕 */
    del(id) {
      noty.Show('是否確定要刪除?', () => {
        this.SaleDelete({
          http: this.$http,
          id: id
        })
      })
    },
    /* 新增按鈕 */
    add() {
      this.isAdd = true
      this.SaleAddGet()
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
