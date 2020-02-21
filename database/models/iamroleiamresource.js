'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoleIAMResource = sequelize.define('IAMRoleIAMResource', {
    iamResourceId: {
      type: DataTypes.STRING,
      field: 'iam_resource_id'
    },
    iamRoleId: {
      type: DataTypes.STRING,
      field: 'iam_role_id'
    }
  }, {
    tableName: 'iam_role_iam_resource'
  })
  IAMRoleIAMResource.associate = function (models) {
    // associations can be defined here
  }
  return IAMRoleIAMResource
}
