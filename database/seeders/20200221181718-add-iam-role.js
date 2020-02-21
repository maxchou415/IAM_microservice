'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('iam_roles', [{
        name: 'AccessAdminConsole',
        // Naming rule: Action(use HTTP method as priority if any)ResourceName ex. GETUsers.

        id: 1, // Give a value for the next seed process. ***NEVER DO THIS IN PRODUCTION***.

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '), // FUCK THIS
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {}),

      queryInterface.bulkInsert('iam_roles', [{
        name: 'GETConsoleIAMGroups',
        // Naming rule: Action(use HTTP method as priority if any)ResourceName ex. GETUsers.

        id: 2, // Give a value for the next seed process. ***NEVER DO THIS IN PRODUCTION***.

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '), // FUCK THIS
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('iam_roles', null, {})
  }
}
