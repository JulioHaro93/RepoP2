const router = require('koa-router')({sensitive:true})

router.prefix('/api/usuarios')

router.get('/', async (ctx)=>{
    ctx.body= {
    success: true,
    message: 'petición ok'
    }
})


router.post('/', async (ctx, next) =>{
    const body= ctx.request.body || {}
    console.log(body)
    ctx.body = {
        success: true,
        message: 'usuario ' + body.name + ' registrado'}

})

router.put('/:id', async (ctx, next) =>{
    const id = ctx.params.id
    const body = ctx.request.body || {}
    console.log("Usuario con el id " + id + " se ha identificado")
    ctx.body = {
        success: true,
        message: 'usuario ' + body.name + ' modificado e identidicado con id: '+ id}
})


router.delete('/:id', async (ctx, next) =>{
    const id = ctx.params.id
    console.log("Se ha borrado el usuario con el id: " + id)

    ctx.body = {
        succes: true,
        message: 'Usuario con el id: ' + id +' ha sido eliminado'

    }

})

module.exports = router;