<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>公司資料</h1>
        <ol class="breadcrumb">
          <li class="active">Here</li>
        </ol>
      </section>
      <div class="myModal" v-show="isAdd">
        <div style="width:650px;height:350px;position:fixed;left:30%;z-index:777;">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 公司編號</span>
            <input class="form-control" name="公司編號" 
            v-model="GetCompany.公司編號" type="text"  placeholder="請輸入公司編號">
          </div>
          <div class="input-group" :class="{'has-error': errors.has('公司名稱') }">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 公司名稱</span>
              <input class="form-control" name="公司名稱" 
              v-model="GetCompany.公司名稱" type="text" placeholder="請輸入公司名稱">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 公司簡稱</span>
              <input class="form-control" name="公司簡稱" 
              v-model="GetCompany.公司簡稱" type="text" placeholder="請輸入公司簡稱">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 螢幕顯示</span>
              <input class="form-control" name="螢幕顯示" 
              v-model="GetCompany.螢幕顯示" type="text" placeholder="請輸入螢幕顯示">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 報表抬頭</span>
              <input class="form-control" name="報表抬頭" 
              v-model="GetCompany.報表抬頭" type="text" placeholder="請輸入報表抬頭">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 郵遞區號</span>
              <input class="form-control" name="郵遞區號" 
              v-model="GetCompany.郵遞區號" type="text" placeholder="請輸入郵遞區號">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 地址</span>
              <input class="form-control" name="地址" 
              v-model="GetCompany.地址" type="text" placeholder="請輸入地址">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 電話</span>
              <input class="form-control" name="電話" 
              v-model="GetCompany.電話" type="text" placeholder="請輸入電話">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 傳真</span>
              <input class="form-control" name="傳真" 
              v-model="GetCompany.傳真" type="text" placeholder="請輸入傳真">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 負責人</span>
              <input class="form-control" name="負責人" 
              v-model="GetCompany.負責人" type="text" placeholder="請輸入負責人">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 統一編號</span>
              <input class="form-control" name="統一編號" 
              v-model="GetCompany.統一編號" type="text" placeholder="請輸入統一編號">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 稅籍編號</span>
              <input class="form-control" name="稅籍編號" 
              v-model="GetCompany.稅籍編號" type="text" placeholder="請輸入稅籍編號">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 網址</span>
              <input class="form-control" name="網址" 
              v-model="GetCompany.網址" type="text" placeholder="請輸入網址">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 電子信箱</span>
              <input class="form-control" name="電子信箱" 
              v-model="GetCompany.電子信箱" type="text" placeholder="請輸入電子信箱">
          </div>
          <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 備註</span>
              <input class="form-control" name="備註" 
              v-model="GetCompany.備註" type="text" placeholder="請輸入備註">
          </div>
          <input type="hidden" v-model="GetCompany.識別碼" />
          <div class="btn-group">
            <button @click="doMethods(GetCompany)" class="btn bg-orange btn-flat" type="button">確定</button>
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
                  <div class="col-md-6">
                    <ul class="list-group">
                      <li class="list-group-item">公司編號: {{GetCompany.公司編號|isEmpty}}</li>
                      <li class="list-group-item">公司名稱: {{GetCompany.公司名稱}}</li>
                      <li class="list-group-item">公司簡稱: {{GetCompany.公司簡稱}}</li>
                      <li class="list-group-item">螢幕顯示: {{GetCompany.螢幕顯示}}</li>
                      <li class="list-group-item">報表抬頭: {{GetCompany.報表抬頭}}</li>
                      <li class="list-group-item">郵遞區號: {{GetCompany.郵遞區號}}</li>
                      <li class="list-group-item">地址: {{GetCompany.地址}}</li>
                      <li class="list-group-item">電話: {{GetCompany.電話|isEmpty}}</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-group">
                      <li class="list-group-item">傳真: {{GetCompany.傳真}}</li>
                      <li class="list-group-item">負責人: {{GetCompany.負責人}}</li>
                      <li class="list-group-item">統一編號: {{GetCompany.統一編號}}</li>
                      <li class="list-group-item">稅籍編號: {{GetCompany.稅籍編號}}</li>
                      <li class="list-group-item">網址: {{GetCompany.網址}}</li>
                      <li class="list-group-item">電子信箱: {{GetCompany.電子信箱}}</li>
                      <li class="list-group-item">備註: {{GetCompany.備註}}</li>
                    </ul>
                  </div>
                  <button type="button" @click="get(GetCompany.識別碼)" class="btn btn-danger btn-block">修改</button>
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
    created() {
      this.CompanyList({
        http: this.$http
      })
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetCompany'
      ])
    },
    methods: {
      ...mapActions([
        'CompanyList',
        'CompanyEditGet',
        'CompanyEditPut',
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
              self.CompanyEditGet({
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
      doMethods(model) {
        if(model.識別碼 > 0) {
          this.CompanyEditPut({
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
