'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMGroups = sequelize.define('IAMGroups', {
    name: DataTypes.STRING
  }, {
    tableName: 'iam_groups'
  })
  IAMGroups.associate = function (models) {
    IAMGroups.belongsToMany(models.IAMRoles, {
      through: 'iam_role_iam_group',
      foreignKey: 'iam_group_id',
      otherKey: 'iam_role_id',
      as: 'roles'
    })
  }
  return IAMGroups
}
