<template>
  <div class="main">
    <div class="status"></div>
    <div class="usercontact"></div>
    <div class="jobcontact"></div>
    <div class="promo"></div>
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
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 200px 100px;
    overflow: hidden;
    }
    .status {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row: 1;
    }
    .usercontact {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row: 2;
    }
    .jobcontact {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row: 2;
    }
    .promo {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row: 3;
    }
</style>
