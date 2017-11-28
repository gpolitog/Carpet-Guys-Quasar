<template>
  <div class="main">
    <div class="messages">
      <div v-bind:class="{ 'inMessage' : !message.sender, 'outMessage' : message.sender }" v-for="message in messages">{{message.contents}}</div>
    </div>
    <input v-bind:class="smallInputLogic" v-model="input"></input>
    <div v-bind:class="smallSendLogic" v-on:click="send">Send</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: [{ contents: 'hello jim', sender: true }, { contents: 'how are you?', sender: false }, { contents: 'Good you?', sender: true }, { contents: 'Great!', sender: false }],
      user: 'bob',
      input: '',
      inputToggle: false
    }
  },
  methods: {
    send () {
      this.messages.push({contents: this.input, sender: true})
      this.input = ''
    }
  },
  created () {
  },
  computed: {
    smallInputLogic: function () {
      return {
        smallInput: !this.inputToggle,
        hidden: this.inputToggle
      }
    },
    smallSendLogic: function () {
      return {
        smallSend: !this.inputToggle,
        hidden: this.inputToggle
      }
    }
  }
}
</script>

<style scoped lang="less">
  @backgroundColor: #ccc;
  @secondaryColor: #50A061;
  @fontColor: #fff;

  .messages {
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
     grid-template-rows: repeat(10, 50px);
  }

  .outMessage {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    grid-column-start: 2;
    grid-column-end: 6;
    background-color: @backgroundColor;
  }

  .inMessage {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    grid-column-start: 3;
    grid-column-end: 7;
    background-color: @secondaryColor;
    color: @fontColor;
  }

  .smallInput {
    width: 100%;
    position: fixed;
    bottom: 20;
    left: 0;
  }

  .smallSend {
    position: fixed;
    bottom: 20;
    right: 0;
    width: 20%;
    background-color: @secondaryColor;
    z-index: 2;
  }
</style>
