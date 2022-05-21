const router = require('koa-router')({sensitive:true})


const usersApi = require('./api/users')
router.use('', usersApi.routes(), usersApi.allowedMethods())

