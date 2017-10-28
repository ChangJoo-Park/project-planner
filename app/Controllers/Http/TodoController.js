'use strict'
const Todo = use('App/Models/Todo')

class TodoController {
  async index () {
  }

  async store ({ request, params, auth }) {
    const { name } = request.post()
    const projectId = params.projects_id
    const userId = auth.user.id
    const newTodo = new Todo()
    newTodo.user_id = userId
    newTodo.project_id = projectId
    newTodo.name = name
    try {
      await newTodo.save()
      return newTodo
    } catch (e) {
      console.log('todo save failed')
    }
  }

  async show () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = TodoController
