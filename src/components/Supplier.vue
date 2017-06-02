<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <div class="myModal" v-show="isAdd">
        <div style="width:950px;height:450px;position:absolute;left:25%;z-index:777;">
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">廠商編號</button>
            </div>
            <input class="form-control" name="廠商編號" v-model="GetSupplier.廠商編號" type="text" placeholder="請輸入廠商編號">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">廠商名稱</button>
            </div>
            <input class="form-control" name="廠商名稱" v-model="GetSupplier.廠商名稱" type="text" placeholder="請輸入廠商名稱">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">廠商簡稱</button>
            </div>
            <input class="form-control" name="廠商簡稱" v-model="GetSupplier.廠商簡稱" type="text" placeholder="請輸入廠商簡稱">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">公司地址郵遞區號</button>
            </div>
            <input class="form-control" name="公司地址郵遞區號" v-model="GetSupplier.公司地址郵遞區號" type="text" placeholder="請輸入公司地址郵遞區號">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">公司地址</button>
            </div>
            <input class="form-control" name="公司地址" v-model="GetSupplier.公司地址" type="text" placeholder="請輸入公司地址">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">工廠地址郵遞區號</button>
            </div>
            <input class="form-control" name="工廠地址郵遞區號" v-model="GetSupplier.工廠地址郵遞區號" type="text" placeholder="請輸入工廠地址郵遞區號">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">工廠地址</button>
            </div>
            <input class="form-control" name="工廠地址" v-model="GetSupplier.工廠地址" type="text" placeholder="請輸入工廠地址">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">發票地址郵遞區號</button>
            </div>
            <input class="form-control" name="發票地址郵遞區號" v-model="GetSupplier.發票地址郵遞區號" type="text" placeholder="請輸入發票地址郵遞區號">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">發票地址</button>
            </div>
            <input class="form-control" name="發票地址" v-model="GetSupplier.發票地址" type="text" placeholder="請輸入發票地址">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">公司電話</button>
            </div>
            <input class="form-control" name="公司電話" v-model="GetSupplier.公司電話" type="text" placeholder="請輸入公司電話">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">公司傳真</button>
            </div>
            <input class="form-control" name="公司傳真" v-model="GetSupplier.公司傳真" type="text" placeholder="請輸入公司傳真">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">統一編號</button>
            </div>
            <input class="form-control" name="統一編號" v-model="GetSupplier.統一編號" type="text" placeholder="請輸入統一編號">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">發票抬頭</button>
            </div>
            <input class="form-control" name="發票抬頭" v-model="GetSupplier.發票抬頭" type="text" placeholder="請輸入發票抬頭">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">廠商等級</button>
            </div>
            <input class="form-control" name="廠商等級" v-model="GetSupplier.廠商等級" type="text" placeholder="請輸入廠商等級">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">負責人</button>
            </div>
            <input class="form-control" name="負責人" v-model="GetSupplier.負責人" type="text" placeholder="請輸入負責人">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１</button>
            </div>
            <input class="form-control" name="連絡人１" v-model="GetSupplier.連絡人１" type="text" placeholder="請輸入連絡人１">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１職稱</button>
            </div>
            <input class="form-control" name="連絡人１職稱" v-model="GetSupplier.連絡人１職稱" type="text" placeholder="請輸入連絡人１職稱">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１身份證號</button>
            </div>
            <input class="form-control" name="連絡人１身份證號" v-model="GetSupplier.連絡人１身份證號" type="text" placeholder="請輸入連絡人１身份證號">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１個人特質</button>
            </div>
            <input class="form-control" name="連絡人１個人特質" v-model="GetSupplier.連絡人１個人特質" type="text" placeholder="請輸入連絡人１個人特質">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１連絡電話</button>
            </div>
            <input class="form-control" name="連絡人１連絡電話" v-model="GetSupplier.連絡人１連絡電話" type="text" placeholder="請輸入連絡人１連絡電話">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１生日</button>
            </div>
            <input class="form-control" name="連絡人１生日" v-model="GetSupplier.連絡人１生日" type="text" placeholder="請輸入連絡人１生日">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人１電子信箱</button>
            </div>
            <input class="form-control" name="連絡人１電子信箱" v-model="GetSupplier.連絡人１電子信箱" type="text" placeholder="請輸入連絡人１電子信箱">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２</button>
            </div>
            <input class="form-control" name="連絡人２" v-model="GetSupplier.連絡人２" type="text" placeholder="請輸入連絡人２">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２職稱</button>
            </div>
            <input class="form-control" name="連絡人２職稱" v-model="GetSupplier.連絡人２職稱" type="text" placeholder="請輸入連絡人２職稱">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２身份證號</button>
            </div>
            <input class="form-control" name="連絡人２身份證號" v-model="GetSupplier.連絡人２身份證號" type="text" placeholder="請輸入連絡人２身份證號">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２個人特質</button>
            </div>
            <input class="form-control" name="連絡人２個人特質" v-model="GetSupplier.連絡人２個人特質" type="text" placeholder="請輸入連絡人２個人特質">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２連絡電話</button>
            </div>
            <input class="form-control" name="連絡人２連絡電話" v-model="GetSupplier.連絡人２連絡電話" type="text" placeholder="請輸入連絡人２連絡電話">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２生日</button>
            </div>
            <input class="form-control" name="連絡人２生日" v-model="GetSupplier.連絡人２生日" type="text" placeholder="請輸入連絡人２生日">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡人２電子信箱</button>
            </div>
            <input class="form-control" name="連絡人２電子信箱" v-model="GetSupplier.連絡人２電子信箱" type="text" placeholder="請輸入連絡人２電子信箱">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">連絡事項</button>
            </div>
            <input class="form-control" name="連絡事項" v-model="GetSupplier.連絡事項" type="text" placeholder="請輸入連絡事項">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">營業項目</button>
            </div>
            <input class="form-control" name="營業項目" v-model="GetSupplier.營業項目" type="text" placeholder="請輸入營業項目">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">資本額</button>
            </div>
            <input class="form-control" name="資本額" v-model="GetSupplier.資本額" type="text" placeholder="請輸入資本額">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">帳款額度</button>
            </div>
            <input class="form-control" name="帳款額度" v-model="GetSupplier.帳款額度" type="text" placeholder="請輸入帳款額度">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">信用額度</button>
            </div>
            <input class="form-control" name="信用額度" v-model="GetSupplier.信用額度" type="text" placeholder="請輸入信用額度">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">付款方式</button>
            </div>
            <input class="form-control" name="付款方式" v-model="GetSupplier.付款方式" type="text" placeholder="請輸入付款方式">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">折數</button>
            </div>
            <input class="form-control" name="折數" v-model="GetSupplier.折數" type="text" placeholder="請輸入折數">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">使用折數</button>
            </div>
            <input class="form-control" name="使用折數" v-model="GetSupplier.使用折數" type="text" placeholder="請輸入使用折數">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">銀行帳號</button>
            </div>
            <input class="form-control" name="銀行帳號" v-model="GetSupplier.銀行帳號" type="text" placeholder="請輸入銀行帳號">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">銀行名稱</button>
            </div>
            <input class="form-control" name="銀行名稱" v-model="GetSupplier.銀行名稱" type="text" placeholder="請輸入銀行名稱">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">帳款科目</button>
            </div>
            <input class="form-control" name="帳款科目" v-model="GetSupplier.帳款科目" type="text" placeholder="請輸入帳款科目">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">票據科目</button>
            </div>
            <input class="form-control" name="票據科目" v-model="GetSupplier.票據科目" type="text" placeholder="請輸入票據科目">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">結帳日</button>
            </div>
            <input class="form-control" name="結帳日" v-model="GetSupplier.結帳日" type="text" placeholder="請輸入結帳日">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">預付款</button>
            </div>
            <input class="form-control" name="預付款" v-model="GetSupplier.預付款" type="text" placeholder="請輸入預付款">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">未清款</button>
            </div>
            <input class="form-control" name="未清款" v-model="GetSupplier.未清款" type="text" placeholder="請輸入未清款">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">首次交易日</button>
            </div>
            <input class="form-control" name="首次交易日" v-model="GetSupplier.首次交易日" type="text" placeholder="請輸入首次交易日">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">最近交易日</button>
            </div>
            <input class="form-control" name="最近交易日" v-model="GetSupplier.最近交易日" type="text" placeholder="請輸入最近交易日">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">備註</button>
            </div>
            <input class="form-control" name="備註" v-model="GetSupplier.備註" type="text" placeholder="請輸入備註">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">建檔人</button>
            </div>
            <input class="form-control" name="建檔人" v-model="GetSupplier.建檔人" type="text" placeholder="請輸入建檔人">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">建檔時間</button>
            </div>
            <input class="form-control" name="建檔時間" v-model="GetSupplier.建檔時間" type="text" placeholder="請輸入建檔時間">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">異動人</button>
            </div>
            <input class="form-control" name="異動人" v-model="GetSupplier.異動人" type="text" placeholder="請輸入異動人">
          </div>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">異動時間</button>
            </div>
            <input class="form-control" name="異動時間" v-model="GetSupplier.異動時間" type="text" placeholder="請輸入異動時間">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">狀態</button>
            </div>
            <input class="form-control" name="狀態" v-model="GetSupplier.狀態" type="text" placeholder="請輸入狀態">
          </div>
          <input type="hidden" v-model="GetSupplier.廠商編號" />
          <div class="btn-group">
            <button @click="doMethods(GetSupplier)" class="btn bg-orange btn-flat" type="button">確定</button>
            <button @click="HideDiv" class="btn bg-maroon btn-flat " type="button">取消</button>
          </div>
        </div>
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3>廠商 <button @click="add()" class="btn btn-info pull-right">新增</button></h3>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" v-for="(supplier,index) in GetSupplierList">
                  <div class="box-header ">
                    <table class="table table-striped " data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <!-- 標題  -->
                        <tr>
                          <th>
                            <div class="col-md-6">
                              <button @click="get(supplier.廠商編號)" class="btn btn-block btn-social btn-facebook"><i class="fa fa-edit"></i>修改</button>
                            </div>
                            <div class="col-md-6">
                              <button @click="del(supplier.廠商編號)" class="btn btn-block btn-social btn-flickr"><i class="fa fa-times"></i>刪除</button>
                            </div>
                          </th>
                        </tr>
                        <!-- 內容 -->
                        <tr>
                          <td style="border:2px dashed #7bb4d5">
                            <div class="col-md-3">
                              <ul class="list-unstyled">
                                <li><b>廠商編號</b> : {{supplier.廠商編號}}</li>
                                <li><b>廠商名稱</b> : {{supplier.廠商名稱|isEmpty}}</li>
                                <li><b>廠商簡稱</b> : {{supplier.廠商簡稱|isEmpty}}</li>
                                <li><b>公司地址郵遞區號</b> : {{supplier.公司地址郵遞區號|isEmpty}}</li>
                                <li><b>公司地址</b> : {{supplier.公司地址|isEmpty}}</li>
                                <li><b>工廠地址郵遞區號</b> : {{supplier.工廠地址郵遞區號|isEmpty}}</li>
                                <li><b>工廠地址</b> : {{supplier.工廠地址|isEmpty}}</li>
                                <li><b>發票地址郵遞區號</b> : {{supplier.發票地址郵遞區號|isEmpty}}</li>
                                <li><b>發票地址</b> : {{supplier.發票地址|isEmpty}}</li>
                                <li><b>公司電話</b> : {{supplier.公司電話|isEmpty}}</li>
                                <li><b>公司傳真</b> : {{supplier.公司傳真|isEmpty}}</li>
                                <li><b>統一編號</b> : {{supplier.統一編號|isEmpty}}</li>
                                <li><b>發票抬頭</b> : {{supplier.發票抬頭}}</li>
                                <li><b>廠商等級</b> : {{supplier.廠商等級}}</li>
                              </ul>
                            </div>
                            <div class="col-md-3">
                              <ul class="list-unstyled">
                                <li><b>連絡人１</b> : {{supplier.連絡人１|isEmpty}}</li>
                                <li><b>連絡人１職稱</b> : {{supplier.連絡人１職稱|isEmpty}}</li>
                                <li><b>連絡人１身份證號</b> : {{supplier.連絡人１身份證號|isEmpty}}</li>
                                <li><b>連絡人１生日</b> : {{supplier.連絡人１生日|isEmpty}}</li>
                                <li><b>連絡人１個人特質</b> : {{supplier.連絡人１個人特質|isEmpty}}</li>
                                <li><b>連絡人１連絡電話</b> : {{supplier.連絡人１連絡電話|isEmpty}}</li>
                                <li><b>連絡人１電子信箱</b> : {{supplier.連絡人１電子信箱|isEmpty}}</li>
                                <li><b>連絡人２</b> : {{supplier.連絡人２|isEmpty}}</li>
                                <li><b>連絡人２職稱</b> : {{supplier.連絡人２職稱|isEmpty}}</li>
                                <li><b>連絡人２身份證號</b> : {{supplier.連絡人２身份證號|isEmpty}}</li>
                                <li><b>連絡人２生日</b> : {{supplier.連絡人２生日|isEmpty}}</li>
                                <li><b>連絡人２個人特質</b> : {{supplier.連絡人２個人特質|isEmpty}}</li>
                                <li><b>連絡人２連絡電話</b> : {{supplier.連絡人２連絡電話|isEmpty}}</li>
                                <li><b>連絡人２電子信箱</b> : {{supplier.連絡人２電子信箱|isEmpty}}</li>
                              </ul>
                            </div>
                            <div class="col-md-3">
                              <ul class="list-unstyled">
                                <li><b>負責人</b> : {{supplier.負責人}}</li>
                                <li><b>付款方式</b> : {{supplier.付款方式}}</li>
                                <li><b>折數</b> : {{supplier.折數}}</li>
                                <li><b>使用折數</b> : {{supplier.使用折數|isEmpty}}</li>
                                <li><b>銀行帳號</b> : {{supplier.銀行帳號|isEmpty}}</li>
                                <li><b>銀行名稱</b> : {{supplier.銀行名稱|isEmpty}}</li>
                                <li><b>帳款科目</b> : {{supplier.帳款科目|isEmpty}}</li>
                                <li><b>票據科目:</b> {{supplier.票據科目|isEmpty}}</li>
                                <li><b>結帳日:</b> {{supplier.結帳日|isEmpty}}</li>
                                <li><b>預收款: </b>{{supplier.預收款|isEmpty}}</li>
                                <li><b>未清款:</b> {{supplier.未清款|isEmpty}}</li>
                                <li><b>首次交易日:</b> {{supplier.首次交易日|isEmpty}}</li>
                                <li><b>最近交易日:</b> {{supplier.最近交易日|isEmpty}}</li>
                                <li><b>備註: </b>{{supplier.備註|isEmpty}}</li>
                              </ul>
                            </div>
                            <div class="col-md-3">
                              <ul class="list-unstyled">
                                <li><b>合約起始日:</b> {{supplier.合約起始日|isEmpty}}</li>
                                <li><b>連絡事項</b> : {{supplier.連絡事項|isEmpty}}</li>
                                <li><b>營業項目</b> : {{supplier.營業項目|isEmpty}}</li>
                                <li><b>資本額</b> : {{supplier.資本額|isEmpty}}</li>
                                <li><b>帳款額度</b> : {{supplier.帳款額度|isEmpty}}</li>
                                <li><b>信用額度</b> : {{supplier.信用額度|isEmpty}}</li>
                                <li><b>建檔人: </b>{{supplier.建檔人|isEmpty}}</li>
                                <li><b>建檔時間:</b> {{supplier.建檔時間|isEmpty}}</li>
                                <li><b>異動人: </b>{{supplier.異動人|isEmpty}}</li>
                                <li><b>異動時間: </b>{{supplier.異動時間|isEmpty}}</li>
                                <li><b>狀態:</b> {{supplier.狀態|isEmpty}}</li>
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
export default {
  data() {
    return {
      tcur: 1,
      tall: 0,
      supplierAdd: false
    }
  },
  created() {
    this.getPageData(1)
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetSupplierList',
      'GetSupplierDtList',
      'GetSupplier',
      'GetSupplierPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'SupplierList',
      'SupplierDtList',
      'SupplierAddGet',
      'SupplierAddPost',
      'SupplierEditGet',
      'SupplierEditPut',
      'SupplierDelete',
      'ShowDiv',
      'HideDiv'
    ]),
    getPageData(page) {
      this.SupplierList({
        http: this.$http,
        model: {
          PageIndex: page,
          PageSize: 5
        }
      })
      setTimeout(() => {
        this.tall = this.GetSupplierPageCount
        this.tcur = page
      }, 2000)
    },
    get(id) {
      this.supplierAdd = false
      this.SupplierEditGet({
        http: this.$http,
        id
      })
      this.ShowDiv()
    },
    del(id) {
      alert(this.tcur)
      noty.Show('是否確定要刪除?', () => {
        this.SupplierDelete({
          http: this.$http,
          id: id
        })
      })
    },
    add() {
      this.supplierAdd = true
      this.SupplierAddGet(this.$http)
      this.ShowDiv()
    },
    doMethods(model) {
      if (!this.supplierAdd) {
        this.SupplierEditPut({
          http: this.$http,
          model
        })
      } else {
        this.SupplierAddPost({
          http: this.$http,
          model: model
        })
      }
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
