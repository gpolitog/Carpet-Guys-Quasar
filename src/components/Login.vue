<template>
  <div class="main">
    login
  </div>
</template>

<script>
  export default {
    name: 'login',
    created () {
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
