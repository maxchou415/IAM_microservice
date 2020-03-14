'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoleIAMGroup = sequelize.define('IAMRoleIAMGroup', {
    IamGroupId: {
      type: DataTypes.INTEGER
    },
    IamRoleId: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'IAMRoleIAMGroup'
  })

  IAMRoleIAMGroup.associate = function (models) {
  }
  return IAMRoleIAMGroup
}
