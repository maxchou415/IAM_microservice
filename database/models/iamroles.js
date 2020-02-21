'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoles = sequelize.define('IAMRoles', {
    name: DataTypes.STRING
  }, {
    tableName: 'iam_roles'
  })
  IAMRoles.associate = function (models) {
  }
  return IAMRoles
}
