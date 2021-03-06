'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  static get hidden () {
    return ['password']
  }

  static get computed () {
    return []
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  projects () {
    return this.hasMany('App/Models/Project')
  }

  todos () {
    return this.hasMany('App/Models/Todo')
  }

  assignedTodos () {
    return this.hasMany('App/Models/Todo')
  }
}

module.exports = User
