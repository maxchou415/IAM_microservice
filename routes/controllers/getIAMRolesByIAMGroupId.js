const { getIAMRolesByIAMGroupId } = require('../services')

module.exports = async (ctx, next) => {
  const IAMGroupId = ctx.params.groupId

  let data
  try {
    data = await getIAMRolesByIAMGroupId(IAMGroupId)
  } catch (error) {

  }

  ctx.status = 200
  ctx.body = {
    status: 'success',
    data
  }
}
