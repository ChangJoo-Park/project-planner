<template>
  <div>
    <h1 class="uk-text-lead">
      <a href="#" class="uk-icon-button uk-margin-small-right" uk-icon="icon: bookmark"></a>
      {{ currentProject.name }}
      <small class="uk-text-meta">{{ currentProject.description }}</small>
    </h1>

    <div class="uk-margin-small-top">
      <ul class="uk-tab" data-uk-tab="{ connect:'#project-details' }">
        <li><a href="#todos">Todos</a></li>
        <li><a href="#kanban">Kanban</a></li>
        <li><a href="#calendar">Calendar</a></li>
        <li><a href="#setting">Setting</a></li>
      </ul>
      <ul id="project-details" class="uk-switcher uk-margin">
        <li class="">
          <form @submit.prevent="createNewTodo">
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <input class="uk-input" placeholder="New One" v-model="todo">
              </div>
            </div>
          </form>
          <todo-list></todo-list>
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
const TodoList = () => import('~/components/TodoList')

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async fetch ({ store, params }) {
    await store.dispatch('projects/fetchCurrentProject', params.id)
  },
  components: {
    TodoList
  },
  data: function () {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    })
  },
  methods: {
    createNewTodo: async function () {
      if (this.todo.trim() === '') {
        this.todo = ''
        return
      }

      await this.$store.dispatch('projects/addNewTodoToProject',
       {
         projectId: this.currentProject.id,
         todo: this.todo
       })
      this.todo = ''
    }
  }
}
</script>

<style>

</style>
