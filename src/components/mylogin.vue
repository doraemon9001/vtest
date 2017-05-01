<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/login"><b>K</b>P</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">
        <h2>進銷存管理系統</h2>
      </p>
      <form action="../../index2.html" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" v-model="loginModel.AccountName" placeholder="Account">
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" v-model="loginModel.AccountPasswordStr" 
          @keydown.enter="AuthLogin(loginModel)" placeholder="Password">
        </div>
      </form>
      <a href="#" @click="login(loginModel)" class="btn btn-danger btn-lg">Login</a>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>
<script>
  import {
    mapActions,
    mapState
  } from 'vuex'
  export default {
    created() {
      if(this.auth) this.$router.push('/index')
      else console.log('not auth')
    },
    data() {
      return {
        loginModel: {// 測試用假資料
          AccountName: 'administrator',
          AccountPasswordStr: '1234'
        }
      }
    },
    computed: {
      ...mapState({
        auth: state => state.login.auth
      })
    },
    methods: {
      ...mapActions([
        'AuthLogin'
      ]),
      login(model) {
        this.AuthLogin({
          http: this.$http,
          model: model
        })
      }
    }
  }

</script>
<style scoped>
</style>
