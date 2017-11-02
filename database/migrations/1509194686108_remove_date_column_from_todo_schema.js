'use strict'

const Schema = use('Schema')

class RemoveDateColumnFromTodoSchema extends Schema {
  up () {
    this.table('todos', (table) => {
      // alter table
      table.dropColumn('started_at')
      table.dropColumn('ended_at')
    })
  }

  down () {
    this.table('todos', (table) => {
      // reverse alternations
      table.date('started_at').nullable()
      table.date('ended_at').nullable()
    })
  }
}

module.exports = RemoveDateColumnFromTodoSchema
