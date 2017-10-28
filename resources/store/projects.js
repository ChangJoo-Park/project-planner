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
  }
}

export const getters = {
  list: state => state.list,
  currentProject: state => state.currentProject
}
