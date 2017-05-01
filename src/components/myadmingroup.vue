<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>後臺群組列表</h1>
        <ol class="breadcrumb">
          <li class="active">Here</li>
        </ol>
      </section>
      <div class="myModal" v-show="isAdd">
        <div style="width:650px;height:350px;position:fixed;left:30%;top:70px;z-index:777;">
          <div class="input-group" :class="{'has-error': errors.has('AccountGroupName') }">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 群組名稱</span>
              <input v-validate="'required'" data-vv-delay="500" 
              class="form-control" :class="{'input': true, 'is-danger': errors.has('AccountGroupName') }"
              name="AccountGroupName" v-model="GetAdminGroup.AccountGroupName" type="text"  placeholder="請輸入群組名稱">
              <span v-show="errors.has('AccountGroupName')" class="help is-danger">{{ errors.first('AccountGroupName') }}</span>
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 群組權限</span>
            <template v-for="(item,index) in GetAdminGroup.menuGroup" >
              <div class="form-control" style="height:60px" v-if="item.MenuTopLevel == 0">
                  <div class="col-md-4">
                    <input type="checkbox" @change="tt(item.MenuId)" :id="item.MenuName" v-model="item.IsCheck" >
                    <label :for="item.MenuName">{{item.MenuName}} </label>
                  </div>
                  <div class="col-md-8">
                    <template v-for="(childItem,childIndex) in GetAdminGroup.menuGroup" >
                      <template v-if="childItem.MenuTopLevel != 0 && item.MenuId == childItem.MenuTopLevel">
                        <input type="checkbox" :id="childItem.MenuName" v-model="childItem.IsCheck">
                        <label class="label label-default" :for="childItem.MenuName">{{childItem.MenuName}} </label>
                      </template>
                    </template>
                  </div>
              </div>
            </template>
          </div>
          <input type="hidden" v-model="GetAdminGroup.AccountGroupId" />
          <div class="btn-group" role="group">
            <button @click="doMethods(GetAdminGroup)" class="btn bg-orange btn-flat" type="button">確定</button>
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
                          <th class="sorting" tabindex="0">群組編號</th>
                          <th class="sorting" tabindex="0">群組名稱</th>
                          <th class="sorting" tabindex="0">創建時間</th>
                          <th class="sorting" tabindex="0">
                            操作
                            <button @click="add()" class="btn bg-navy pull-right">新增</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" v-for="group in GetAdminGroupList">
                          <td>{{group.AccountGroupId}}</td>
                          <td>{{group.AccountGroupName}}</td>
                          <td>{{group.AccountGroupCreateDate}}</td>
                          <td>
                              <a class="btn btn-app" @click="get(group.AccountGroupId)" >
                                <i class="fa fa-edit"></i> 修改
                              </a>
                              <a class="btn btn-app" @click="del(group.AccountGroupId)">
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
        group: {}
      }
    },
    created() {
      this.AdminGroupList({
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
        'GetAdminGroupList',
        'GetAdminGroup'
      ])
    },
    methods: {
      ...mapActions([
        'AdminGroupList',
        'AdminGroupAddGet',
        'AdminGroupAddPost',
        'AdminGroupEditGet',
        'AdminGroupEditPut',
        'AdminGroupDelete',
        'ShowDiv',
        'HideDiv'
      ]),
      tt(id) {
        this.GetAdminGroup.menuGroup.forEach((element) => {
          if(element.MenuTopLevel === id && element.MenuTopLevel) element.IsCheck = false
        }, this)
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
          if(model.AccountGroupId > 0) {
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
