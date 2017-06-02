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
                <button type="button" class="btn btn-danger">廠商編號</button>
              </div>
              <input class="form-control" name="廠商編號" v-model="GetStock.廠商編號" type="text" placeholder="請輸入廠商編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">廠商名稱</button>
              </div>
              <input class="form-control" name="廠商名稱" v-model="GetStock.廠商名稱" type="text" placeholder="請輸入廠商名稱">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">結帳日</button>
              </div>
              <input class="form-control" name="結帳日" v-model="GetStock.結帳日" type="text" placeholder="請輸入結帳日">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">工廠地址</button>
              </div>
              <input class="form-control" name="工廠地址" v-model="GetStock.工廠地址" type="text" placeholder="請輸入工廠地址">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預到貨日</button>
              </div>
              <input class="form-control" name="預到貨日" v-model="GetStock.預到貨日" type="text" placeholder="請輸入預到貨日">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">部門編號</button>
              </div>
              <input class="form-control" name="部門編號" v-model="GetStock.部門編號" type="text" placeholder="請輸入部門編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">業務編號</button>
              </div>
              <input class="form-control" name="業務編號" v-model="GetStock.業務編號" type="text" placeholder="請輸入業務編號">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">單據金額</button>
              </div>
              <input class="form-control" name="單據金額" v-model="GetStock.單據金額" type="text" placeholder="請輸入單據金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">單據折讓</button>
              </div>
              <input class="form-control" name="單據折讓" v-model="GetStock.單據折讓" type="text" placeholder="請輸入單據折讓">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">貨品折讓</button>
              </div>
              <input class="form-control" name="貨品折讓" v-model="GetStock.貨品折讓" type="text" placeholder="請輸入貨品折讓">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">付款折讓</button>
              </div>
              <input class="form-control" name="付款折讓" v-model="GetStock.付款折讓" type="text" placeholder="請輸入付款折讓">
            </div>
          </div>
          <div class="tab-pane" id="tab_2">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">稅額</button>
              </div>
              <input class="form-control" name="稅額" v-model="GetStock.稅額" type="text" placeholder="請輸入稅額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">稅金計算</button>
              </div>
              <input class="form-control" name="稅金計算" v-model="GetStock.稅金計算" type="text" placeholder="請輸入稅金計算">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">發票號碼</button>
              </div>
              <input class="form-control" name="發票號碼" v-model="GetStock.發票號碼" type="text" placeholder="請輸入發票號碼">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">應付金額</button>
              </div>
              <input class="form-control" name="應付金額" v-model="GetStock.應付金額" type="text" placeholder="請輸入應付金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預付現金</button>
              </div>
              <input class="form-control" name="預付現金" v-model="GetStock.預付現金" type="text" placeholder="請輸入預付現金">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預付支票</button>
              </div>
              <input class="form-control" name="預付支票" v-model="GetStock.預付支票" type="text" placeholder="請輸入預付支票">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">預付其他</button>
              </div>
              <input class="form-control" name="預付其他" v-model="GetStock.預付其他" type="text" placeholder="請輸入預付其他">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">支票號碼</button>
              </div>
              <input class="form-control" name="支票號碼" v-model="GetStock.支票號碼" type="text" placeholder="請輸入支票號碼">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">備註</button>
              </div>
              <input class="form-control" name="備註" v-model="GetStock.備註" type="text" placeholder="請輸入備註">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">調撥入倉</button>
              </div>
              <input class="form-control" name="調撥入倉" v-model="GetStock.調撥入倉" type="text" placeholder="請輸入調撥入倉">
            </div>
          </div>
          <div class="tab-pane" id="tab_3">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">已沖帳金額</button>
              </div>
              <input class="form-control" name="已沖帳金額" v-model="GetStock.已沖帳金額" type="text" placeholder="請輸入已沖帳金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">已付金額</button>
              </div>
              <input class="form-control" name="已付金額" v-model="GetStock.已付金額" type="text" placeholder="請輸入已付金額">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">未付金額</button>
              </div>
              <input class="form-control" name="未付金額" v-model="GetStock.未付金額" type="text" placeholder="請輸入未付金額">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">採購單號</button>
              </div>
              <input class="form-control" name="採購單號" v-model="GetStock.採購單號" type="text" placeholder="請輸入採購單號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">製單人員</button>
              </div>
              <input class="form-control" name="製單人員" v-model="GetStock.製單人員" type="text" placeholder="請輸入製單人員">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">狀態</button>
              </div>
              <input class="form-control" name="狀態" v-model="GetStock.狀態" type="text" placeholder="請輸入狀態">
            </div>
          </div>
        </div>
        <!-- 單身資料新增 -->
        <div class="box box-info" v-show="isdtShow">
          <div class="box-body">
            <div class="col-md-4">
              <input class="form-control" name="識別碼" v-model="GetStockdt.識別碼" type="hidden">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 倉庫編號</span>
                  <input class="form-control" name="倉庫編號" v-model="GetStockdt.倉庫編號" type="text" placeholder="請輸入倉庫編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 貨品編號</span>
                  <input class="form-control" name="貨品編號" v-model="GetStockdt.貨品編號" type="text" placeholder="請輸入貨品編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 貨品名稱</span>
                  <input class="form-control" name="貨品名稱" v-model="GetStockdt.貨品名稱" type="text" placeholder="請輸入貨品名稱">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 單價</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('單價') }" class="form-control" name="單價" v-model="GetStockdt.單價" type="text" placeholder="請輸入單價">
                  <span v-show="errors.has('單價')" class="help is-danger">{{ errors.first('單價') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 單位</span>
                  <input class="form-control" name="單位" v-model="GetStockdt.單位" type="text" placeholder="請輸入單位">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 數量</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('數量') }" class="form-control" name="數量" v-model="GetStockdt.數量" type="text" placeholder="請輸入數量">
                  <span v-show="errors.has('數量')" class="help is-danger">{{ errors.first('數量') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 小計</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('小計') }" class="form-control" name="小計" v-model="GetStockdt.小計" type="text" placeholder="請輸入小計">
                  <span v-show="errors.has('小計')" class="help is-danger">{{ errors.first('小計') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 折數</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('折數') }" class="form-control" name="折數" v-model="GetStockdt.折數" type="text" placeholder="請輸入折數">
                  <span v-show="errors.has('折數')" class="help is-danger">{{ errors.first('折數') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 折讓</span>
                  <input v-validate="'required|min_value:1'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('折讓') }" class="form-control" name="折讓" v-model="GetStockdt.折讓" type="text" placeholder="請輸入折讓">
                  <span v-show="errors.has('折讓')" class="help is-danger">{{ errors.first('折讓') }}</span>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 使用包裝</span>
                  <input class="form-control" name="使用包裝" v-model="GetStockdt.使用包裝" type="text" placeholder="請輸入使用包裝">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 包裝數量</span>
                  <input class="form-control" name="包裝數量" v-model="GetStockdt.包裝數量" type="text" placeholder="請輸入包裝數量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 採購單號</span>
                  <input class="form-control" name="採購單號" v-model="GetStockdt.採購單號" type="text" placeholder="請輸入採購單號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 備註</span>
                  <input class="form-control" name="備註" v-model="GetStockdt.備註" type="text" placeholder="請輸入備註">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 狀態</span>
                  <input class="form-control" name="狀態" v-model="GetStockdt.狀態" type="text" placeholder="請輸入狀態">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 庫存量</span>
                  <input class="form-control" name="庫存量" v-model="GetStockdt.庫存量" type="text" placeholder="請輸入庫存量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 未入庫數量</span>
                  <input class="form-control" name="未入庫數量" v-model="GetStockdt.未入庫數量" type="text" placeholder="請輸入未入庫數量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 廠牌</span>
                  <input class="form-control" name="廠牌" v-model="GetStockdt.廠牌" type="text" placeholder="請輸入廠牌">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 車型</span>
                  <input class="form-control" name="車型" v-model="GetStockdt.車型" type="text" placeholder="請輸入車型">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 年份</span>
                  <input class="form-control" name="年份" v-model="GetStockdt.年份" type="text" placeholder="請輸入年份">
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 規格</span>
                  <input class="form-control" name="規格" v-model="GetStockdt.規格" type="text" placeholder="請輸入規格">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 保固起始日</span>
                  <input class="form-control" name="保固起始日" v-model="GetStockdt.保固起始日" type="text" placeholder="請輸入保固起始日">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 保固終止日</span>
                  <input class="form-control" name="保固終止日" v-model="GetStockdt.保固終止日" type="text" placeholder="請輸入保固終止日">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 重量</span>
                  <input class="form-control" name="重量" v-model="GetStockdt.重量" type="text" placeholder="請輸入重量">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 扣抵</span>
                  <input class="form-control" name="扣抵" v-model="GetStockdt.扣抵" type="text" placeholder="請輸入扣抵">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 自備車</span>
                  <input class="form-control" name="自備車" v-model="GetStockdt.自備車" type="text" placeholder="請輸入自備車">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 匯率</span>
                  <input class="form-control" name="匯率" v-model="GetStockdt.匯率" type="text" placeholder="請輸入匯率">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 幣值</span>
                  <input class="form-control" name="幣值" v-model="GetStockdt.幣值" type="text" placeholder="請輸入幣值">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 幣值總額</span>
                  <input class="form-control" name="幣值總額" v-model="GetStockdt.幣值總額" type="text" placeholder="請輸入幣值總額">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button v-show="!isdtShow" class="btn btn-info btn-block" @click="dodtAdd">新增</button>
        <!-- 單身資料修改 -->
        <div class="box box-info" v-show="!isdtShow">
          <template v-for="(item,i) in GetStockDtList">
            <div class="btn-group">
              <button @click="dodtEdit(i)" class="btn bg-info btn-flat" type="button">編輯</button>
              <button @click="dodtDel(i,item.單據編號,item.識別碼)" class="btn bg-danger btn-flat" type="button">刪除</button>
            </div>
            <div class="box-body">
              <div class="col-md-4">
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
                    <span>保固起始日: {{item.保固起始日}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <span>保固終止日: {{item.保固終止日}}</span>
                  </li>
                  <li>
                    <span>使用包裝: {{item.使用包裝}}</span>
                  </li>
                  <li>
                    <span>包裝數量: {{item.包裝數量}}</span>
                  </li>
                  <li>
                    <span>採購單號: {{item.採購單號}}</span>
                  </li>
                  <li>
                    <span>備註: {{item.備註}}</span>
                  </li>
                  <li>
                    <span>狀態: {{item.狀態}}</span>
                  </li>
                  <li>
                    <span>庫存量: {{item.庫存量}}</span>
                  </li>
                  <li>
                    <span>未入庫數量: {{item.未入庫數量}}</span>
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
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <span>規格: {{item.規格}}</span>
                  </li>
                  <li>
                    <span>重量: {{item.重量}}</span>
                  </li>
                  <li>
                    <span>扣抵: {{item.扣抵}}</span>
                  </li>
                  <li>
                    <span>自備車: {{item.自備車}}</span>
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
                </ul>
              </div>
            </div>
            <hr>
          </template>
        </div>
      </div>
      <div class="btn-group">
        <!-- 單身的按鈕 -->
        <button v-show="isdtShow" @click="doMethodsdt(GetStockdt)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button v-show="isdtShow" @click="isdtShow = false" class="btn bg-maroon btn-flat" type="button">取消</button>
        <!-- 最後的提交 -->
        <button v-show="!isdtShow" @click="doMethods(GetStock)" class="btn bg-orange btn-flat" type="button">確定</button>
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
      'GetStock',
      'GetStockdt',
      'GetStockDtList'
    ])
  },
  data() {
    return {
      isdtShow: false,
      stockAdd: false,
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
      'StockdtAddGet', // 單身點擊新增
      'StockdtEditGet', // 單身點擊修改
      'StockdtDelete', // 單身點擊刪除
      'StockAddPost', // 新增提交
      'StockEditPut' // 修改提交
    ]),
    /* 最後的提交 */
    doMethods(model) {
      // 判斷單據編號是否有值,若有值則為修改,否則為新增
      if (model.單據編號 !== undefined) {
        this.StockEditPut({
          http: this.$http,
          model: model,
          dtModel: this.GetStockDtList
        })
      } else {
        this.StockAddPost({
          http: this.$http,
          model: model,
          dtModel: this.GetStockDtList
        })
      }
    },
    /* 單身資料點擊新增 */
    dodtAdd() {
      this.StockdtAddGet()
      this.isdtShow = true // 單身編輯視窗顯示
      this.stockAdd = true // 單身資料新增
    },
    /* 單身資料點擊修改 */
    dodtEdit(index) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      this.StockdtEditGet(index)
      this.isdtShow = true // 單身編輯視窗顯示
      this.stockAdd = false // 單身資料編輯
    },
    /* 單身資料點擊刪除 */
    dodtDel(index, formId, indexId) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      // 新增的刪除,直接從數組中移除即可
      if (indexId === undefined) {
        this.GetStockDtList.splice(this.tempIndex, 1)
        return
      }
      this.StockdtDelete({
        http: this.$http,
        formId,
        indexId
      })
    },
    /* dtModel: 單身資料確定新增資料 */
    doMethodsdt(dtModel) {
      this.$validator.validateAll()
        .then(() => {
          if (this.stockAdd) { // 新增
            let temp = dtModel
            this.GetStockDtList.push(temp)
            this.isdtShow = false // 單身編輯視窗不顯示
          } else { // 不是新增則要到取代此筆資料
            this.GetStockDtList.splice(this.tempIndex, 1, dtModel)
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
