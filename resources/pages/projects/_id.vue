<template>
  <div>
    <h1 class="uk-text-lead">
      {{ project.name }}
      <small class="uk-text-meta">
        {{ project.description }}
      </small>
    </h1>
    <div class="uk-margin-medium-top">
      <ul class="uk-tab" data-uk-tab="{ connect:'#project-details', animation: 'scale' }">
        <li><a href="">Iterations</a></li>
        <li><a href="">Setting</a></li>
      </ul>
      <ul id="project-details" class="uk-switcher uk-margin">
        <li>
          This slide contains a hidden link, that selects the next slide when clicked. The click is simulated by jacascript to mimic autoplay.
        </li>
        <li>Content 2</li>
        <li>Content 3</li>
      </ul>
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
