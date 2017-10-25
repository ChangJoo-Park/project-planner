import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    // FIXME: req.session is Null
    if (req.auth && req.auth.$attributes) {
      const auth = req.auth.$attributes
      commit('SET_USER', auth)
    }
  },
  async login ({ commit }, { email, password }) {
    try {
      const { data } = await axios.post('http://localhost:3333/api/v1/auth/login', { email, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    try {
      await axios.post('http://localhost:3333/api/v1/auth/logout')
      commit('SET_USER', null)
    } catch (error) {
      console.log('error')
    }
  }
}

export const getters = {
  currentUser: state => state.authUser
}
