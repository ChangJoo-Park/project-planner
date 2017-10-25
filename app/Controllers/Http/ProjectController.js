'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index () {
    return await Project.all()
  }

  async show ({ params }) {
    return await Project.find(params.id)
  }

  async store ({ request, auth }) {
    try {
      const saved = await auth.user.projects().create(request.post())
      return saved
    } catch (e) {
      return e
    }
  }

  async update ({ params, request }) {
    return await Project
      .query()
      .where({ id: params.id })
      .update(request.post())
  }

  async destroy ({ params }) {
    return await Project
      .query()
      .where({ id: params.id })
      .delete()
  }
}

module.exports = ProjectController
