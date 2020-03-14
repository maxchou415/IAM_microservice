'use strict'
module.exports = (sequelize, DataTypes) => {
  const IAMRoles = sequelize.define('IAMRoles', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })
  IAMRoles.associate = function (models) {
  }
  return IAMRoles
}
