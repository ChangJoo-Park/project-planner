<template>
  <section class="container">
    <h1 class="title">Projects</h1>
    <button @click="logout">Logout</button>
    <div v-if="emptyProjects">
      <h2 class="title">Empty Projects!</h2>
    </div>
    <div v-else>
      {{ projects }}
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'page-index',
  middleware: 'auth',
  async asyncData ({ params }) {
    const { data: projects } = await axios.get('http://localhost:3333/api/v1/projects')
    return { projects }
  },
  data: function () {
    return {
      projects: []
    }
  },
  computed: {
    emptyProjects: function () {
      return this.projects.length === 0
    }
  },
  methods: {
    createNewProject: function () {
      console.log(this.projects)
    },
    logout: async function () {
      const logout = await this.$store.dispatch('logout')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped>
</style>
