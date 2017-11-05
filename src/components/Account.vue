<template>
  <div class="main">
    account
  </div>
</template>

<script>
  export default {
    name: 'account',
    created () {
      if (this.logged === false) {
        this.$router.push('/login')
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
