<template>
  <section class="container">
    <div class="uk-child-width-1-3@s uk-grid-match" uk-grid>
      <div v-for="project in projects" :key="project.id">
        <div class="uk-card uk-card-default">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="40" height="40" src="https://getuikit.com/docs/images/avatar.jpg">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-text-small uk-margin-remove-bottom">{{ project.name }}</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{ project.created_at }}</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
              <p>{{ project.description }}</p>
            </div>
            <div class="uk-card-footer">
              <nuxt-link :to="{ name: 'projects-id', params: { id: project.id } }" class="uk-button uk-button-text">READ MORE</nuxt-link>
            </div>
        </div>
      </div>
      <!-- New Project -->
      <div>
        <div class="uk-card uk-card-body">
          <h3 class="uk-card-title"  style="text-align: center;">Start a new one!</h3>
          <div class="uk-card-body" style="text-align: center;">
            <nuxt-link :to="{ name: 'projects-new' }" class="uk-icon-link uk-margin-small-right" uk-icon="icon:  plus-circle; ratio: 3.5"></nuxt-link>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    emptyProjects: function () {
      return this.projects.length === 0
    }
  },
  methods: {
    createNewProject: function () {
      console.log(this.projects)
    }
  }
}
</script>

<style scoped>
</style>
