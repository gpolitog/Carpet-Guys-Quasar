<template>
  <div class="main">
    home
  </div>
</template>

<script>
  export default {
    name: 'home',
    created () {
      clearInterval()
      if (this.logged === true) {
        this.$router.push('/call')
      }
      else {
        this.$router.push('/login')
      }
    },
    data: function () {
      return {
        logged: false
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
  }

</style>
