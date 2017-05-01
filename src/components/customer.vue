<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>客戶列表</h1>
        <ol class="breadcrumb">
          <li class="active">Here</li>
        </ol>
      </section>
      <div class="myModal" v-show="isAdd">
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3 class="box-title">客戶列表</h3>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <div class="container" v-for="(customer,index) in GetCustomerList" v-if="index < 5">
                    <div class="panel panel-info">
                      <div class="panel-heading">
                        <h3 class="panel-title">
                          <strong>
                            客戶編號:<span class="badge bg-red">{{customer.客戶編號}}</span>
                            客戶名稱:<span class="badge bg-red">{{customer.客戶名稱}}</span>
                            客戶簡稱:<span class="badge bg-red">{{customer.客戶簡稱}}</span>
                            客戶簡稱:<span class="badge bg-red">{{customer.客戶簡稱}}</span>
                          </strong>
                          <button  @click="CustomerEditGet(customer.客戶編號)" type="button" class="btn bg-maroon btn-flat margin">修改</button>
                        </h3>
                      </div>
                      <div class="panel-body">
                        <div class="col-md-4">
                          <ul class="list-group">
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary">公司地址郵遞區號:</span> {{customer.公司地址郵遞區號|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">公司地址:</span> {{customer.公司地址|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">送貨地址郵遞區號:</span> {{customer.送貨地址郵遞區號|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">送貨地址:</span> {{customer.送貨地址|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">帳單地址郵遞區號:</span> {{customer.帳單地址郵遞區號|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">帳單地址:</span> {{customer.帳單地址|isEmpty}}</div></li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group">
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">發票地址郵遞區號:</span> {{customer.發票地址郵遞區號|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">發票地址:</span> {{customer.發票地址|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">公司電話:</span> {{customer.公司電話|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">客戶等級:</span> {{customer.客戶等級|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">連絡人１:</span> {{customer.連絡人１|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">連絡人１職稱:</span> {{customer.連絡人１職稱|isEmpty}}</div></li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group">
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">行動電話:</span> {{customer.行動電話|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">首次交易日:</span> {{customer.首次交易日|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">最近交易日:</span> {{customer.最近交易日|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">建檔時間:</span> {{customer.建檔時間|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">異動人: </span>{{customer.異動人|isEmpty}}</div></li>
                            <li class="list-group-item"><div style="text-align:left"><span class="label label-primary pull-left">異動時間: </span>{{customer.異動時間|isEmpty}}</div></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--table end-->
      </div>
      <!-- Main content end-->
    </div>
    <!-- Page content end-->
  </div>
</template>
<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import Noty from 'noty'
  export default {
    data() {
      return {
        group: {}
      }
    },
    created() {
      this.CustomerList({
        http: this.$http,
        router: this.$router
      })
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetCustomerList',
        'GetCustomer'
      ])
    },
    methods: {
      ...mapActions([
        'CustomerList',
        'AdminGroupAddGet',
        'AdminGroupAddPost',
        'AdminGroupEditGet',
        'AdminGroupEditPut',
        'AdminGroupDelete',
        'ShowDiv',
        'HideDiv'
      ]),
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
              self.AdminGroupEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
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
              self.AdminGroupDelete({
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
        this.AdminGroupAddGet(this.$http)
        this.ShowDiv()
      },
      doMethods(model) {
        if (!this.errors.any()) {
          if (model.AccountGroupId > 0) {
            this.AdminGroupEditPut({
              http: this.$http,
              model: model
            })
          } else {
            this.AdminGroupAddPost({
              http: this.$http,
              model: model
            })
          }
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
