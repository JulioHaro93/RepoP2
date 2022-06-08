const router = require('koa-router')({sensitive:true})


const usersApi = require('./api/users')
router.use('', usersApi.routes(), usersApi.allowedMethods())

const schoolsApi = require('./api/schools')
router.use('', schoolsApi.routes(), schoolsApi.allowedMethods())

module.exports= router;