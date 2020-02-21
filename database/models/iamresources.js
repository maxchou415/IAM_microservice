'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMResources = sequelize.define('IAMResources', {
    path: DataTypes.STRING,
    method: DataTypes.STRING
  }, {
    tableName: 'iam_resources'
  })
  IAMResources.associate = function (models) {
    IAMResources.belongsToMany(models.IAMRoles, {
      through: 'iam_role_iam_resource',
      foreignKey: 'iam_resource_id',
      as: 'roles'
    })
  }
  return IAMResources
}
