const { newIAMGroup } = require('../services')
const errorMessageMap = require('../../infra/utils/responseHandlers/errorMessageMap')

module.exports = async (ctx, next) => {
  const wantedData = ctx.request.body

  if (!wantedData || !wantedData.name || !wantedData.roles || !wantedData.roles.length) {
    ctx.throw(errorMessageMap.NEW_IAM_GROUP_WANTED_PARAMETER_LOSTED)
    return
  }

  const newIAMGroupData = {
    name: wantedData.name,
    iams: wantedData.roles
  }

  try {
    await newIAMGroup(newIAMGroupData)
  } catch (error) {
    ctx.throw(errorMessageMap.NEW_IAM_GROUP_FAIULRED_ON_SAVING)
    return
  }

  ctx.status = 200
  ctx.body = {
    status: 'success'
  }
}
