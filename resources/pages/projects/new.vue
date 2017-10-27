<template>
  <section class="container">
  <form class="uk-form-horizontal uk-margin-large" @submit="submit">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">New Project</legend>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-text">Title</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Awesome Project">
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-select">Description</label>
        <div class="uk-form-controls">
          <textarea class="uk-textarea" placeholder="what is purpose?"></textarea>
        </div>
      </div>

      <div class="uk-margin">
        <button type="submit" class="uk-button uk-button-default">Submit</button>
      </div>
    </fieldset>
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
