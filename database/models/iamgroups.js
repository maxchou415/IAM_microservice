'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMGroups = sequelize.define('IAMGroups', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })

  IAMGroups.associate = function (models) {
    IAMGroups.belongsToMany(models.IAMRoles, {
      through: 'IAMRoleIAMGroup',
      foreignKey: 'IAMGroupId',
      otherKey: 'IAMRoleId',
      unique: true,
      as: 'roles'
    })
  }
  return IAMGroups
}
