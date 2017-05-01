<template>
  <div class="zoomIn animated">
    <loading v-show="showLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!showLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>會員查詢<small>(三擇一)</small></h1>
        <ol class="breadcrumb">
          <li>
          </li>
          <li class="active">Here</li>
        </ol>
      </section>
      <!-- Main content start-->
      <div class="content">
        <div class="col-xs-12">
          <div class="box box-primary box-margin-left">
            <form role="form">
              <div class="box-body">
                <div class="input-group">
                  <span class="input-group-addon">會員姓名</span>
                  <input type="text" class="form-control" id="memberName" @keydown.enter="GetMember(member)" v-model="member.name" placeholder="請輸入會員姓名">
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">會員身份證</span>
                  <input type="text" class="form-control" id="memberName" placeholder="請輸入會員身份證">
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">會員手機號碼</span>
                  <input type="text" class="form-control" id="memberName" placeholder="請輸入會員姓名">
                </div>
              </div>
            </form>
            <div class="box-footer">
              <button type="submit" @click="GetMember(member)" class="btn btn-primary">查詢</button>
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
                          <th class="sorting" tabindex="0"><span class="badge bg-light-blue">會員資料</span></th>
                          <th class="sorting" tabindex="0"><span class="badge bg-light-blue">會員收件人(一)</span></th>
                          <th class="sorting" tabindex="0"><span class="badge bg-light-blue">會員收件人(二)</span></th>
                          <th class="sorting" tabindex="0"><span class="badge bg-light-blue">會員收件人(三)</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" :class="{ odd: index % 2 == 0 , even: index % 2 != 0 }" v-for="(member,index) in GetMemberList">
                          <td>
                            <div class="margincenter">
                              <dl>
                                <dt><small>姓名: </small>{{member.name}}</dt>
                                <dt><small>年齡: </small>{{member.age}}</dt>
                                <dt><small>電子信箱: </small>{{member.email}}</dt>
                                <dt><small>住址: </small>{{member.address}}</dt>
                                <dt><small>住家電話: </small>{{member.phone}}</dt>
                                <dt><small>手號號碼: </small>{{member.mobile}}</dt>
                                <dt><small>會員等級: </small>{{member.level}}</dt>
                                <dt><small>專屬代碼: </small>{{member.ownCode}}</dt>
                                <dt><small>加入時間: </small>{{member.joinTime}}</dt>
                                <dt><small>會員資料修改人員: </small>{{member.updateUser}}</dt>
                                <dt><small>會員資料修改時間: </small>{{member.updateTime}}</dt>
                              </dl>
                            </div>
                          </td>
                          <template v-for="rec in member.receiveInfo">
                            <td v-if="rec.name != undefined">
                            <div class="margincenter">
                              <dl>
                                <dt><small>收件人姓名: </small>{{rec.name}} </dt>
                                <dt><small>收件人聯絡電話: </small>{{rec.phone}} </dt>
                                <dt><small>收件人地址: </small>{{rec.receiveAddress}} </dt>
                                <dt><small>收件人電子信箱: </small>{{rec.email}} </dt>
                                <dt><small>收件人備註: </small>{{rec.remark}} </dt>
                              </dl>
                            </div>
                            </td>
                            <td v-else>無</td>
                          </template>
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
  export default {
    data () {
      return {
        show: true,
        showTable: false,
        member: {
          name: '',
          id: '',
          mobile: ''
        }
      }
    },
    computed: {
      ...mapState([
        'showLoading'
      ]),
      ...mapGetters([
        'GetMemberList'
      ])
    },
    methods: {
      ...mapActions([
        'GetMember'
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
