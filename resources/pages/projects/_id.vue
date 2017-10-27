<template>
  <div>
    <h1 class="uk-text-lead">{{ project.name }}</h1>
    <p class="uk-text-meta">{{ project.description }}</p>
    <div>
      {{ project }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ params }) {
    const { data: project } = await axios.get(`http://localhost:3333/api/v1/projects/${params.id}`)
    return { project }
  }
}
</script>

<style>

</style>
