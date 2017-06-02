<template>
  <div class="myModal" v-show="isAdd">
    <div style="width:650px;height:350px;position:fixed;left:30%;z-index:777;">
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 貨品編號</span>
        <input class="form-control" name="貨品編號" v-model="GetGoods.貨品編號" type="text" placeholder="請輸入貨品編號">
      </div>
      <div class="input-group" :class="{'has-error': errors.has('貨品名稱') }">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 貨品名稱</span>
        <input class="form-control" name="貨品名稱" v-model="GetGoods.貨品名稱" type="text" placeholder="請輸入公司名稱">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 類別編號</span>
        <input class="form-control" name="類別編號" v-model="GetGoods.類別編號" type="text" placeholder="請輸入類別編號">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 注音碼</span>
        <input class="form-control" name="注音碼" v-model="GetGoods.注音碼" type="text" placeholder="請輸入注音碼">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 原廠編號</span>
        <input class="form-control" name="原廠編號" v-model="GetGoods.原廠編號" type="text" placeholder="請輸入原廠編號">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 條碼編號</span>
        <input class="form-control" name="條碼編號" v-model="GetGoods.條碼編號" type="text" placeholder="請輸入條碼編號">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 規格</span>
        <input class="form-control" name="規格" v-model="GetGoods.規格" type="text" placeholder="請輸入規格">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 庫存量</span>
        <input class="form-control" name="庫存量" v-model="GetGoods.庫存量" type="text" placeholder="請輸入庫存量">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 最小單位</span>
        <input class="form-control" name="最小單位" v-model="GetGoods.最小單位" type="text" placeholder="請輸入最小單位">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 包裝單位</span>
        <input class="form-control" name="包裝單位" v-model="GetGoods.包裝單位" type="text" placeholder="請輸入包裝單位">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 包裝數量</span>
        <input class="form-control" name="包裝數量" v-model="GetGoods.包裝數量" type="text" placeholder="請輸入包裝數量">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 備註</span>
        <input class="form-control" name="備註" v-model="GetGoods.備註" type="text" placeholder="請輸入備註">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 最近進貨日</span>
        <input class="form-control" name="最近進貨日" v-model="GetGoods.最近進貨日" type="text" placeholder="請輸入最近進貨日">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 最近進貨單號</span>
        <input class="form-control" name="最近進貨單號" v-model="GetGoods.最近進貨單號" type="text" placeholder="請輸入最近進貨單號">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 最近進貨金額</span>
        <input class="form-control" name="最近進貨金額" v-model="GetGoods.最近進貨金額" type="text" placeholder="請輸入最近進貨金額">
      </div>
      <input type="hidden" v-model="GetGoods.貨品編號" />
      <div class="btn-group">
        <button @click="doMethods(GetGoods)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button @click="HideDiv" class="btn bg-maroon btn-flat " type="button">取消</button>
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
      'GetGoods'
    ])
  },
  data() {
    return {
      isdtShow: false,
      goodsisAdd: false,
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
      'GoodsdtAddGet', // 單身點擊新增
      'GoodsdtEditGet', // 單身點擊修改
      'GoodsdtDelete', // 單身點擊刪除
      'GoodsAddPost', // 新增提交
      'GoodsEditPut' // 修改提交
    ]),
    /* 最後的提交 */
    doMethods(model) {
      // 判斷建檔人是否有值,若有值則為修改,否則為新增
      if (model.建檔人 !== undefined) {
        this.GoodsEditPut({
          http: this.$http,
          model: model
        })
      } else {
        this.GoodsAddPost({
          http: this.$http,
          model: model
        })
      }
    },
    /* 單身資料點擊新增 */
    dodtAdd() {
      this.GoodsdtAddGet()
      this.isdtShow = true // 單身編輯視窗顯示
      this.goodsisAdd = true // 單身資料新增
    },
    /* 單身資料點擊修改 */
    dodtEdit(index) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      this.SaledtEditGet(index)
      this.isdtShow = true // 單身編輯視窗顯示
      this.goodsisAdd = false // 單身資料編輯
    },
    /* 單身資料點擊刪除 */
    dodtDel(index, formId, indexId) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      // 新增的刪除,直接從數組中移除即可
      if (indexId === undefined) {
        this.GetSaleDtList.splice(this.tempIndex, 1)
        return
      }
      this.SaledtDelete({
        http: this.$http,
        formId,
        indexId
      })
    },
    /* dtModel: 單身資料確定新增資料 */
    doMethodsdt(dtModel) {
      console.log(dtModel)
      this.$validator.validateAll()
        .then(() => {
          if (this.goodsisAdd) { // 新增
            let temp = dtModel
            this.GetSaleDtList.push(temp)
            this.isdtShow = false // 單身編輯視窗不顯示
          } else { // 不是新增則要到取代此筆資料
            this.GetSaleDtList.splice(this.tempIndex, 1, dtModel)
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
