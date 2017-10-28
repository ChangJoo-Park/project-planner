'use strict'

const Model = use('Model')

class Todo extends Model {
  owner () {
    return this.belongsTo('App/Models/User')
  }

  assigned () {
    return this.belongsTo('App/Models/User')
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }
}

module.exports = Todo
