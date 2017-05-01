<template>
  <div class="">
    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; {{dateYear}} 
      <a target="blank" href="#">KP</a>.</strong>
    </footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dateYear: new Date().getFullYear()
      }
    }
  }

</script>
<style scoped>

</style>
