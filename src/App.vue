<template>
  <div id="app">
    <template v-if="auth">
      <MyHeader />
      <MyAside />
      <MyIndex />
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
  import MyIndex from './components/myindex'
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
    components: {
      MyHeader,
      MyFooter,
      MyIndex,
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

</style>
