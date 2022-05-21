const router = require('koa-router')({sensitive:true})

router.prefix('/api/proyecto/usuarios')

router.get('/', async (ctx)=>{
    ctx.body= {
    success: true,
    message: 'petición ok'
    }

})




module.exports = router;