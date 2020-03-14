const router = require('@koa/router')()
const controllers = require('./controllers')

router.prefix('/iam')

router.get('/group/:groupId/roles', controllers.getIAMRolesByIAMGroupId)

router.post('/role', controllers.newIAMRole)
router.post('/group', controllers.newIAMGroup)

router.post('/verify', controllers.verifyByIAMGroupId)

module.exports = router
