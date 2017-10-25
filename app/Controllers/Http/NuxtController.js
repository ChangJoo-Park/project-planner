'use strict'

const NuxtService = use('App/Services/Nuxt')

class NuxtController {

  async render ({ request, response, auth }) {
    response.implicitEnd = false
    try {
      request.request.auth = await auth.getUser()
      console.log('server : getUser : ', request.request.auth.$attributes)
    } catch (e) {
      console.log(e)
    }
    NuxtService.nuxt.render(request.request, response.response)
  }

}

module.exports = NuxtController
