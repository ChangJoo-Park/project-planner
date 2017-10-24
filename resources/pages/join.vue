<template>
  <section>
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
    submit: function () {
      console.log(this.$data)
    }
  }
}
</script>

<style>

</style>
