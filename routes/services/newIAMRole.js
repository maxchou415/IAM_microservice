const { IAMRoles } = require('@database/models')

module.exports = async (data) => {
  const saveNewIAMRoleData = await IAMRoles.create(data)

  return saveNewIAMRoleData
}
