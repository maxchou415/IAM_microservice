const { getIAMRolesByIAMGroupId } = require('../services')
const errorMessageMap = require('../../infra/utils/responseHandlers/errorMessageMap')

module.exports = async (ctx, next) => {
  const IAMGroupId = ctx.params.groupId

  let data
  try {
    data = await getIAMRolesByIAMGroupId(IAMGroupId)
  } catch (error) {
    ctx.throw(errorMessageMap.FETCH_IAM_GROUP_ROLES_FAIULRED)
    return
  }

  if (data.length === 0) {
    ctx.throw(errorMessageMap.FETCH_IAM_GROUP_ROLES_NO_CONTAIN_ROLE)
    return
  }

  ctx.status = 200
  ctx.body = {
    status: 'success',
    data
  }
}
