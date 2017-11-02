<template>
  <div class="uk-offcanvas-content">
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
                <input class="uk-input" placeholder="New One" v-model="newTodo">
              </div>
            </div>
          </form>
          <todo-list
            @openTodo="openTodo"
          ></todo-list>
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
    <div v-if="selectedTodo" class="uk-position-fixed uk-position-top-left uk-width-1-1" uk-grid>
      <div class="uk-width-2-3 overlay" @click="closeTodo"></div>
      <div class="uk-width-1-3 details uk-margin">
        <button class="uk-close-large uk-float-right" type="button" uk-close  @click="closeTodo"></button>
        <div>
          <h1>{{ selectedTodo.name }}</h1>
        </div>
      </div>
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
      newTodo: '',
      selectedTodo: null
    }
  },
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    })
  },
  methods: {
    createNewTodo: async function () {
      console.log('create new todo')
      if (this.newTodo.trim() === '') {
        this.newTodo = ''
        return
      }

      await this.$store.dispatch('projects/addNewTodoToProject',{
         projectId: this.currentProject.id,
         todo: this.newTodo
       })

      this.newTodo = ''
    },
    openTodo: function (todo) {
      console.log('open todo')
      this.selectedTodo = todo
    },
    closeTodo: function () {
      this.selectedTodo = null
    }
  }
}
</script>

<style>
.overlay {
  /* position: fixed;
  top: 0;
  left: 0; */
  /* width: 100vw; */
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}
.details {
  height: 100vh;
  background-color: #fff;
}
</style>
