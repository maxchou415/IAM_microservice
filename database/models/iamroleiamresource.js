'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoleIAMResource = sequelize.define('IAMRoleIAMResource', {
    IamResourceId: {
      type: DataTypes.INTEGER
    },
    IamRoleId: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'IAMRoleIAMResource'
  })
  IAMRoleIAMResource.associate = function (models) {
    // associations can be defined here
  }
  return IAMRoleIAMResource
}
