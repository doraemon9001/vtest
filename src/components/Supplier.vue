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
            <div class="box-body" >
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(supplier,index) in GetSupplierList" v-if="index < 5">
                  <div class="box-header with-border"style="min-width:4500px">
                        <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                    <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <tr>
                          <th>廠商編號</th>
                          <th>廠商名稱</th>
                          <th>廠商簡稱</th>
                          <th>公司地址郵遞區號</th>
                          <th>公司地址</th>
                          <th>工廠地址郵遞區號</th>
                          <th>工廠地址</th>
                          <th>發票地址郵遞區號</th>
                          <th>發票地址</th>
                          <th>公司電話</th>
                          <th>公司傳真</th>
                          <th>統一編號</th>
                          <th>發票抬頭</th>
                          <th>廠商等級</th>
                          <th>負責人</th>
                          <th>連絡人１</th>
                          <th>連絡人１職稱</th>
                          <th>連絡人１身份證號</th>
                          <th>連絡人１生日</th>
                          <th>連絡人１個人特質</th>
                          <th>連絡人１連絡電話</th>
                          <th>連絡人１電子信箱</th>
                          <th>連絡人２</th>
                          <th>連絡人２職稱</th>
                          <th>連絡人２身份證號</th>
                          <th>連絡人２生日</th>
                          <th>連絡人２個人特質</th>
                          <th>連絡人２連絡電話</th>
                          <th>連絡人２電子信箱</th>
                          <th>連絡事項</th>
                          <th>營業項目</th>
                          <th>資本額</th>
                          <th>帳款額度</th>
                          <th>信用額度</th>
                          <th>付款方式</th>
                          <th>折數</th>
                          <th>使用折數</th>
                          <th>銀行帳號</th>
                          <th>銀行名稱</th>
                          <th>帳款科目</th>
                          <th>票據科目</th>
                          <th>結帳日</th>
                          <th>預付款</th>
                          <th>未清款</th>
                          <th>首次交易日</th>
                          <th>最近交易日</th>
                          <th>備註</th>
                          <th>建檔人</th>
                          <th>建檔時間</th>
                          <th>異動人</th>
                          <th>異動時間</th>
                          <th>狀態</th>
                        </tr>
                        <tr>
                          <td>{{supplier.廠商編號|isEmpty}}</td>
                          <td>{{supplier.廠商名稱|isEmpty}}</td>
                          <td>{{supplier.廠商簡稱|isEmpty}}</td>
                          <td>{{supplier.公司地址郵遞區號|isEmpty}}</td>
                          <td>{{supplier.公司地址|isEmpty}}</td>
                          <td>{{supplier.工廠地址郵遞區號|isEmpty}}</td>
                          <td>{{supplier.工廠地址|isEmpty}}</td>
                          <td>{{supplier.發票地址郵遞區號|isEmpty}}</td>
                          <td>{{supplier.發票地址|isEmpty}}</td>
                          <td>{{supplier.公司電話|isEmpty}}</td>
                          <td>{{supplier.公司傳真|isEmpty}}</td>
                          <td>{{supplier.統一編號|isEmpty}}</td>
                          <td>{{supplier.發票抬頭|isEmpty}}</td>
                          <td>{{supplier.廠商等級|isEmpty}}</td>
                          <td>{{supplier.負責人|isEmpty}}</td>
                          <td>{{supplier.連絡人１|isEmpty}}</td>
                          <td>{{supplier.連絡人１職稱|isEmpty}}</td>
                          <td>{{supplier.連絡人１身份證號|isEmpty}}</td>
                          <td>{{supplier.連絡人１生日|isEmpty}}</td>
                          <td>{{supplier.連絡人１個人特質|isEmpty}}</td>
                          <td>{{supplier.連絡人１連絡電話|isEmpty}}</td>
                          <td>{{supplier.連絡人１電子信箱|isEmpty}}</td>
                          <td>{{supplier.連絡人２|isEmpty}}</td>
                          <td>{{supplier.連絡人２職稱|isEmpty}}</td>
                          <td>{{supplier.連絡人２身份證號|isEmpty}}</td>
                          <td>{{supplier.連絡人２生日|isEmpty}}</td>
                          <td>{{supplier.連絡人２個人特質|isEmpty}}</td>
                          <td>{{supplier.連絡人２連絡電話|isEmpty}}</td>
                          <td>{{supplier.連絡人２電子信箱|isEmpty}}</td>
                          <td>{{supplier.連絡事項|isEmpty}}</td>
                          <td>{{supplier.營業項目|isEmpty}}</td>
                          <td>{{supplier.資本額|isEmpty}}</td>
                          <td>{{supplier.帳款額度|isEmpty}}</td>
                          <td>{{supplier.信用額度|isEmpty}}</td>
                          <td>{{supplier.付款方式|isEmpty}}</td>
                          <td>{{supplier.折數|isEmpty}}</td>
                          <td>{{supplier.使用折數|isEmpty}}</td>
                          <td>{{supplier.銀行帳號|isEmpty}}</td>
                          <td>{{supplier.銀行名稱|isEmpty}}</td>
                          <td>{{supplier.帳款科目|isEmpty}}</td>
                          <td>{{supplier.票據科目|isEmpty}}</td>
                          <td>{{supplier.結帳日|isEmpty}}</td>
                          <td>{{supplier.預付款|isEmpty}}</td>
                          <td>{{supplier.未清款|isEmpty}}</td>
                          <td>{{supplier.首次交易日|isEmpty}}</td>
                          <td>{{supplier.最近交易日|isEmpty}}</td>
                          <td>{{supplier.備註|isEmpty}}</td>
                          <td>{{supplier.建檔人|isEmpty}}</td>
                          <td>{{supplier.建檔時間|isEmpty}}</td>
                          <td>{{supplier.異動人|isEmpty}}</td>
                          <td>{{supplier.異動時間|isEmpty}}</td>
                          <td>{{supplier.狀態|isEmpty}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetSupplierDtList.length > 0" >
                      <div class="box-body" :id="index" >
                        <h4 class="pull-left">詳細資料<i class="fa fa-arrow-circle-down"></i></h4>
                        <table class="table table-striped table-hover"  >
                          <tbody>
                            <tr>
                              <th>
                                <a :href="index|anchorHash" data-toggle="collapse" >關閉</a>
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
        supplierAdd: false
      }
    },
    created() {
      this.getPageData(1)
      setTimeout(() => {
        this.tall = this.GetSupplierPageCount
      }, 2000)
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
      },
      getdt(id) {
        this.SupplierDtList({
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
              self.SupplierAdd = false
              self.SupplierEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              this.SupplierAdd = false
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
              self.SupplierDelete({
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
        this.supplierAdd = true
        this.SupplierAddGet(this.$http)
        this.ShowDiv()
      },
      doMethods(model) {
        this.GetSupplier.PageIndex = this.tcur
        this.GetSupplier.PageSize = 5
        if (!this.supplierAdd) {
          this.SupplierEditPut({
            http: this.$http,
            model: model
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
