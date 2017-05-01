<template>
  <div class="zoomIn animated">
    <loading v-show="show" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!show">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>會員等級設定<small></small></h1>
        <ol class="breadcrumb">
          <li>
          </li>
          <li class="active">Here</li>
        </ol>
      </section>
      <!--<div class="myModel" v-show="isAdd" >
        <div style="width:350px;height:350px;position:fixed;left:40%;z-index:777;">
          <select class="form-control" v-model="addCondiction" name="selAddCondition" id="selAddCondition">
            <option v-for="n in 20" :value="10000 | valMultiplyn(n) ">大於{{10000 | valMultiplyn(n) }} 元</option>
          </select>
          <button @click="addVipCondition" class="btn btn-info" type="button">新增</button>
          <button @click="isAdd = false" class="btn btn-info" type="button">取消</button>
        </div>
      </div>-->
      <!-- Main content start-->
      <div class="content">
        <div class="col-xs-12">
          <div class="box box-primary box-margin-left">
            <form role="form">
              <div class="box-body">
                <div class="col-md-12">
                  <h3>VIP條件</h3>
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">會員等級</span>
                  <input type="text" class="form-control" id="memberName" v-model="vipModel.vlevel" placeholder="請輸入會員等級">
                  <!--<select class="form-control" name="selVipCondition" id="selVipCondition">
                    <option v-for="item in VipCondition" :value="item.value">{{item.name}}</option>
                  </select>
                  <span class="input-group-btn">
                    <button @click="isAdd = true"  class="btn btn-info" type="button">+</button>
                  </span>-->
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">消費累積</span>
                  <input type="text" class="form-control" id="memberName" v-model="vipModel.totalamount" placeholder="請輸入會員累積金額">
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">優惠折扣%數</span>
                  <input type="text" class="form-control" id="memberName" v-model="vipModel.discounted" placeholder="請輸入會員優惠折扣%數">
                </div>
              </div>
            </form>
            <div class="box-footer">
              <button @click="AddVipList(vipModel)" class="btn btn-success btn-lg btn-block"><i class="fa fa-plus" aria-hidden="true"></i> 新增VIP群組</button>
            </div>
          </div>
        </div>
        <!--table start-->
        <div class="col-xs-12">
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3 class="box-title">會員列表</h3>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <div class="col-sm-12">
                    <table id="tbMember" class="table" role="grid">
                      <thead>
                        <tr role="row">
                          <th class="sorting" tabindex="0">會員等級</th>
                          <th class="sorting" tabindex="0">消費累積</th>
                          <th class="sorting" tabindex="0">優惠折扣%數</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" v-for="(vip,index) in GetVipList">
                          <td>{{vip.vlevel}}</td>
                          <td>{{vip.totalamount}}</td>
                          <td>{{vip.discounted}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="box-footer">
                      <button @click="alert('123')" class="btn bg-orange btn-lg btn-block"><i class="fa fa-refresh" aria-hidden="true"></i> 更新會員等級</button>
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
    </div>
    <!-- Page content end-->
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    data () {
      return {
        show: true,
        vipModel: {}
      }
    },
    created () {
      setTimeout(() => {
        this.show = false
      }, 1000)
    },
    computed: {
      ...mapGetters([
        'GetVipList'
      ])
    },
    methods: {
      ...mapActions([
        'GetVipList',
        'AddVipList'
      ])
    }
  }

</script>
<style scoped>
  #tbMember {
    font-family: '微軟正黑體';
  }
  .margincenter {
    width: 350px;
    text-align: left;
    margin: 0px auto;
    font-size: 16px;
  }
  .myModel {
    position: fixed; /* Stay in place */
    z-index: 778; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
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

  #tbMember {
    --width: 4500px;
  }

  #tbMember>thead>tr>th {
    text-align: center;
  }

</style>
