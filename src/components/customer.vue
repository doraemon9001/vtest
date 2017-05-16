<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <div class="myModal" v-show="isAdd">
        <div style="width:1050px;height:450px;position:absolute;left:20%;z-index:777;">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">客戶資料</a></li>
              <li><a href="#tab_2" data-toggle="tab" aria-expanded="false">聯絡人資料</a></li>
              <li><a href="#tab_3" data-toggle="tab" aria-expanded="false">詳細資料</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tab_1">
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">客戶編號</button>
                  </div>
                  <input class="form-control" name="客戶編號" v-model="GetCustomer.客戶編號" type="text" placeholder="請輸入客戶編號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">客戶名稱</button>
                  </div>
                  <input class="form-control" name="客戶名稱" v-model="GetCustomer.客戶名稱" type="text" placeholder="請輸入客戶名稱">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">客戶簡稱</button>
                  </div>
                  <input class="form-control" name="客戶簡稱" v-model="GetCustomer.客戶簡稱" type="text" placeholder="請輸入客戶簡稱">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">公司地址郵遞區號</button>
                  </div>
                  <input class="form-control" name="公司地址郵遞區號" v-model="GetCustomer.公司地址郵遞區號" type="text" placeholder="請輸入公司地址郵遞區號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">公司地址</button>
                  </div>
                  <input class="form-control" name="公司地址" v-model="GetCustomer.公司地址" type="text" placeholder="請輸入公司地址">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">送貨地址郵遞區號</button>
                  </div>
                  <input class="form-control" name="送貨地址郵遞區號" v-model="GetCustomer.送貨地址郵遞區號" type="text" placeholder="請輸入送貨地址郵遞區號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">送貨地址</button>
                  </div>
                  <input class="form-control" name="送貨地址" v-model="GetCustomer.送貨地址" type="text" placeholder="請輸入送貨地址">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">帳單地址郵遞區號</button>
                  </div>
                  <input class="form-control" name="帳單地址郵遞區號" v-model="GetCustomer.帳單地址郵遞區號" type="text" placeholder="請輸入帳單地址郵遞區號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">帳單地址</button>
                  </div>
                  <input class="form-control" name="帳單地址" v-model="GetCustomer.帳單地址" type="text" placeholder="請輸入帳單地址">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">發票地址郵遞區號</button>
                  </div>
                  <input class="form-control" name="發票地址郵遞區號" v-model="GetCustomer.發票地址郵遞區號" type="text" placeholder="請輸入發票地址郵遞區號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">發票地址</button>
                  </div>
                  <input class="form-control" name="發票地址" v-model="GetCustomer.發票地址" type="text" placeholder="請輸入發票地址">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">E_Mail</button>
                  </div>
                  <input class="form-control" name="E_Mail" v-model="GetCustomer.E_Mail" type="text" placeholder="請輸入E_Mail">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">統一編號</button>
                  </div>
                  <input class="form-control" name="統一編號" v-model="GetCustomer.統一編號" type="text" placeholder="請輸入統一編號">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">公司電話</button>
                  </div>
                  <input class="form-control" name="公司電話" v-model="GetCustomer.公司電話" type="text" placeholder="請輸入公司電話">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">公司傳真</button>
                  </div>
                  <input class="form-control" name="公司傳真" v-model="GetCustomer.公司傳真" type="text" placeholder="請輸入公司傳真">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">統一編發票抬頭號</button>
                  </div>
                  <input class="form-control" name="發票抬頭" v-model="GetCustomer.發票抬頭" type="text" placeholder="請輸入發票抬頭">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">客戶等級</button>
                  </div>
                  <input class="form-control" name="客戶等級" v-model="GetCustomer.客戶等級" type="text" placeholder="請輸入客戶等級">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">負責人</button>
                  </div>
                  <input class="form-control" name="負責人" v-model="GetCustomer.負責人" type="text" placeholder="請輸入負責人">
                </div>
              </div>
              <div class="tab-pane" id="tab_2">
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１</button>
                  </div>
                  <input class="form-control" name="連絡人１" v-model="GetCustomer.連絡人１" type="text" placeholder="請輸入連絡人１">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１職稱</button>
                  </div>
                  <input class="form-control" name="連絡人１職稱" v-model="GetCustomer.連絡人１職稱" type="text" placeholder="請輸入連絡人１職稱">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１身份證號</button>
                  </div>
                  <input class="form-control" name="連絡人１身份證號" v-model="GetCustomer.連絡人１身份證號" type="text" placeholder="請輸入連絡人１身份證號">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１生日</button>
                  </div>
                  <input class="form-control" name="連絡人１生日" v-model="GetCustomer.連絡人１生日" type="text" placeholder="請輸入連絡人１生日">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１個人特質</button>
                  </div>
                  <input class="form-control" name="連絡人１個人特質" v-model="GetCustomer.連絡人１個人特質" type="text" placeholder="請輸入連絡人１個人特質">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１連絡電話</button>
                  </div>
                  <input class="form-control" name="連絡人１連絡電話" v-model="GetCustomer.連絡人１連絡電話" type="text" placeholder="請輸入連絡人１連絡電話">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人１電子信箱</button>
                  </div>
                  <input class="form-control" name="連絡人１電子信箱" v-model="GetCustomer.連絡人１電子信箱" type="text" placeholder="請輸入連絡人１電子信箱">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２</button>
                  </div>
                  <input class="form-control" name="連絡人２" v-model="GetCustomer.連絡人２" type="text" placeholder="請輸入連絡人２">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２職稱</button>
                  </div>
                  <input class="form-control" name="連絡人２職稱" v-model="GetCustomer.連絡人２職稱" type="text" placeholder="請輸入連絡人２職稱">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２身份證號</button>
                  </div>
                  <input class="form-control" name="連絡人２身份證號" v-model="GetCustomer.連絡人２身份證號" type="text" placeholder="請輸入連絡人２身份證號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２生日</button>
                  </div>
                  <input class="form-control" name="連絡人２生日" v-model="GetCustomer.連絡人２生日" type="text" placeholder="請輸入連絡人２生日">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２個人特質</button>
                  </div>
                  <input class="form-control" name="連絡人２個人特質" v-model="GetCustomer.連絡人２個人特質" type="text" placeholder="請輸入連絡人２個人特質">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２連絡電話</button>
                  </div>
                  <input class="form-control" name="連絡人２連絡電話" v-model="GetCustomer.連絡人２連絡電話" type="text" placeholder="請輸入連絡人２連絡電話">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡人２電子信箱</button>
                  </div>
                  <input class="form-control" name="連絡人２電子信箱" v-model="GetCustomer.連絡人２電子信箱" type="text" placeholder="請輸入連絡人２電子信箱">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">連絡事項</button>
                  </div>
                  <input class="form-control" name="連絡事項" v-model="GetCustomer.連絡事項" type="text" placeholder="請輸入連絡事項">
                </div>
              </div>
              <div class="tab-pane" id="tab_3">
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">營業項目</button>
                  </div>
                  <input class="form-control" name="營業項目" v-model="GetCustomer.營業項目" type="text" placeholder="請輸入營業項目">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">資本額</button>
                  </div>
                  <input class="form-control" name="資本額" v-model="GetCustomer.資本額" type="text" placeholder="請輸入資本額">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">帳款額度</button>
                  </div>
                  <input class="form-control" name="帳款額度" v-model="GetCustomer.帳款額度" type="text" placeholder="請輸入帳款額度">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">信用額度</button>
                  </div>
                  <input class="form-control" name="信用額度" v-model="GetCustomer.信用額度" type="text" placeholder="請輸入信用額度">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">付款方式</button>
                  </div>
                  <input class="form-control" name="付款方式" v-model="GetCustomer.付款方式" type="text" placeholder="請輸入付款方式">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">採用售價</button>
                  </div>
                  <input class="form-control" name="採用售價" v-model="GetCustomer.採用售價" type="text" placeholder="請輸入採用售價">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">使用折數</button>
                  </div>
                  <input class="form-control" name="使用折數" v-model="GetCustomer.使用折數" type="text" placeholder="請輸入使用折數">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">銀行帳號</button>
                  </div>
                  <input class="form-control" name="銀行帳號" v-model="GetCustomer.銀行帳號" type="text" placeholder="請輸入銀行帳號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">銀行名稱</button>
                  </div>
                  <input class="form-control" name="銀行名稱" v-model="GetCustomer.銀行名稱" type="text" placeholder="請輸入銀行名稱">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">帳款科目</button>
                  </div>
                  <input class="form-control" name="帳款科目" v-model="GetCustomer.帳款科目" type="text" placeholder="請輸入帳款科目">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">票據科目</button>
                  </div>
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> </span>
                  <input class="form-control" name="票據科目" v-model="GetCustomer.票據科目" type="text" placeholder="請輸入票據科目">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">結帳日</button>
                  </div>
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> </span>
                  <input class="form-control" name="結帳日" v-model="GetCustomer.結帳日" type="text" placeholder="請輸入結帳日">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">請款人編號</button>
                  </div>
                  <input class="form-control" name="請款人編號" v-model="GetCustomer.請款人編號" type="text" placeholder="請輸入請款人編號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">業務編號</button>
                  </div>
                  <input class="form-control" name="業務編號" v-model="GetCustomer.業務編號" type="text" placeholder="請輸入業務編號">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">物流公司</button>
                  </div>
                  <input class="form-control" name="物流公司" v-model="GetCustomer.物流公司" type="text" placeholder="請輸入物流公司">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">預收款</button>
                  </div>
                  <input class="form-control" name="預收款" v-model="GetCustomer.預收款" type="text" placeholder="請輸入預收款">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">未清款</button>
                  </div>
                  <input class="form-control" name="未清款" v-model="GetCustomer.未清款" type="text" placeholder="請輸入未清款">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">首次交易日</button>
                  </div>
                  <input class="form-control" name="首次交易日" v-model="GetCustomer.首次交易日" type="text" placeholder="請輸入首次交易日">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">最近交易日</button>
                  </div>
                  <input class="form-control" name="最近交易日" v-model="GetCustomer.最近交易日" type="text" placeholder="請輸入最近交易日">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">合約起始日</button>
                  </div>
                  <input class="form-control" name="合約起始日" v-model="GetCustomer.合約起始日" type="text" placeholder="請輸入合約起始日">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">合約終止日</button>
                  </div>
                  <input class="form-control" name="合約終止日" v-model="GetCustomer.合約終止日" type="text" placeholder="請輸入合約終止日">
                </div>
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">地區別</button>
                  </div>
                  <input class="form-control" name="地區別" v-model="GetCustomer.地區別" type="text" placeholder="請輸入地區別">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">類別</button>
                  </div>
                  <input class="form-control" name="類別" v-model="GetCustomer.類別" type="text" placeholder="請輸入類別">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 備註</span>
                  <input class="form-control" name="備註" v-model="GetCustomer.備註" type="text" placeholder="請輸入備註">
                </div>
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 建檔人</span>
                  <input class="form-control" name="建檔人" v-model="GetCustomer.建檔人" type="text" placeholder="請輸入建檔人">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 建檔時間</span>
                  <input class="form-control" name="建檔時間" v-model="GetCustomer.建檔時間" type="text" placeholder="請輸入建檔時間">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 行動電話</span>
                  <input class="form-control" name="行動電話" v-model="GetCustomer.行動電話" type="text" placeholder="請輸入行動電話">
                </div>
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 折數</span>
                  <input class="form-control" name="折數" v-model="GetCustomer.折數" type="text" placeholder="請輸入折數">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 異動人</span>
                  <input class="form-control" name="異動人" v-model="GetCustomer.異動人" type="text" placeholder="請輸入異動人">
                  <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 異動時間</span>
                  <input class="form-control" name="異動時間" v-model="GetCustomer.異動時間" type="text" placeholder="請輸入異動時間">
                </div>
                <div class="input-group">
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" v-model="GetCustomer.員工編號" />
          <div class="btn-group">
            <button @click="doMethods(GetCustomer)" class="btn bg-orange btn-flat" type="button">確定</button>
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
              <h3 class="box-title">客戶列表</h3>
              <button @click="add()" class="btn btn-info pull-right">新增</button>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div>
                  <div v-for="(customer,index) in GetCustomerList">
                    <div class="panel panel-info">
                      <div class="panel-heading">
                        <h3 class="panel-title">
                          <strong>
                            客戶編號:{{customer.客戶編號}}
                          </strong>
                          <strong>
                            客戶名稱:{{customer.客戶名稱}}
                          </strong>
                          <strong>
                            客戶簡稱:{{customer.客戶簡稱}}
                          </strong>
                          <div class="btn-group">
                            <button @click="get(customer.客戶編號)" type="button" class="btn bg-navy">修改</button>
                            <button @click="del(customer.客戶編號)" type="button" class="btn bg-maroon">刪除</button>
                          </div>
                        </h3>
                      </div>
                      <div class="panel-body">
                        <div class="col-md-3">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary">公司地址郵遞區號:</span> {{customer.公司地址郵遞區號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">公司地址:</span> {{customer.公司地址|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">送貨地址郵遞區號:</span> {{customer.送貨地址郵遞區號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">送貨地址:</span> {{customer.送貨地址|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">帳單地址郵遞區號:</span> {{customer.帳單地址郵遞區號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">帳單地址:</span> {{customer.帳單地址|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">發票地址郵遞區號:</span> {{customer.發票地址郵遞區號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">發票地址:</span> {{customer.發票地址|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">公司電話:</span> {{customer.公司電話|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">客戶等級:</span> {{customer.客戶等級|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１:</span> {{customer.連絡人１|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１身份證號:</span> {{customer.連絡人１身份證號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１生日:</span> {{customer.連絡人１生日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１個人特質:</span> {{customer.連絡人１個人特質|isEmpty}}</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１連絡電話:</span> {{customer.連絡人１連絡電話|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人１電子信箱:</span> {{customer.連絡人１電子信箱|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２:</span> {{customer.連絡人２|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２職稱:</span> {{customer.連絡人２職稱|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２身份證號:</span> {{customer.連絡人２身份證號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２生日:</span> {{customer.連絡人２生日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２個人特質:</span> {{customer.連絡人２個人特質|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２連絡電話:</span> {{customer.連絡人２連絡電話|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡人２電子信箱:</span> {{customer.連絡人２電子信箱|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">連絡事項:</span> {{customer.連絡事項|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">營業項目:</span> {{customer.營業項目|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">資本額:</span> {{customer.資本額|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">帳款額度:</span> {{customer.帳款額度|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">信用額度: </span>{{customer.信用額度|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">付款方式: </span>{{customer.付款方式|isEmpty}}</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">使用折數:</span> {{customer.使用折數|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">銀行帳號:</span> {{customer.銀行帳號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">銀行名稱: </span>{{customer.銀行名稱|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">帳款科目: </span>{{customer.帳款科目|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">票據科目:</span> {{customer.票據科目|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">結帳日:</span> {{customer.結帳日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">請款人編號:</span> {{customer.請款人編號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">業務編號:</span> {{customer.業務編號|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">物流公司: </span>{{customer.物流公司|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">預收款: </span>{{customer.預收款|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">未清款:</span> {{customer.未清款|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">首次交易日:</span> {{customer.首次交易日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">最近交易日:</span> {{customer.最近交易日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">合約起始日:</span> {{customer.合約起始日|isEmpty}}</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">採用售價:</span> {{customer.採用售價|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">折數:</span> {{customer.折數|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">合約終止日: </span>{{customer.合約終止日|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">地區別: </span>{{customer.地區別|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">類別:</span> {{customer.類別|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">備註: </span>{{customer.備註|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">建檔人: </span>{{customer.建檔人|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">建檔時間:</span> {{customer.建檔時間|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">異動人: </span>{{customer.異動人|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">異動時間: </span>{{customer.異動時間|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">行動電話:</span> {{customer.行動電話|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">建檔時間:</span> {{customer.建檔時間|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">異動人: </span>{{customer.異動人|isEmpty}}</div>
                            </li>
                            <li class="list-group-item">
                              <div style="text-align:left"><span class="label label-primary pull-left">異動時間: </span>{{customer.異動時間|isEmpty}}</div>
                            </li>
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
        cusAdd: false
      }
    },
    created() {
      this.getPageData(1)
      setTimeout(() => {
        this.tall = this.GetCustomerPageCount
      }, 2000)
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetCustomerList',
        'GetCustomer',
        'GetCustomerPageCount'
      ])
    },
    methods: {
      ...mapActions([
        'CustomerList',
        'CustomerAddGet',
        'CustomerAddPost',
        'CustomerEditGet',
        'CustomerEditPut',
        'CustomerDelete',
        'ShowDiv',
        'HideDiv'
      ]),
      getPageData(page) {
        this.CustomerList({
          http: this.$http,
          model: {
            PageIndex: page,
            PageSize: 5
          }
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
              self.cusAdd = false
              self.CustomerEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              this.cusAdd = false
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
              self.CustomerDelete({
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
        this.cusAdd = true
        this.CustomerAddGet(this.$http)
        this.ShowDiv()
      },
      doMethods(model) {
        if (!this.cusAdd) {
          this.CustomerEditPut({
            http: this.$http,
            model: model
          })
        } else {
          this.CustomerAddPost({
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
