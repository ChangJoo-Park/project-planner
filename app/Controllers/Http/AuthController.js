'use strict'

class AuthController {
  async login ({ request, auth }) {
    const { email, password } = request.all()
    try {
      const login = await auth.attempt(email, password)
      return login
    } catch (e) {
      console.log(e)
      return e
    }
  }
}

module.exports = AuthController
