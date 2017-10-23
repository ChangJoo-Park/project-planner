<template>
  <section class="container">
    <h1 class="title">Projects</h1>
    <button @click="createNewProject">Hello</button>
    {{ projects }}
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'page-index',
  async asyncData ({ params }) {
    const { data: projects } = await axios.get('http://localhost:3333/api/v1/projects')
    return { projects }
  },
  data: function () {
    return {
      projects: []
    }
  },
  methods: {
    createNewProject: function () {
      window.alert('Hello')
      console.log(this.projects)
    }
  }
}
</script>

<style scoped>
</style>
