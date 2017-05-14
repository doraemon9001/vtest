<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar" v-show="!ShowLoading" >
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar" style="height: auto;">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left ">
          </div>
          <div class="pull-left info">
          </div>
        </div>
        <!-- Sidebar Menu -->
        <template v-for="(n,i) in GetMetuItem.length">
          <ul class="sidebar-menu">
            <li class="treeview" v-for='item in GetMetuItem[i]'>
              <template v-if="item.MenuTopLevel == 0">
                <router-link :to="item.MenuBaseUrl">
                  <i :class="item.MenuItemClass"></i>
                  <span>{{item.MenuName}}</span>
                  <template v-if="item.MenuShowItemClass">
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </template>
                </router-link>
                <ul class="treeview-menu">
                  <template v-for="(n,i) in GetMetuItem.length">
                    <template v-for='childItem in GetMetuItem[i]'
                        v-if="childItem.MenuTopLevel == item.MenuId">
                        <li>
                          <router-link :to='childItem.MenuBaseUrl'> <i class="fa fa-circle-o text-aqua"></i>
                          {{childItem.MenuName}}</router-link>
                        </li>
                    </template>
                  </template>
                </ul>	
              </template>
            </li>
          </ul>
        </template>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'ShowLoading'
      ]),
      ...mapGetters([
        'GetMetuItem'
      ])
    },
    created() {
      this.MetuItem({
        http: this.$http
      })
    },
    methods: {
      ...mapActions([
        'MetuItem'
      ])
    }
  }

</script>

<style scoped>
  html .skin-red .sidebar-menu>li.header {
    color: black;
    background: #d73925;
  }

  html .skin-red .sidebar-menu>li:hover>a,
  .skin-red .sidebar-menu>li.active>a {
    color: black;
    background: #dd4b39;
    border-left-color: #dd4b39;
  }
</style>
