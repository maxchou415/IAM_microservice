'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMResources = sequelize.define('IAMResources', {
    path: DataTypes.STRING,
    method: DataTypes.STRING
  })
  IAMResources.associate = function (models) {
    IAMResources.belongsToMany(models.IAMRoles, {
      through: 'IAMRoleIAMResource',
      foreignKey: 'IAMResourceId',
      as: 'roles'
    })
  }
  return IAMResources
}
