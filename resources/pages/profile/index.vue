<template>
  <div>
    <form @submit.prevent="submit">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Username</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text...">
        </div>
      </div>
      <div class="uk-margin" uk-margin>
        <button type="submit" class="uk-button uk-button-default">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function () {
      window.alert('save')
    }
  }
}
</script>

<style>

</style>
