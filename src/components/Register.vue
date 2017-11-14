<template>
  <div class="main">
    <div> Register </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    created () {
      clearInterval()
      if (this.logged === true) {
        this.$router.push('/account')
      }
    },
    data: function () {
      return {
      }
    },
    props: ['logged']
  }
</script>

<style scoped lang="less">
  .main {
  }

</style>
