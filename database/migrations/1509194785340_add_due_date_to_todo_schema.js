'use strict'

const Schema = use('Schema')

class AddDueDateToTodoSchema extends Schema {
  up () {
    this.table('todos', (table) => {
      // alter table
      table.date('due_by').nullable()
    })
  }

  down () {
    this.table('todos', (table) => {
      // reverse alternations
      table.dropColumn('due_by')
    })
  }
}

module.exports = AddDueDateToTodoSchema
