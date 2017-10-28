<template>
  <div>
    <h1 class="uk-text-lead">
      <a href="#" class="uk-icon-button uk-margin-small-right" uk-icon="icon: bookmark"></a>
      {{ currentProject.name }}
    </h1>
    <div class="uk-text-meta">{{ currentProject.description }}</div>
    <div class="uk-margin-small-top">
      <ul class="uk-tab" data-uk-tab="{ connect:'#project-details', animation: 'scale' }">
        <li><a href="#todos">Todos</a></li>
        <li><a href="#kanban">Kanban</a></li>
        <li><a href="#calendar">Calendar</a></li>
        <li><a href="#setting">Setting</a></li>
      </ul>
      <ul id="project-details" class="uk-switcher uk-margin">
        <li>
          <ul class="uk-list uk-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </li>
        <li>
          Kanban
        </li>
        <li>
          Calendar
        </li>
        <li>
          Setting
        </li>
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
