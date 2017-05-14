<template lang="html">
  <div class="page-bar">
    <ul>
      <li v-if="currentPage!=1"><a v-on:click="btnClick(currentPage,'one')">第一頁</a></li>
      <li v-if="currentPage!=1"><a v-on:click="btnClick(currentPage,'prev')">上一頁</a></li>
      <li v-for="index in indexs" v-bind:class="{ active: currentPage == index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="currentPage != all"><a v-on:click="btnClick(currentPage,'next')">下一頁</a></li>
      <li><a><i class="fa fa-angle-right"></i>共{{all}}頁</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 0
    }
  },
  created () {
    this.currentPage = this.cur
  },
  props: {
    cur: {
      type: [String, Number],
      required: true
    },
    all: {
      type: [String, Number],
      required: true
    },
    callback: {
      type: Function,
      required: true
    }
  },
  computed: {
    indexs() {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 11) {
        if (this.currentPage > 5 && this.currentPage < this.all - 4) {
          left = this.currentPage - 5
          right = this.currentPage + 4
        } else {
          if (this.currentPage <= 5) {
            left = 1
            right = 10
          } else {
            right = this.all
            left = this.all - 9
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    btnClick(page, method) {
      if(method === 'one') {
        this.currentPage = 1
        this.callback(1)
        return
      }
      if(method === 'prev') {
        this.currentPage--
        this.callback(this.currentPage)
        return
      }
      if(method === 'next') {
        this.currentPage++
        this.callback(this.currentPage)
        return
      }
      if (page !== this.currentPage) {
        this.currentPage = page
        this.callback(page)
      }
    }
  }
}

</script>

<style lang="css">
ul,
li {
  margin: 0px;
  padding: 0px;
}

.page-bar li {
  list-style: none;
  display: inline-block;
}

.page-bar li:first-child>a {
  margin-left: 0px
}

.page-bar a {
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  cursor: pointer
}

.page-bar a:hover {
  background-color: #eee;
}

.page-bar .active a {
  color: #71ffeb;
  cursor: default;
  background-color: #2e353a;
  border-color: #337ab7;
}

.page-bar i {
  font-style: normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>
