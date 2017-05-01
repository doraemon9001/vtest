<template>
  <div >
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .slide-enter,
  .slide-leave-to {
    display: none;
    opacity: .3;
  }
</style>
