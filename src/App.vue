<template>
  <div id="app">
    <template v-if="auth">
      <MyHeader />
      <div id="divContent">
        <MyAside />
        <router-view></router-view>
      </div>
      <MyFooter/>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import MyHeader from './components/myheader'
  import MyFooter from './components/myfooter'
  import MyAside from './components/myaside'
  import {
    mapState
  } from 'vuex'
  export default {
    // watch: {
    //   $route(to) {
    //     console.log('to', to.path)
    //     // this.$route.push('index')
    //   }
    // },
    created () {
      if(this.testLockrAuth) {
        this.$state.login.auth = true
      }
    },
    components: {
      MyHeader,
      MyFooter,
      MyAside
    },
    computed: {
      ...mapState({
        auth: state => state.login.auth
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #divContent {
    position: relative;
  }
 #divContent > .main-sidebar {
   color: #ffffff;
 }
</style>
