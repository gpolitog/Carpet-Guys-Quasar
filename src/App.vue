<template>
  <div id="q-app">
    <header>
    </header>
    <main>
      <navbar v-on:logOut="logOut" :loggedNav="user.isLoggedIn"></navbar>
      <router-view v-on:login="login" v-on:register="register" :userId="user.id" :token="user.token" :logged="user.isLoggedIn"></router-view>
      <foot></foot>
    </main>
  </div>
</template>

<script>
import Navbar from './components/elements/Navbar'
import Foot from './components/elements/Foot'

export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'foot': Foot
  },
  data: function () {
    return {
      user: {
        token: '',
        id: '',
        isLoggedIn: false
      }
    }
  },
  methods: {
    login (user) {
      this.user.token = user.token
      this.user.id = user.id
      this.user.isLoggedIn = true
      this.$router.push('/call')
    },
    register (user) {
      this.user.token = user.token
      this.user.id = user.userId
      this.user.isLoggedIn = true
      this.$router.push('/account')
    },
    logOut () {
      this.user.token = ''
      this.user.id = ''
      this.user.isLoggedIn = false
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">

</style>
