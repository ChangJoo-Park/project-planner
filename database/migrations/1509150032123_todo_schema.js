'use strict'

const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('assigned_id').unsigned().references('id').inTable('users')
      table.string('name').notNullable()
      table.string('note').nullable()
      table.boolean('done').defaultTo(false)
      table.date('started_at').nullable()
      table.date('ended_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
