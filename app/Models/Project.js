'use strict'

const Model = use('Model')

class Project extends Model {
  owner () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Project
