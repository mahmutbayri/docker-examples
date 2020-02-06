'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
// const Database = use('Database');

class TaskSeeder {
  async run () {
    await Factory
      .model('App/Models/Task')
      .createMany(10)
  }
}

module.exports = TaskSeeder;
