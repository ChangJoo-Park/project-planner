<template>
  <div>
    <h1 class="uk-text-lead">
      <a href="#" class="uk-icon-button uk-margin-small-right" uk-icon="icon: bookmark"></a>
      {{ currentProject.name }}
    </h1>
    <div class="uk-text-meta">{{ currentProject.description }}</div>
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
import { mapGetters } from 'vuex'

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async fetch ({ store, params }) {
    await store.dispatch('projects/fetchCurrentProject', params.id)
  },
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    })
  }
}
</script>

<style>

</style>
