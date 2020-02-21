'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('iam_role_iam_group', [{
        id: 1,

        iam_role_id: 1,
        iam_group_id: 1,

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {}),

      queryInterface.bulkInsert('iam_role_iam_group', [{
        id: 2,

        iam_role_id: 2,
        iam_group_id: 1,

        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('iam_role_iam_group', null, {})
  }
}
