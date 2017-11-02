import axios from 'axios'

export const state = () => ({
  list: null,
  currentProject: null
})

export const mutations = {
  SET_PROJECTS: function (state, projects) {
    state.list = projects
  },
  SET_CURRENT_PROJECT: function (state, project) {
    state.currentProject = project
  },
  ADD_TODO_CURRENT_PROJECT: function (state, todo) {
    state.currentProject.todos.push(todo)
  }
}

export const actions = {
  async fetchProjects ({ commit }) {
    const { data: projects } = await axios.get('http://localhost:3333/api/v1/projects')
    commit('SET_PROJECTS', projects)
  },
  async fetchCurrentProject ({ commit }, id) {
    const { data: project } = await axios.get(`http://localhost:3333/api/v1/projects/${id}`)
    commit('SET_CURRENT_PROJECT', project)
  },

  async addNewTodoToProject ({ commit }, { projectId, todo }) {
    const postURL = `http://localhost:3333/api/v1/projects/${projectId}/todos/`

    const { data } = await axios({
      method: 'POST',
      url: postURL,
      data: {
        name: todo
      }
    })

    commit('ADD_TODO_CURRENT_PROJECT', data)
  }
}

export const getters = {
  list: state => state.list,
  currentProject: state => state.currentProject
}
