<template>
  <div>
    <div v-if="emptyTodos">
      <h1>Empty Todos</h1>
    </div>
    <ul class="uk-list uk-list-divider" v-else>
      <li v-for="todo in currentProject.todos" :key="todo.id">
        <div class="uk-position-relative uk-margin-small-left">
          <div>{{ todo.name }}</div>
          <div class="uk-position-center-right">
            <a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="icon: user"></a>
            <a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="icon: calendar"></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    }),
    emptyTodos: function () {
      return this.currentProject.todos.length === 0
    }
  }
}
</script>

<style>

</style>
