<template>
  <section>
    <h1 class="title">Login</h1>
    <form @submit.prevent="login">
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
export default {
  layout: 'auth',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.email = ''
        this.password = ''
        this.$router.push({ name: 'projects' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>

</style>
