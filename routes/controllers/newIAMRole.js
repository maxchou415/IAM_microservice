const { newIAMRole } = require('../services')
const errorMessageMap = require('../../infra/utils/responseHandlers/errorMessageMap')

module.exports = async (ctx, next) => {
  const wantedData = ctx.request.body

  if (!wantedData || !wantedData.name) {
    ctx.throw(errorMessageMap.NEW_IAM_ROLE_FAIULRED_WANTED_PARAMETER_LOSTED)
    return
  }

  const newIAMRoleData = {
    name: wantedData.name
  }

  try {
    await newIAMRole(newIAMRoleData)
  } catch (error) {
    if (error.parent.code === 'ER_DUP_ENTRY') {
      ctx.throw(errorMessageMap.NEW_IAM_ROLE_FAIULRED_ROLE_EXISTS)
      return
    }
    ctx.throw()
    return
  }

  ctx.status = 200
  ctx.body = {
    status: 'success'
  }
}
