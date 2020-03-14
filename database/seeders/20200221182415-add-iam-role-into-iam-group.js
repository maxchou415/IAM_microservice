'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('IAMRoleIAMGroup', [{
        IAMRoleId: 1,
        IAMGroupId: 1,

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {}),

      queryInterface.bulkInsert('IAMRoleIAMGroup', [{
        IAMRoleId: 2,
        IAMGroupId: 1,

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IAMRoleIAMGroup', null, {})
  }
}
