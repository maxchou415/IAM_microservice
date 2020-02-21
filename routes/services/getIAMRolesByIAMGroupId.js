const models = require('../../database/models')

module.exports = async (IAMGroupId) => {
  let data
  try {
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
  } catch (error) {
    console.log(error)
  }

  return data
}
