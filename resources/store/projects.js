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
    console.log('fetchProject')
    const { data: projects } = await axios.get('http://localhost:3333/api/v1/projects')
    commit('SET_PROJECTS', projects)
  }
}

export const getters = {
  list: state => state.list,
  currentProject: state => state.currentProject
}
