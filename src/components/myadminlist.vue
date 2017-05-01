<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>後臺管理者列表</h1>
        <ol class="breadcrumb">
          <li class="active">Here</li>
        </ol>
      </section>
      <div class="myModal" v-show="isAdd">
        <div style="width:650px;height:350px;position:fixed;left:30%;z-index:777;">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-users"></i> 所屬群組</span>
            <select class="form-control" v-model="GetAdminAccount.AccountGroupName" name="selAdminGroup" id="selAdminGroup">
              <option >系統管理員</option>
              <option >team1</option>
              <option >team2</option>
            </select>
          </div>
          <div class="input-group" :class="{'has-error': errors.has('AccountName') }">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 登入名稱</span>
              <input v-validate="'required|alpha_num|min:6'" data-vv-delay="500" 
              class="form-control" :class="{'input': true, 'is-danger': errors.has('AccountName') }"
              name="AccountName" v-model="GetAdminAccount.AccountName" type="text"  placeholder="請輸入登入名稱">
              <span v-show="errors.has('AccountName')" class="help is-danger">{{ errors.first('AccountName') }}</span>
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i> 登入密碼修改</span>
            <input type="text" class="form-control" v-model="GetAdminAccount.AccountPasswordStr" placeholder="請輸入登入密碼">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-paw" aria-hidden="true"></i> 上次修改時間</span>
            <input type="text" class="form-control" readonly v-model="GetAdminAccount.AccountUpdateDate" >
          </div>
          <input type="hidden" v-model="GetAdminAccount.AccountId" />
          <div class="btn-group" role="group">
            <button @click="doMethods(GetAdminAccount)" class="btn bg-orange btn-flat" type="button">確定</button>
            <button @click="HideDiv" class="btn bg-maroon btn-flat " type="button">取消</button>
          </div>
        </div>
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div class="col-xs-12">
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3 class="box-title"></h3>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <div class="col-sm-12">
                    <table id="tbMember" class="table" role="grid">
                      <thead>
                        <tr role="row">
                          <th class="sorting" tabindex="0">所屬群組</th>
                          <th class="sorting" tabindex="0">登入帳號</th>
                          <th class="sorting" tabindex="0">帳號創建時間</th>
                          <th class="sorting" tabindex="0">帳號更新時間</th>
                          <th class="sorting" tabindex="0">
                            操作
                            <button @click="add()" class="btn bg-navy pull-right">新增</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" v-for="(admin,index) in GetAdminAccountList">
                          <td>{{admin.AccountGroupName}}</td>
                          <td>{{admin.AccountName}}</td>
                          <td>{{admin.AccountCreateDate}}</td>
                          <td>{{admin.AccountUpdateDate | isEmpty}}</td>
                          <td>
                              <a class="btn btn-app" @click="get(admin.AccountId)" >
                                <i class="fa fa-edit"></i> 修改
                              </a>
                              <a class="btn btn-app" @click="del(admin.AccountId)">
                                <i class="fa fa-times"></i> 刪除
                              </a>
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
        admin: {}
      }
    },
    created() {
      this.AdminAccountList({
        $http: this.$http,
        $router: this.$router
      })
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetAdminAccountList',
        'GetAdminAccount'
      ])
    },
    methods: {
      ...mapActions([
        'AdminAccountList',
        'AdminAccountAddGet',
        'AdminAccountAddPost',
        'AdminAccountEditGet',
        'AdminAccountEditPut',
        'AdminAccountDelete',
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
              self.AdminAccountEditGet({
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
              self.AdminAccountDelete({
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
        this.AdminAccountAddGet()
        this.ShowDiv()
      },
      doMethods(model) {
        if (!this.errors.any()) {
          if(model.AccountId > 0) {
            this.AdminAccountEditPut({
              http: this.$http,
              model: model
            })
          } else {
            this.AdminAccountAddPost({
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

  .even {
    --background-color: #95da8b;
  }

  .box-body {
    --overflow: auto;
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

.active {
  border: 1px solid red;
}
</style>
