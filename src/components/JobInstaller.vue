<template>
  <div class="main">
    <div class="jobBox">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    clearInterval()
  }
}
</script>

<style scoped lang="less">
@backgroundColor: ;
@secondaryColor: ;
@paymentColor: ;
@medicalColor: ;
@darkTR: ;
@lightTR: ;
@textColor: ;
@baseFontSize: ;
@boldText: "";
@sideText: "";
@bodyText: "";
@font-face {
  font-family: "";
  src: url("");
}

@font-face {
  font-family: "";
  src: url("");
}

@font-face {
  font-family: "";
  src: url("");
}

.main {
   background-size: cover;
   width: 100%;
   height: 100%;
   margin-left: 0px;
   margin-right: 0px;
   margin-bottom: 0px;
   padding-left: 0px;
   padding-right:0px;
   display: grid;
   grid-template-columns: 100%;
   grid-template-rows: 20px 500px 10px 20px;
}
</style>
