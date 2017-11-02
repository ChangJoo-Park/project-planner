'use strict'

const Model = use('Model')

class Project extends Model {
  owner () {
    return this.belongsTo('App/Models/User')
  }

  todos () {
    return this.hasMany('App/Models/Todo')
  }
}

module.exports = Project
