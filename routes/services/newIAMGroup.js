const { IAMGroups, sequelize } = require('@database/models')

module.exports = async (data) => {
  const IAMGroupData = {
    name: data.name
  }

  const IAMGroupRelatedIAMs = data.iams

  const saveIAMGroupData = await sequelize.transaction(async (t) => {
    const IAMGroup = await IAMGroups.create(IAMGroupData, { transaction: t })
    await IAMGroup.addRoles(IAMGroupRelatedIAMs, { transaction: t })
    return IAMGroup
  })

  return saveIAMGroupData
}
