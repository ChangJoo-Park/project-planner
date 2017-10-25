<template>
  <section class="container">
    <h1 class="title">New Project</h1>
    <form @submit.prevent="submit">
      <div>
        <input type="text" v-model="name" placeholder="Name">
      </div>
      <div>
        <textarea v-model="description" placeholder="Description"></textarea>
      </div>
      <div>
        <input type="submit">
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    submit: async function () {
      try {
        const project = await axios({
          method: 'post',
          url: 'http://localhost:3333/api/v1/projects',
          data: {
            name: this.name,
            description: this.description
          }
        })
        this.$router.back()
      } catch (e) {
        console.log('error : ' , e)
      }
    }
  }
}
</script>

<style>

</style>
