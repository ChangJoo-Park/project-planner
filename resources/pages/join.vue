<template>
  <section>
    <h1 class="title">Join</h1>
    <form @submit.prevent="submit">
      <div>
        <input type="text" placeholder="Username" v-model="username">
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="email">
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <input type="submit">
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'auth',
  data: function () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit: async function () {
      try {
        const register = await axios({
          method: 'post',
          url: 'http://localhost:3333/api/v1/users',
          data: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        this.$router.push({ name: 'login' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>

</style>
