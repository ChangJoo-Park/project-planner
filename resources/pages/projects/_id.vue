<template>
  <div>
    <h1 class="uk-text-lead">
      <a href="#" class="uk-icon-button uk-margin-small-right" uk-icon="icon: bookmark"></a>
      {{ currentProject.name }}
    </h1>
    <div class="uk-text-meta">{{ currentProject.description }}</div>
    <div class="uk-margin-small-top">
      <ul class="uk-tab" data-uk-tab="{ connect:'#project-details' }">
        <li><a href="#todos">Todos</a></li>
        <li><a href="#kanban">Kanban</a></li>
        <li><a href="#calendar">Calendar</a></li>
        <li><a href="#setting">Setting</a></li>
      </ul>
      <ul id="project-details" class="uk-switcher uk-margin">
        <li class="">
          <div>
            <form @submit.prevent="createNewTodo">
              <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                  <input class="uk-input" placeholder="New One">
                </div>
              </div>
            </form>
            <ul class="uk-list uk-list-divider">
              <li>
                <div class="uk-position-relative uk-margin-small-left">
                  <div>List item 1</div>
                  <div class="uk-position-center-right">
                    <a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="icon: user"></a>
                    <a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="icon: calendar"></a>
                  </div>
                </div>
              </li>
              <li class="uk-padding-small-left">
                <div class="uk-position-relative uk-margin-small-left">
                  List item 2
                </div>
              </li>
              <li class="uk-padding-small-left">
                <div class="uk-position-relative uk-margin-small-left">
                  List item 3
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!-- Kanban -->
        <li class="">
          Kanban
        </li>
        <li class="">
          Calendar
        </li>
        <li class="">
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
  },
  methods: {
    createNewTodo: function () {}
  }
}
</script>

<style>

</style>
