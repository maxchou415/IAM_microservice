'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('IAMRoles', [{
        name: 'AccessAdminConsole',
        // Naming rule: Action(use HTTP method as priority if any)ResourceName ex. GETUsers.

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '), // FUCK THIS
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {}),

      queryInterface.bulkInsert('IAMRoles', [{
        name: 'GETConsoleIAMGroups',
        // Naming rule: Action(use HTTP method as priority if any)ResourceName ex. GETUsers.

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '), // FUCK THIS
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IAMRoles', null, {})
  }
}
