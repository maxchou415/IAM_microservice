const models = require('../../database/models')

module.exports = async (IAMGroupId) => {
  let data
  data = await models.IAMGroups.findAll({
    where: {
      id: IAMGroupId
    },
    include: [{
      model: models.IAMRoles,
      attributes: ['name', 'id'],
      required: true,
      through: {
        attributes: []
      },
      as: 'roles'
    }]
  })

  return data
}
