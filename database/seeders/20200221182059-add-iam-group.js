'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('IAMGroups', [{
        name: 'Admin Group',

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IAMGroups', null, {})
  }
}
