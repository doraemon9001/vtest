<template>
  <div class="myModal" v-show="isAdd">
    <div style="width:95%;height:200%;position:absolute;left:3%;overflow:auto">
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#tab_1" data-toggle="tab" aria-expanded="true">資料(一)</a>
          </li>
          <li>
            <a href="#tab_2" data-toggle="tab" aria-expanded="false">資料(二)</a>
          </li>
          <li>
            <a href="#tab_3" data-toggle="tab" aria-expanded="false">資料(三)</a>
          </li>
        </ul>
        <!-- 單頭資料Tab -->
        <div class="tab-content">
          <div class="tab-pane active" id="tab_1">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">客戶編號</button>
              </div>
              <input class="form-control" name="客戶編號" v-model="GetSaleReturn.客戶編號" type="text" placeholder="請輸入客戶編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">客戶名稱</button>
              </div>
              <input class="form-control" name="客戶名稱" v-model="GetSaleReturn.客戶名稱" type="text" placeholder="請輸入客戶名稱">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">結帳日</button>
              </div>
              <input class="form-control" name="結帳日" v-model="GetSaleReturn.結帳日" type="text" placeholder="請輸入結帳日">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">送貨方式</button>
              </div>
              <input class="form-control" name="送貨方式" v-model="GetSaleReturn.送貨方式" type="text" placeholder="請輸入送貨方式">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">送貨地址</button>
              </div>
              <input class="form-control" name="送貨地址" v-model="GetSaleReturn.送貨地址" type="text" placeholder="請輸入送貨地址">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">物流公司</button>
              </div>
              <input class="form-control" name="物流公司" v-model="GetSaleReturn.物流公司" type="text" placeholder="請輸入物流公司">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">請款人編號</button>
              </div>
              <input class="form-control" name="請款人編號" v-model="GetSaleReturn.請款人編號" type="text" placeholder="請輸入請款人編號">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">寄貨單號</button>
              </div>
              <input class="form-control" name="寄貨單號" v-model="GetSaleReturn.寄貨單號" type="text" placeholder="請輸入寄貨單號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">部門編號</button>
              </div>
              <input class="form-control" name="部門編號" v-model="GetSaleReturn.部門編號" type="text" placeholder="請輸入部門編號">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">業務編號</button>
              </div>
              <input class="form-control" name="業務編號" v-model="GetSaleReturn.業務編號" type="text" placeholder="請輸入業務編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">單據金額</button>
              </div>
              <input class="form-control" name="單據金額" v-model="GetSaleReturn.單據金額" type="text" placeholder="請輸入單據金額">
            </div>
          </div>
          <div class="tab-pane" id="tab_2">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">單據折讓</button>
              </div>
              <input class="form-control" name="單據折讓" v-model="GetSaleReturn.單據折讓" type="text" placeholder="請輸入單據折讓">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">貨品折讓</button>
              </div>
              <input class="form-control" name="貨品折讓" v-model="GetSaleReturn.貨品折讓" type="text" placeholder="請輸入貨品折讓">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收款折讓</button>
              </div>
              <input class="form-control" name="收款折讓" v-model="GetSaleReturn.收款折讓" type="text" placeholder="請輸入收款折讓">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">稅額</button>
              </div>
              <input class="form-control" name="稅額" v-model="GetSaleReturn.稅額" type="text" placeholder="請輸入稅額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">稅金計算</button>
              </div>
              <input class="form-control" name="稅金計算" v-model="GetSaleReturn.稅金計算" type="text" placeholder="請輸入稅金計算">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">發票號碼</button>
              </div>
              <input class="form-control" name="發票號碼" v-model="GetSaleReturn.發票號碼" type="text" placeholder="請輸入發票號碼">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">應收金額</button>
              </div>
              <input class="form-control" name="應收金額" v-model="GetSaleReturn.應收金額" type="text" placeholder="請輸入應收金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預收現金</button>
              </div>
              <input class="form-control" name="預收現金" v-model="GetSaleReturn.預收現金" type="text" placeholder="請輸入預收現金">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預收支票</button>
              </div>
              <input class="form-control" name="預收支票" v-model="GetSaleReturn.預收支票" type="text" placeholder="請輸入預收支票">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預收其他</button>
              </div>
              <input class="form-control" name="預收其他" v-model="GetSaleReturn.預收其他" type="text" placeholder="請輸入預收其他">
            </div>
          </div>
          <div class="tab-pane" id="tab_3">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">支票號碼</button>
              </div>
              <input class="form-control" name="支票號碼" v-model="GetSaleReturn.支票號碼" type="text" placeholder="請輸入支票號碼">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">已沖帳金額</button>
              </div>
              <input class="form-control" name="已沖帳金額" v-model="GetSaleReturn.已沖帳金額" type="text" placeholder="請輸入已沖帳金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">已收金額</button>
              </div>
              <input class="form-control" name="已收金額" v-model="GetSaleReturn.已收金額" type="text" placeholder="請輸入已收金額">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">未收金額</button>
              </div>
              <input class="form-control" name="未收金額" v-model="GetSaleReturn.未收金額" type="text" placeholder="請輸入未收金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">報價單號</button>
              </div>
              <input class="form-control" name="報價單號" v-model="GetSaleReturn.報價單號" type="text" placeholder="請輸入報價單號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">製單人員</button>
              </div>
              <input class="form-control" name="製單人員" v-model="GetSaleReturn.製單人員" type="text" placeholder="請輸入製單人員">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">備註</button>
              </div>
              <input class="form-control" name="備註" v-model="GetSaleReturn.備註" type="text" placeholder="請輸入備註">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">狀態</button>
              </div>
              <input class="form-control" name="狀態" v-model="GetSaleReturn.狀態" type="text" placeholder="請輸入狀態">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預出貨日</button>
              </div>
              <input class="form-control" name="預出貨日" v-model="GetSaleReturn.預出貨日" type="text" placeholder="請輸入預出貨日">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收款人</button>
              </div>
              <input class="form-control" name="收款人" v-model="GetSaleReturn.收款人" type="text" placeholder="請輸入收款人">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">補價單號</button>
              </div>
              <input class="form-control" name="補價單號" v-model="GetSaleReturn.補價單號" type="text" placeholder="請輸入補價單號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">補價金額</button>
              </div>
              <input class="form-control" name="補價金額" v-model="GetSaleReturn.補價金額" type="text" placeholder="請輸入補價金額">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">來源單號</button>
              </div>
              <input class="form-control" name="來源單號" v-model="GetSaleReturn.來源單號" type="text" placeholder="請輸入來源單號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">送貨電話</button>
              </div>
              <input class="form-control" name="送貨電話" v-model="GetSaleReturn.送貨電話" type="text" placeholder="請輸入送貨電話">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">EMAIL</button>
              </div>
              <input class="form-control" name="EMAIL" v-model="GetSaleReturn.EMAIL" type="text" placeholder="請輸入EMAIL">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">訂單編號</button>
              </div>
              <input class="form-control" name="訂單編號" v-model="GetSaleReturn.訂單編號" type="text" placeholder="請輸入訂單編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">未清款</button>
              </div>
              <input class="form-control" name="未清款" v-model="GetSaleReturn.未清款" type="text" placeholder="請輸入未清款">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">首次交易日</button>
              </div>
              <input class="form-control" name="首次交易日" v-model="GetSaleReturn.首次交易日" type="text" placeholder="請輸入首次交易日">
            </div>
          </div>
        </div>
        <!-- 單身資料新增 -->
        <div class="box box-info" v-show="isdtShow">
          <div class="box-body">
            <div class="col-md-3">
              <input class="form-control" name="識別碼" v-model="GetSaleReturndt.識別碼" type="hidden">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 倉庫編號</span>
                  <input class="form-control" name="倉庫編號" v-model="GetSaleReturndt.倉庫編號" type="text" placeholder="請輸入倉庫編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 貨品編號</span>
                  <input class="form-control" name="貨品編號" v-model="GetSaleReturndt.貨品編號" type="text" placeholder="請輸入貨品編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 貨品名稱</span>
                  <input class="form-control" name="貨品名稱" v-model="GetSaleReturndt.貨品名稱" type="text" placeholder="請輸入貨品名稱">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 單價</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('單價') }" class="form-control" name="單價" v-model="GetSaleReturndt.單價" type="text" placeholder="請輸入單價">
                  <span v-show="errors.has('單價')" class="help is-danger">{{ errors.first('單價') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 單位</span>
                  <input class="form-control" name="單位" v-model="GetSaleReturndt.單位" type="text" placeholder="請輸入單位">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 數量</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('數量') }" class="form-control" name="數量" v-model="GetSaleReturndt.數量" type="text" placeholder="請輸入數量">
                  <span v-show="errors.has('數量')" class="help is-danger">{{ errors.first('數量') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 小計</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('小計') }" class="form-control" name="小計" v-model="GetSaleReturndt.小計" type="text" placeholder="請輸入小計">
                  <span v-show="errors.has('小計')" class="help is-danger">{{ errors.first('小計') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 折數</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('折數') }" class="form-control" name="折數" v-model="GetSaleReturndt.折數" type="text" placeholder="請輸入折數">
                  <span v-show="errors.has('折數')" class="help is-danger">{{ errors.first('折數') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 折讓</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('折讓') }" class="form-control" name="折讓" v-model="GetSaleReturndt.折讓" type="text" placeholder="請輸入折讓">
                  <span v-show="errors.has('折讓')" class="help is-danger">{{ errors.first('折讓') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 寄庫量</span>
                  <input class="form-control" name="寄庫量" v-model="GetSaleReturndt.寄庫量" type="text" placeholder="請輸入寄庫量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 重量</span>
                  <input class="form-control" name="重量" v-model="GetSaleReturndt.重量" type="text" placeholder="請輸入重量">
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 單位成本</span>
                  <input class="form-control" name="單位成本" v-model="GetSaleReturndt.單位成本" type="text" placeholder="請輸入單位成本">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 成本方式</span>
                  <input class="form-control" name="成本方式" v-model="GetSaleReturndt.成本方式" type="text" placeholder="請輸入成本方式">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 保固起始日</span>
                  <input class="form-control" name="保固起始日" v-model="GetSaleReturndt.保固起始日" type="text" placeholder="請輸入保固起始日">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 保固終止日</span>
                  <input class="form-control" name="保固終止日" v-model="GetSaleReturndt.保固終止日" type="text" placeholder="請輸入保固終止日">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 贈品</span>
                  <input class="form-control" name="贈品" v-model="GetSaleReturndt.贈品" type="text" placeholder="請輸入贈品">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 使用包裝</span>
                  <input class="form-control" name="使用包裝" v-model="GetSaleReturndt.使用包裝" type="text" placeholder="請輸入使用包裝">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 包裝數量</span>
                  <input class="form-control" name="包裝數量" v-model="GetSaleReturndt.包裝數量" type="text" placeholder="請輸入包裝數量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 備註</span>
                  <input class="form-control" name="備註" v-model="GetSaleReturndt.備註" type="text" placeholder="請輸入備註">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 狀態</span>
                  <input class="form-control" name="狀態" v-model="GetSaleReturndt.狀態" type="text" placeholder="請輸入狀態">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 經理成本</span>
                  <input class="form-control" name="經理成本" v-model="GetSaleReturndt.經理成本" type="text" placeholder="請輸入經理成本">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 業務成本</span>
                  <input class="form-control" name="業務成本" v-model="GetSaleReturndt.業務成本" type="text" placeholder="請輸入業務成本">
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 合約編號</span>
                  <input class="form-control" name="合約編號" v-model="GetSaleReturndt.合約編號" type="text" placeholder="請輸入合約編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 廠牌</span>
                  <input class="form-control" name="廠牌" v-model="GetSaleReturndt.廠牌" type="text" placeholder="請輸入廠牌">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 車型</span>
                  <input class="form-control" name="車型" v-model="GetSaleReturndt.車型" type="text" placeholder="請輸入車型">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 年份</span>
                  <input class="form-control" name="年份" v-model="GetSaleReturndt.年份" type="text" placeholder="請輸入年份">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 規格</span>
                  <input class="form-control" name="規格" v-model="GetSaleReturndt.規格" type="text" placeholder="請輸入規格">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 業務折數</span>
                  <input class="form-control" name="業務折數" v-model="GetSaleReturndt.業務折數" type="text" placeholder="請輸入業務折數">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 贈品金額</span>
                  <input class="form-control" name="贈品金額" v-model="GetSaleReturndt.贈品金額" type="text" placeholder="請輸入贈品金額">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> OrderCode</span>
                  <input class="form-control" name="OrderCode" v-model="GetSaleReturndt.OrderCode" type="text" placeholder="請輸入OrderCode">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 補價數量</span>
                  <input class="form-control" name="補價數量" v-model="GetSaleReturndt.補價數量" type="text" placeholder="請輸入補價數量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 補價金額</span>
                  <input class="form-control" name="補價金額" v-model="GetSaleReturndt.補價金額" type="text" placeholder="請輸入補價金額">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 補價合計</span>
                  <input class="form-control" name="補價合計" v-model="GetSaleReturndt.補價合計" type="text" placeholder="請輸入補價合計">
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 扣抵</span>
                  <input class="form-control" name="扣抵" v-model="GetSaleReturndt.扣抵" type="text" placeholder="請輸入扣抵">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 自備車</span>
                  <input class="form-control" name="自備車" v-model="GetSaleReturndt.自備車" type="text" placeholder="請輸入自備車">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 尺寸W</span>
                  <input class="form-control" name="尺寸W" v-model="GetSaleReturndt.尺寸W" type="text" placeholder="請輸入尺寸W">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 尺寸H</span>
                  <input class="form-control" name="尺寸H" v-model="GetSaleReturndt.尺寸H" type="text" placeholder="請輸入尺寸H">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 才數</span>
                  <input class="form-control" name="才數" v-model="GetSaleReturndt.才數" type="text" placeholder="請輸入才數">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 解析度</span>
                  <input class="form-control" name="解析度" v-model="GetSaleReturndt.解析度" type="text" placeholder="請輸入解析度">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 冷錶</span>
                  <input class="form-control" name="冷錶" v-model="GetSaleReturndt.冷錶" type="text" placeholder="請輸入冷錶">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 匯率</span>
                  <input class="form-control" name="匯率" v-model="GetSaleReturndt.匯率" type="text" placeholder="請輸入匯率">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 幣值</span>
                  <input class="form-control" name="幣值" v-model="GetSaleReturndt.幣值" type="text" placeholder="請輸入幣值">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 幣值總額</span>
                  <input class="form-control" name="幣值總額" v-model="GetSaleReturndt.幣值總額" type="text" placeholder="請輸入幣值總額">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 訂單編號</span>
                  <input class="form-control" name="訂單編號" v-model="GetSaleReturndt.訂單編號" type="text" placeholder="請輸入訂單編號">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button v-show="!isdtShow" class="btn btn-info btn-block" @click="dodtAdd">新增</button>
        <!-- 單身資料修改 -->
        <div class="box box-info" v-show="!isdtShow">
          <template v-for="(item,i) in GetSaleReturnDtList">
            <div class="btn-group">
              <button @click="dodtEdit(i)" class="btn bg-info btn-flat" type="button">編輯</button>
              <button @click="dodtDel(i,item.單據編號,item.識別碼)" class="btn bg-danger btn-flat" type="button">刪除</button>
            </div>
            <div class="box-body">
              <div class="col-md-3">
                <ul>
                  <li>
                    <span> 識別碼: {{item.識別碼}}</span>
                  </li>
                  <li>
                    <span>倉庫編號: {{item.倉庫編號}}</span>
                  </li>
                  <li>
                    <span>貨品編號: {{item.貨品編號}}</span>
                  </li>
                  <li>
                    <span>貨品名稱: {{item.貨品名稱}}</span>
                  </li>
                  <li>
                    <span>單價: {{item.單價}}</span>
                  </li>
                  <li>
                    <span>單位: {{item.單位}}</span>
                  </li>
                  <li>
                    <span>數量: {{item.數量}}</span>
                  </li>
                  <li>
                    <span>小計: {{item.小計}}</span>
                  </li>
                  <li>
                    <span>折數: {{item.折數}}</span>
                  </li>
                  <li>
                    <span>折讓: {{item.折讓}}</span>
                  </li>
                  <li>
                    <span>寄庫量: {{item.寄庫量}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>單位成本: {{item.單位成本}}</span>
                  </li>
                  <li>
                    <span>成本方式: {{item.成本方式}}</span>
                  </li>
                  <li>
                    <span>保固起始日: {{item.保固起始日}}</span>
                  </li>
                  <li>
                    <span>保固終止日: {{item.保固終止日}}</span>
                  </li>
                  <li>
                    <span>贈品: {{item.贈品}}</span>
                  </li>
                  <li>
                    <span>使用包裝: {{item.使用包裝}}</span>
                  </li>
                  <li>
                    <span>包裝數量: {{item.包裝數量}}</span>
                  </li>
                  <li>
                    <span>備註: {{item.備註}}</span>
                  </li>
                  <li>
                    <span>狀態: {{item.狀態}}</span>
                  </li>
                  <li>
                    <span>經理成本: {{item.經理成本}}</span>
                  </li>
                  <li>
                    <span>業務成本: {{item.業務成本}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>合約編號: {{item.合約編號}}</span>
                  </li>
                  <li>
                    <span>廠牌: {{item.廠牌}}</span>
                  </li>
                  <li>
                    <span>車型: {{item.車型}}</span>
                  </li>
                  <li>
                    <span>年份: {{item.年份}}</span>
                  </li>
                  <li>
                    <span>規格: {{item.規格}}</span>
                  </li>
                  <li>
                    <span>業務折數: {{item.業務折數}}</span>
                  </li>
                  <li>
                    <span>贈品金額: {{item.贈品金額}}</span>
                  </li>
                  <li>
                    <span>OrderCode: {{item.OrderCode}}</span>
                  </li>
                  <li>
                    <span>補價數量: {{item.補價數量}}</span>
                  </li>
                  <li>
                    <span>補價金額: {{item.補價金額}}</span>
                  </li>
                  <li>
                    <span>補價合計: {{item.補價合計}}</span>
                  </li>
                  <li>
                    <span>重量: {{item.重量}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>扣抵: {{item.扣抵}}</span>
                  </li>
                  <li>
                    <span>自備車: {{item.自備車}}</span>
                  </li>
                  <li>
                    <span>尺寸W: {{item.尺寸W}}</span>
                  </li>
                  <li>
                    <span>尺寸H: {{item.尺寸H}}</span>
                  </li>
                  <li>
                    <span>才數: {{item.才數}}</span>
                  </li>
                  <li>
                    <span>解析度: {{item.解析度}}</span>
                  </li>
                  <li>
                    <span>冷錶: {{item.冷錶}}</span>
                  </li>
                  <li>
                    <span>匯率: {{item.匯率}}</span>
                  </li>
                  <li>
                    <span>幣值: {{item.幣值}}</span>
                  </li>
                  <li>
                    <span>幣值總額: {{item.幣值總額}}</span>
                  </li>
                  <li>
                    <span>訂單編號: {{item.訂單編號}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr>
          </template>
        </div>
      </div>
      <div class="btn-group">
        <!-- 單身的按鈕 -->
        <button v-show="isdtShow" @click="doMethodsdt(GetSaleReturndt)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button v-show="isdtShow" @click="isdtShow = false" class="btn bg-maroon btn-flat" type="button">取消</button>
        <!-- 最後的提交 -->
        <button v-show="!isdtShow" @click="doMethods(GetSaleReturn)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button v-show="!isdtShow" @click="HideDiv" class="btn bg-maroon btn-flat " type="button">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetSaleReturn',
      'GetSaleReturndt',
      'GetSaleReturnDtList'
    ])
  },
  data() {
    return {
      isdtShow: false,
      saledtAdd: false,
      tempIndex: 0
    }
  },
  props: {
    isAdd: {
      type: null,
      required: true
    },
    HideDiv: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'SaleReturndtAddGet', // 單身點擊新增
      'SaleReturnReturnEditGet', // 單身點擊修改
      'SaleReturndtDelete', // 單身點擊刪除
      'SaleReturnAddPost', // 新增提交
      'SaleReturnEditPut', // 修改提交
      'SaleReturndtEditGet'
    ]),
    /* 最後的提交 */
    doMethods(model) {
      // 判斷單據編號是否有值,若有值則為修改,否則為新增
      if (model.單據編號 !== undefined) {
        this.SaleReturnEditPut({
          http: this.$http,
          model: model,
          dtModel: this.GetSaleReturnDtList
        })
      } else {
        this.SaleReturnAddPost({
          http: this.$http,
          model: model,
          dtModel: this.GetSaleReturnDtList
        })
      }
    },
    /* 單身資料點擊新增 */
    dodtAdd() {
      this.SaleReturndtAddGet()
      this.isdtShow = true // 單身編輯視窗顯示
      this.SaleReturndtAdd = true // 單身資料新增
    },
    /* 單身資料點擊修改 */
    dodtEdit(index) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      this.SaleReturndtEditGet(index)
      this.isdtShow = true // 單身編輯視窗顯示
      this.SaleReturndtAdd = false // 單身資料編輯
    },
    /* 單身資料點擊刪除 */
    dodtDel(index, formId, indexId) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      // 新增的刪除,直接從數組中移除即可
      if(indexId === undefined) {
        this.GetSaleReturnDtList.splice(this.tempIndex, 1)
        return
      }
      this.SaleReturndtDelete({
        http: this.$http,
        formId,
        indexId
      })
    },
    /* dtModel: 單身資料確定新增資料 */
    doMethodsdt(dtModel) {
      this.$validator.validateAll()
        .then(() => {
          if (this.SaleReturndtAdd) { // 新增
            let temp = dtModel
            this.GetSaleReturnDtList.push(temp)
            this.isdtShow = false // 單身編輯視窗不顯示
          } else { // 不是新增則要到取代此筆資料
            this.GetSaleReturnDtList.splice(this.tempIndex, 1, dtModel)
            this.isdtShow = false // 單身編輯視窗不顯示
          }
        }).catch((err) => console.log(err))
    }
  }
}

</script>
<style scoped>
ul {
  list-style-type: none;
}

ul li {
  text-align: left;
}

html hr {
  margin-top: 0;
  margin-bottom: 0px;
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

</style>
