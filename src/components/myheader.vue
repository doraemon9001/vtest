<template>
  <div>
    <!-- Main Header -->
    <header class="main-header">
      <!-- Logo -->
      <a href="#" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>k</b>p</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>k</b>p</span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <li class="dropdown messages-menu">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{{GetDbName}}
                    <span class="fa fa-caret-down"></span></button>
              <ul class="dropdown-menu red">
                <li><a href="#" @click="getDbName('宏億展業有限公司')">宏億展業有限公司</a></li>
                <li class="divider"></li>
                <li><a href="#" @click="getDbName('2')">Another action</a></li>
                <li class="divider"></li>
                <li><a href="#" @click="getDbName('3')">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'GetDbName'
      ])
    },
    methods: {
      ...mapActions([
        'DbNameGet'
      ]),
      getDbName(name) {
        this.DbNameGet({
          http: this.$http,
          name
        })
      }
    }
  }

</script>
<style scopde>
  .red {
    background: #2c3b41;
  }

</style>
