'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoleIAMGroup = sequelize.define('IAMRoleIAMGroup', {
    iamGroupId: {
      type: DataTypes.STRING,
      field: 'iam_group_id'
    },
    iamRoleId: {
      type: DataTypes.STRING,
      field: 'iam_role_id'
    }
  }, {
    tableName: 'iam_role_iam_group'
  })
  IAMRoleIAMGroup.associate = function (models) {
    // IAMRoleIAMGroup.belongsToMany(models.IAMRoles, {
    //   through: 'iam_role_iam_group',
    //   foreignKey: 'iam_role_id',
    //   as: 'roles'
    // })

    // IAMRoleIAMGroup.belongsToMany(models.IAMGroups, {
    //   through: 'iam_role_iam_group',
    //   foreignKey: 'iam_group_id'
    // })
  }
  return IAMRoleIAMGroup
}
