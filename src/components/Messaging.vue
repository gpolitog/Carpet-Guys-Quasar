<template>
  <div class="main">
    <ul class="Messages">
      <li v-for="message in inMessages">{{message.contents}}</li>
      <li v-for="message in outMessages">{{message.contents}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inMessages: [{ contents: 'hello jim' }, { contents: 'how are you?' }],
      outMessages: [{ contents: 'hello larry' }, { contents: 'good!' }]
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">

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
   grid-template-columns: 10px repeat(5, 1fr) 10px;
   grid-template-rows: repeat(10, 100px);
  }
</style>
