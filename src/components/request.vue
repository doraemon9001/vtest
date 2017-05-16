<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <div class="myModal" v-show="isAdd">
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3>請款單 <button @click="add()" class="btn btn-info pull-right">新增</button></h3>
            </div>
            <div class="box-body" >
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(re,index) in GetRequestList" >
                  <div class="box-header with-border"style="min-width:3500px">
                    <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                    <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <tr>
                          <th>
                            <a :href="index|anchorHash" data-toggle="collapse" data-parent="#accordion" @click="getdt(re.單據編號)">詳細資料</a>
                          </th>
                          <th>單據日期</th>
                          <th>單據編號</th>
                          <th>請款人編號</th>
                          <th>客戶名稱</th>
                          <th>前期未收</th>
                          <th>本期稅額</th>
                          <th>本期應收</th>
                          <th>本年度交易</th>
                          <th>折讓</th>
                          <th>稅額</th>
                          <th>其它</th>
                          <th>請款金額</th>
                          <th>發票號碼1</th>
                          <th>發票金額1</th>
                          <th>發票號碼2</th>
                          <th>發票金額2</th>
                          <th>製單人員</th>
                          <th>備註</th>
                          <th>建檔人</th>
                          <th>建檔時間</th>
                          <th>異動人</th>
                          <th>異動時間</th>
                          <th>銷貨日期起</th>
                          <th>銷貨日期迄</th>
                          <th>結帳日期起</th>
                          <th>結帳日期迄</th>
                        </tr>
                        <tr>
                          <td><i class="fa fa-refresh"></i></td>
                          <td>{{re.單據日期|isEmpty}}</td>
                          <td>{{re.單據編號|isEmpty}}</td>
                          <td>{{re.請款人編號|isEmpty}}</td>
                          <td>{{re.客戶名稱|isEmpty}}</td>
                          <td>{{re.前期未收|decimalComma|isEmpty}}</td>
                          <td>{{re.本期稅額|decimalComma|isEmpty}}</td>
                          <td>{{re.本期應收|decimalComma|isEmpty}}</td>
                          <td>{{re.本年度交易|decimalComma|isEmpty}}</td>
                          <td>{{re.折讓|decimalComma|isEmpty}}</td>
                          <td>{{re.稅額|decimalComma|isEmpty}}</td>
                          <td>{{re.其它|decimalComma|isEmpty}}</td>
                          <td>{{re.請款金額|decimalComma|isEmpty}}</td>
                          <td>{{re.發票號碼1|isEmpty}}</td>
                          <td>{{re.發票金額1|isEmpty}}</td>
                          <td>{{re.發票號碼2|isEmpty}}</td>
                          <td>{{re.發票金額2|isEmpty}}</td>
                          <td>{{re.製單人員|isEmpty}}</td>
                          <td>{{re.備註|isEmpty}}</td>
                          <td>{{re.建檔人|isEmpty}}</td>
                          <td>{{re.建檔時間|isEmpty}}</td>
                          <td>{{re.異動人|isEmpty}}</td>
                          <td>{{re.異動時間|isEmpty}}</td>
                          <td>{{re.銷貨日期起|isEmpty}}</td>
                          <td>{{re.銷貨日期迄|isEmpty}}</td>
                          <td>{{re.結帳日期起|isEmpty}}</td>
                          <td>{{re.結帳日期迄|isEmpty}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetRequestDtList.length > 0" >
                      <div class="box-body" :id="index" >
                        <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                        <table class="table table-striped table-hover"  >
                          <tbody>
                            <tr>
                              <th>
                                <a :href="index|anchorHash" data-toggle="collapse" >關閉</a>
                              </th>
                              <th>識別碼</th>
                              <th>單據日期</th>
                              <th>單據編號</th>
                              <th>客戶編號</th>
                              <th>客戶名稱</th>
                              <th>銷貨日期</th>
                              <th>銷貨單號</th>
                              <th>銷貨類別</th>
                              <th>單據金額</th>
                              <th>應收金額</th>
                              <th>已收金額</th>
                              <th>未收金額</th>
                            </tr>
                            <tr v-for="(dt,tindex) in GetRequestDtList" key="dt.識別碼">
                              <td><i class="fa fa-info-circle"></i></td>
                              <td>{{dt.識別碼|isEmpty}}</td>
                              <td>{{dt.單據日期|isEmpty}}</td>
                              <td>{{dt.單據編號|isEmpty}}</td>
                              <td>{{dt.客戶編號|isEmpty}}</td>
                              <td>{{dt.客戶名稱|isEmpty}}</td>
                              <td>{{dt.銷貨日期|isEmpty}}</td>
                              <td>{{dt.銷貨單號|isEmpty}}</td>
                              <td>{{dt.銷貨類別|isEmpty}}</td>
                              <td>{{dt.單據金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.應收金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.已收金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.未收金額|decimalComma|isEmpty}}</td>
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
  import Noty from 'noty'
  export default {
    data() {
      return {
        tcur: 1,
        tall: 0,
        requestAdd: false,
        headerIndex: 0
      }
    },
    created() {
      this.getPageData(1)
      setTimeout(() => {
        this.tall = this.GetRequestPageCount
      }, 2000)
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetRequestList',
        'GetRequestDtList',
        'GetRequest',
        'GetRequestPageCount'
      ])
    },
    methods: {
      ...mapActions([
        'RequestList',
        'RequestDtList',
        'RequestAddGet',
        'RequestAddPost',
        'RequestEditGet',
        'RequestEditPut',
        'RequestDelete',
        'ShowDiv',
        'HideDiv'
      ]),
      getPageData(page) {
        this.RequestList({
          http: this.$http,
          model: {
            PageIndex: page,
            PageSize: 5
          }
        })
      },
      getdt(id) {
        this.RequestDtList({
          http: this.$http,
          id
        })
      },
      get(id) {
        let self = this
        let n = new Noty({
          layout: 'topCenter',
          theme: 'metroui',
          closeWith: ['butto'],
          text: `
            <div style="width:200px;">
              <div style="margin:20px;width:200px;"><h3>是否確定要修改?</h3></div>
            </div>
          `,
          buttons: [
            Noty.button('YES', 'btn btn-success', function () {
              self.requestAdd = false
              self.RequestEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              this.requestAdd = false
              n.close()
            })
          ]
        }).show()
      },
      del(id) {
        let self = this
        let n = new Noty({
          layout: 'topCenter',
          theme: 'metroui',
          closeWith: ['butto'],
          text: `
            <div style="width:200px;">
              <div style="margin:20px;width:200px;"><h3>是否確定要刪除?</h3></div>
            </div>
          `,
          buttons: [
            Noty.button('YES', 'btn btn-success', function () {
              self.RequestDelete({
                http: self.$http,
                id: id
              })
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              n.close()
            })
          ]
        }).show()
      },
      add() {
        this.requestAdd = true
        this.RequestAddGet(this.$http)
        this.ShowDiv()
      },
      doMethods(model) {
        if (!this.requestAdd) {
          this.RequestEditPut({
            http: this.$http,
            model: model
          })
        } else {
          this.RequestAddPost({
            http: this.$http,
            model: model
          })
        }
      }
    }
  }

</script>
<style scoped>
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
