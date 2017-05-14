<template>
  <div class="zoomIn animated">
    <loading v-show="ShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <div class="myModal" v-show="isAdd">
        <div style="width:850px;height:450px;position:absolute;left:30%;z-index:777;">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 員工編號</span>
            <input class="form-control" name="員工編號" v-model="GetEmployee.員工編號" type="text" placeholder="請輸入員工編號">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 姓名</span>
            <input class="form-control" name="姓名" v-model="GetEmployee.姓名" type="text" placeholder="請輸入姓名">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 身份證號</span>
            <input class="form-control" name="身份證號" v-model="GetEmployee.身份證號" type="text" placeholder="請輸入身份證號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 性別</span>
            <input class="form-control" name="性別" v-model="GetEmployee.性別" type="text" placeholder="請輸入性別">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 生日</span>
            <input class="form-control" name="生日" v-model="GetEmployee.生日" type="text" placeholder="請輸入生日">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 血型</span>
            <input class="form-control" name="血型" v-model="GetEmployee.血型" type="text" placeholder="請輸入血型">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 籍貫</span>
            <input class="form-control" name="籍貫" v-model="GetEmployee.籍貫" type="text" placeholder="請輸入籍貫">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 婚姻</span>
            <input class="form-control" name="婚姻" v-model="GetEmployee.婚姻" type="text" placeholder="請輸入婚姻">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 電話</span>
            <input class="form-control" name="電話" v-model="GetEmployee.電話" type="text" placeholder="請輸入電話">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 行動電話</span>
            <input class="form-control" name="行動電話" v-model="GetEmployee.行動電話" type="text" placeholder="請輸入行動電話">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> E_Mail</span>
            <input class="form-control" name="E_Mail" v-model="GetEmployee.E_Mail" type="text" placeholder="請輸入E_Mail">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 地址郵遞區號</span>
            <input class="form-control" name="地址郵遞區號" v-model="GetEmployee.地址郵遞區號" type="text" placeholder="請輸入地址郵遞區號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 地址</span>
            <input class="form-control" name="地址" v-model="GetEmployee.地址" type="text" placeholder="請輸入地址">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 戶籍地址郵遞區號</span>
            <input class="form-control" name="戶籍地址郵遞區號" v-model="GetEmployee.戶籍地址郵遞區號" type="text" placeholder="請輸入戶籍地址郵遞區號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 戶籍地址</span>
            <input class="form-control" name="戶籍地址" v-model="GetEmployee.戶籍地址" type="text" placeholder="請輸入戶籍地址">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 戶籍電話</span>
            <input class="form-control" name="戶籍電話" v-model="GetEmployee.戶籍電話" type="text" placeholder="請輸入戶籍電話">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 永久地址郵遞區號</span>
            <input class="form-control" name="永久地址郵遞區號" v-model="GetEmployee.永久地址郵遞區號" type="text" placeholder="請輸入永久地址郵遞區號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 永久地址</span>
            <input class="form-control" name="永久地址" v-model="GetEmployee.永久地址" type="text" placeholder="請輸入永久地址">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 永久電話</span>
            <input class="form-control" name="永久電話" v-model="GetEmployee.永久電話" type="text" placeholder="請輸入永久電話">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 緊急連絡人</span>
            <input class="form-control" name="緊急連絡人" v-model="GetEmployee.緊急連絡人" type="text" placeholder="請輸入緊急連絡人">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 緊急連絡人地址郵遞區號</span>
            <input class="form-control" name="緊急連絡人地址郵遞區號" v-model="GetEmployee.緊急連絡人地址郵遞區號" type="text" placeholder="請輸入緊急連絡人地址郵遞區號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 緊急連絡人地址</span>
            <input class="form-control" name="緊急連絡人地址" v-model="GetEmployee.緊急連絡人地址" type="text" placeholder="請輸入緊急連絡人地址">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 緊急連絡人電話</span>
            <input class="form-control" name="緊急連絡人電話" v-model="GetEmployee.緊急連絡人電話" type="text" placeholder="請輸入緊急連絡人電話">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 緊急連絡人行動電話</span>
            <input class="form-control" name="緊急連絡人行動電話" v-model="GetEmployee.緊急連絡人行動電話" type="text" placeholder="請輸入緊急連絡人行動電話">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 到職日</span>
            <input class="form-control" name="到職日" v-model="GetEmployee.到職日" type="text" placeholder="請輸入到職日">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 離職日</span>
            <input class="form-control" name="離職日" v-model="GetEmployee.離職日" type="text" placeholder="請輸入離職日">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 部門編號</span>
            <input class="form-control" name="部門編號" v-model="GetEmployee.部門編號" type="text" placeholder="請輸入部門編號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 職稱</span>
            <input class="form-control" name="職稱" v-model="GetEmployee.職稱" type="text" placeholder="請輸入職稱">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 職等</span>
            <input class="form-control" name="職等" v-model="GetEmployee.職等" type="text" placeholder="請輸入職等">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 保證人</span>
            <input class="form-control" name="保證人" v-model="GetEmployee.保證人" type="text" placeholder="請輸入保證人">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 保證人身份證號</span>
            <input class="form-control" name="保證人身份證號" v-model="GetEmployee.保證人身份證號" type="text" placeholder="請輸入保證人身份證號">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 保證人地址郵遞區號</span>
            <input class="form-control" name="保證人地址郵遞區號" v-model="GetEmployee.保證人地址郵遞區號" type="text" placeholder="請輸入保證人地址郵遞區號">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 勞保起始日期</span>
            <input class="form-control" name="勞保起始日期" v-model="GetEmployee.勞保起始日期" type="text" placeholder="請輸入勞保起始日期">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 勞保保額</span>
            <input class="form-control" name="勞保保額" v-model="GetEmployee.勞保保額" type="text" placeholder="請輸入勞保保額">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 勞保保費</span>
            <input class="form-control" name="勞保保費" v-model="GetEmployee.勞保保費" type="text" placeholder="請輸入勞保保費">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 健保單位代號</span>
            <input class="form-control" name="健保單位代號" v-model="GetEmployee.健保單位代號" type="text" placeholder="請輸入健保單位代號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 健保有效期限</span>
            <input class="form-control" name="健保有效期限" v-model="GetEmployee.健保有效期限" type="text" placeholder="請輸入健保有效期限">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 健保保額</span>
            <input class="form-control" name="健保保額" v-model="GetEmployee.健保保額" type="text" placeholder="請輸入健保保額">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 健保保費</span>
            <input class="form-control" name="健保保費" v-model="GetEmployee.健保保費" type="text" placeholder="請輸入健保保費">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 投保備註</span>
            <input class="form-control" name="投保備註" v-model="GetEmployee.投保備註" type="text" placeholder="請輸入投保備註">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 本薪</span>
            <input class="form-control" name="本薪" v-model="GetEmployee.本薪" type="text" placeholder="請輸入本薪">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 全勤獎金</span>
            <input class="form-control" name="全勤獎金" v-model="GetEmployee.全勤獎金" type="text" placeholder="請輸入全勤獎金">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 職務加給</span>
            <input class="form-control" name="職務加給" v-model="GetEmployee.職務加給" type="text" placeholder="請輸入職務加給">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 技術加給</span>
            <input class="form-control" name="技術加給" v-model="GetEmployee.技術加給" type="text" placeholder="請輸入技術加給">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 加班費</span>
            <input class="form-control" name="加班費" v-model="GetEmployee.加班費" type="text" placeholder="請輸入加班費">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 伙食津貼</span>
            <input class="form-control" name="伙食津貼" v-model="GetEmployee.伙食津貼" type="text" placeholder="請輸入伙食津貼">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 車輛津貼</span>
            <input class="form-control" name="車輛津貼" v-model="GetEmployee.車輛津貼" type="text" placeholder="請輸入車輛津貼">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 福利金</span>
            <input class="form-control" name="福利金" v-model="GetEmployee.福利金" type="text" placeholder="請輸入福利金">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 教育程度</span>
            <input class="form-control" name="教育程度" v-model="GetEmployee.教育程度" type="text" placeholder="請輸入教育程度">
          </div>
          <div class="input-group">
          </div>
          <div class="input-group">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 銀行帳號</span>
            <input class="form-control" name="銀行帳號" v-model="GetEmployee.銀行帳號" type="text" placeholder="請輸入銀行帳號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 經歷</span>
            <input class="form-control" name="經歷" v-model="GetEmployee.經歷" type="text" placeholder="請輸入經歷">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 擅長</span>
            <input class="form-control" name="擅長" v-model="GetEmployee.擅長" type="text" placeholder="請輸入擅長">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 備註</span>
            <input class="form-control" name="備註" v-model="GetEmployee.備註" type="text" placeholder="請輸入備註">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 建檔人</span>
            <input class="form-control" name="建檔人" v-model="GetEmployee.建檔人" type="text" placeholder="請輸入建檔人">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 建檔時間</span>
            <input class="form-control" name="建檔時間" v-model="GetEmployee.建檔時間" type="text" placeholder="請輸入建檔時間">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 異動人</span>
            <input class="form-control" name="異動人" v-model="GetEmployee.異動人" type="text" placeholder="請輸入異動人">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 異動時間</span>
            <input class="form-control" name="異動時間" v-model="GetEmployee.異動時間" type="text" placeholder="請輸入異動時間">
          </div>
          <div class="input-group">
          </div>
          <input type="hidden" v-model="GetEmployee.員工編號" />
          <div class="btn-group">
            <button @click="doMethods(GetEmployee)" class="btn bg-orange btn-flat" type="button">確定</button>
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
              <h3 class="box-title">員工列表</h3>
              <button @click="add()" class="btn btn-info pull-right">新增</button>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div v-for="(emp,index) in GetEmployeeList">
                  <div class="panel panel-info">
                    <div class="panel-heading">
                      <h3 class="panel-title">
                        <strong>
                          員工編號:<span class="badge bg-red">{{emp.員工編號}}</span>
                          姓名:<span class="badge bg-red">{{emp.姓名}}</span>
                          身份證號:<span class="badge bg-red">{{emp.身份證號}}</span>
                          性別:<span class="badge bg-red">{{emp.性別}}</span>
                        </strong>
                        <button @click="get(emp.員工編號)" type="button" class="btn bg-navy">修改</button>
                        <button @click="del(emp.員工編號)" type="button" class="btn bg-maroon ">刪除</button>
                      </h3>
                    </div>
                    <div class="panel-body">
                      <div class="col-md-3">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary">生日:</span> {{emp.生日|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">血型:</span> {{emp.血型|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">籍貫:</span> {{emp.籍貫|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">婚姻:</span> {{emp.婚姻|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">電話:</span> {{emp.電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">行動電話:</span> {{emp.行動電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">E_Mail:</span> {{emp.E_Mail|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">地址郵遞區號:</span> {{emp.地址郵遞區號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">地址:</span> {{emp.地址|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">戶籍地址郵遞區號:</span> {{emp.戶籍地址郵遞區號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">戶籍地址:</span> {{emp.戶籍地址|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">戶籍電話:</span> {{emp.戶籍電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">永久地址郵遞區號:</span> {{emp.永久地址郵遞區號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">永久地址:</span> {{emp.永久地址|isEmpty}}</div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">永久電話:</span> {{emp.永久電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">緊急連絡人:</span> {{emp.緊急連絡人|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">緊急連絡人地址郵遞區號: </span>{{emp.緊急連絡人地址郵遞區號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">緊急連絡人地址: </span>{{emp.緊急連絡人地址|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">緊急連絡人電話: </span>{{emp.緊急連絡人電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">緊急連絡人行動電話: </span>{{emp.緊急連絡人行動電話|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">到職日: </span>{{emp.到職日|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">離職日: </span>{{emp.離職日|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">部門編號: </span>{{emp.部門編號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">職稱: </span>{{emp.職稱|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">職等: </span>{{emp.職等|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">保證人: </span>{{emp.保證人|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">保證人身份證號: </span>{{emp.保證人身份證號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">保證人地址郵遞區號: </span>{{emp.保證人地址郵遞區號|isEmpty}}</div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">勞保起始日期: </span>{{emp.勞保起始日期|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">勞保保額: </span>{{emp.勞保保額|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">勞保保費: </span>{{emp.勞保保費|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">健保單位代號: </span>{{emp.健保單位代號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">健保有效期限: </span>{{emp.健保有效期限|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">健保保額: </span>{{emp.健保保額|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">健保保費: </span>{{emp.健保保費|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">投保備註: </span>{{emp.投保備註|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">本薪: </span>{{emp.本薪|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">全勤獎金: </span>{{emp.全勤獎金|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">職務加給: </span>{{emp.職務加給|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">技術加給: </span>{{emp.技術加給|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">加班費: </span>{{emp.加班費|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">伙食津貼: </span>{{emp.伙食津貼|isEmpty}}</div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">車輛津貼: </span>{{emp.車輛津貼|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">福利金: </span>{{emp.福利金|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">教育程度: </span>{{emp.教育程度|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">銀行帳號: </span>{{emp.銀行帳號|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">經歷: </span>{{emp.經歷|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">擅長: </span>{{emp.擅長|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">備註: </span>{{emp.備註|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">建檔人: </span>{{emp.建檔人|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">建檔時間: </span>{{emp.建檔時間|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">異動人: </span>{{emp.異動人|isEmpty}}</div>
                          </li>
                          <li class="list-group-item">
                            <div style="text-align:left"><span class="label label-primary pull-left">異動時間: </span>{{emp.異動時間|isEmpty}}</div>
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
    data () {
      return {
        tcur: 1,
        tall: 0,
        empAdd: false
      }
    },
    created() {
      this.getPageData(1)
      setTimeout(() => {
        this.tall = this.GetEmployeePageCount
      }, 2000)
    },
    computed: {
      ...mapState([
        'ShowLoading',
        'isAdd'
      ]),
      ...mapGetters([
        'GetEmployeeList',
        'GetEmployee',
        'GetEmployeePageCount'
      ])
    },
    methods: {
      ...mapActions([
        'EmployeeList',
        'EmployeeAddGet',
        'EmployeeAddPost',
        'EmployeeEditGet',
        'EmployeeEditPut',
        'EmployeeDelete',
        'ShowDiv',
        'HideDiv'
      ]),
      getPageData(page) {
        this.EmployeeList({
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
              self.empAdd = false
              self.EmployeeEditGet({
                http: self.$http,
                id
              })
              self.ShowDiv()
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              this.isAdd = false
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
              self.EmployeeDelete({
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
        this.empAdd = true
        this.ShowDiv()
        this.EmployeeAddGet()
      },
      doMethods(model) {
        if (!this.empAdd) {
          this.EmployeeEditPut({
            http: this.$http,
            model: model
          })
        } else {
          this.EmployeeAddPost({
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
    padding-top: 60px;
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
  .box-body {
    --overflow: auto;
  }

</style>
