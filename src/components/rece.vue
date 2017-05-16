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
              <h3>收款單 <button @click="add()" class="btn btn-info pull-right">新增</button></h3>
            </div>
            <div class="box-body" >
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(re,index) in GetReceList" >
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
                          <th>客戶編號</th>
                          <th>現金</th>
                          <th>支票</th>
                          <th>匯款金額</th>
                          <th>其他金額</th>
                          <th>取用預收</th>
                          <th>累入預收</th>
                          <th>沖抵帳款</th>
                          <th>稅額</th>
                          <th>折讓</th>
                          <th>支票號碼</th>
                          <th>製單人員</th>
                          <th>備註</th>
                          <th>建檔人</th>
                          <th>建檔時間</th>
                        </tr>
                        <tr>
                          <td><i class="fa fa-refresh"></i></td>
                          <td>{{re.單據日期|isEmpty}}</td>
                          <td>{{re.單據編號|isEmpty}}</td>
                          <td>{{re.客戶編號|isEmpty}}</td>
                          <td>{{re.現金|decimalComma|isEmpty}}</td>
                          <td>{{re.支票|decimalComma|isEmpty}}</td>
                          <td>{{re.匯款金額|decimalComma|isEmpty}}</td>
                          <td>{{re.其他金額|decimalComma|isEmpty}}</td>
                          <td>{{re.取用預收|decimalComma|isEmpty}}</td>
                          <td>{{re.累入預收|decimalComma|isEmpty}}</td>
                          <td>{{re.沖抵帳款|decimalComma|isEmpty}}</td>
                          <td>{{re.稅額|decimalComma|isEmpty}}</td>
                          <td>{{re.折讓|decimalComma|isEmpty}}</td>
                          <td>{{re.支票號碼|isEmpty}}</td>
                          <td>{{re.製單人員|isEmpty}}</td>
                          <td>{{re.備註|isEmpty}}</td>
                          <td>{{re.建檔人|isEmpty}}</td>
                          <td>{{re.建檔時間|isEmpty}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetReceDtList.length > 0" >
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
                              <th>銷貨日期</th>
                              <th>銷貨單號</th>
                              <th>類別</th>
                              <th>折讓</th>
                              <th>沖帳金額</th>
                              <th>備註</th>
                              <th>取用預收</th>
                              <th>支票</th>
                              <th>現金</th>
                              <th>匯款金額</th>
                              <th>其他金額</th>
                              <th>稅額</th>
                              <th>退貨金額</th>
                            </tr>
                            <tr v-for="(dt,tindex) in GetReceDtList" key="dt.識別碼">
                              <td><i class="fa fa-info-circle"></i></td>
                              <td>{{dt.識別碼|isEmpty}}</td>
                              <td>{{dt.單據日期|isEmpty}}</td>
                              <td>{{dt.單據編號|isEmpty}}</td>
                              <td>{{dt.銷貨日期|isEmpty}}</td>
                              <td>{{dt.銷貨單號|isEmpty}}</td>
                              <td>{{dt.類別|isEmpty}}</td>
                              <td>{{dt.折讓|decimalComma|isEmpty}}</td>
                              <td>{{dt.沖帳金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.備註|isEmpty}}</td>
                              <td>{{dt.取用預收|decimalComma|isEmpty}}</td>
                              <td>{{dt.支票|decimalComma|isEmpty}}</td>
                              <td>{{dt.現金|decimalComma|isEmpty}}</td>
                              <td>{{dt.匯款金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.其他金額|decimalComma|isEmpty}}</td>
                              <td>{{dt.稅額|decimalComma|isEmpty}}</td>
                              <td>{{dt.退貨金額|decimalComma|isEmpty}}</td>
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
        ReceAdd: false,
        headerIndex: 0
      }
    },
    created() {
      this.getPageData(1)
      setTimeout(() => {
        this.tall = this.GetRecePageCount
      }, 2000)
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetReceList',
        'GetReceDtList',
        'GetRece',
        'GetRecePageCount'
      ])
    },
    methods: {
      ...mapActions([
        'ReceList',
        'ReceDtList',
        'ReceAddGet',
        'ReceAddPost',
        'ReceEditGet',
        'ReceEditPut',
        'ReceDelete',
        'ShowDiv',
        'HideDiv'
      ]),
      getPageData(page) {
        this.ReceList({
          http: this.$http,
          model: {
            PageIndex: page,
            PageSize: 5
          }
        })
      },
      getdt(id) {
        this.ReceDtList({
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
              self.ReceAdd = false
              self.ReceEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              this.ReceAdd = false
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
              self.ReceDelete({
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
        this.ReceAdd = true
        this.ReceAddGet(this.$http)
        this.ShowDiv()
      },
      doMethods(model) {
        if (!this.ReceAdd) {
          this.ReceEditPut({
            http: this.$http,
            model: model
          })
        } else {
          this.ReceAddPost({
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
