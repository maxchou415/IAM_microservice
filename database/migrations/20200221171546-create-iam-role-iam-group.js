'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('iam_role_iam_group', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      iam_group_id: {
        type: Sequelize.STRING,
        fieldName: 'iam_group_id'
      },
      iam_role_id: {
        type: Sequelize.STRING,
        fieldName: 'iam_role_id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('iam_role_iam_group')
  }
}
