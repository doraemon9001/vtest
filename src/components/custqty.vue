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
          <div class="box box-primary">
            <div class="box-header">
              <h3>寄庫領回 <button @click="add()" class="btn btn-info pull-right">新增</button></h3>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" v-for="(data,index) in GetCustQtyList">
                  <div class="box-header with-border">
                    <h4 class="box-title">
                      <a data-toggle="collapse" data-parent="#accordion" @click="getdt(data.客戶編號)" :href="index|anchorHash">{{data.客戶編號}}</a>
                    </h4>
                  </div>
                  <div :id="index" class="panel-collapse collapse">
                    <div class="box-body">
                      <table class="table table-striped table-hover" v-if="GetCustQtyDtList.length > 0">
                        <tbody>
                          <tr>
                            <th>銷貨單號</th>
                            <th>倉庫編號</th>
                            <th>貨品編號</th>
                            <th>寄庫量</th>
                            <th>領回量</th>
                            <th>狀態</th>
                            <th>操作</th>
                          </tr>
                          <tr v-for="cust in GetCustQtyDtList">
                            <td>{{cust.銷貨單號}}</td>
                            <td>{{cust.倉庫編號}}</td>
                            <td>{{cust.貨品編號}}</td>
                            <td>{{cust.寄庫量}}</td>
                            <td>{{cust.領回量}}</td>
                            <td>{{cust.狀態}}</td>
                            <td>
                              <div class="btn-group">
                                <button type="button" class="btn bg-navy ">修改</button>
                                <button type="button" class="btn bg-maroon ">刪除</button>
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
      saleAdd: false
    }
  },
  created() {
    this.getPageData(1)
    setTimeout(() => {
      this.tall = this.GetCustQtyPageCount
    }, 2000)
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetCustQtyList',
      'GetCustQtyDtList',
      'GetCustQty',
      'GetCustQtyPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'CustQtyList',
      'CustQtyDtList',
      'CustQtyAddGet',
      'CustQtyAddPost',
      'CustQtyEditGet',
      'CustQtyEditPut',
      'CustQtyDelete',
      'ShowDiv',
      'HideDiv'
    ]),
    getPageData(page) {
      this.CustQtyList({
        http: this.$http,
        model: {
          PageIndex: page,
          PageSize: 5
        }
      })
    },
    getdt(id) {
      this.CustQtyDtList({
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
          Noty.button('YES', 'btn btn-success', function() {
            self.saleAdd = false
            self.CustQtyEditGet({
              http: self.$http,
              id
            })
            self.ShowDiv()
            n.close()
          }),
          Noty.button('NO', 'btn btn-danger', function() {
            this.saleAdd = false
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
          Noty.button('YES', 'btn btn-success', function() {
            self.CustQtyDelete({
              http: self.$http,
              id: id
            })
            n.close()
          }),
          Noty.button('NO', 'btn btn-danger', function() {
            n.close()
          })
        ]
      }).show()
    },
    add() {
      this.saleAdd = true
      this.CustQtyAddGet(this.$http)
      this.ShowDiv()
    },
    doMethods(model) {
      if (!this.saleAdd) {
        this.CustQtyEditPut({
          http: this.$http,
          model: model
        })
      } else {
        this.CustQtyAddPost({
          http: this.$http,
          model: model
        })
      }
    }
  }
}

</script>
<style scoped>
table>tbody>tr {
  /*background-color: #a4a4a4;*/
  font-family: '微軟正黑體';
  font-size: 16px;
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
