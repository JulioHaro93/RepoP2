const router = require('koa-router')({sensitive:true})

const usuariosModel = require('../../models/userFunctions')

router.prefix('/api/usuarios')

router.get('/', async (ctx)=>{

    regresoDeAlgo = await usuariosModel.getFunction()


    if(regresoDeAlgo.success){
        ctx.body= {
            success: true,
            data: regresoDeAlgo
            }
    }else{
        ctx.body ={
            success:false,
            message: "Error "+ regresoDeAlgo.code
        }
    }
})

router.get('/:id', async (ctx, next)=>{
    const identificador = ctx.params.id
    regresoDeAlgo = await usuariosModel.funGetById(identificador)
    
    
    if(regresoDeAlgo.success){
        ctx.body= {
        success: true,
        data: regresoDeAlgo  
        }
    }else{
        ctx.body ={
        success:false,
        message: "Error "+ regresoDeAlgo.code
        }
    }
})


router.post('/', async (ctx, next) =>{
    const body= ctx.request.body || {}
    console.log(body)

    regresaAlgo = await usuariosModel.postFunction(body)

    console.log(regresaAlgo)

    if(regresaAlgo.success=== true){
        ctx.body = {
            success: true,
            message: 'usuario ' + regresaAlgo.usuario.name + ' registrado',
            usuario: regresaAlgo.usuario}

    }else{
        ctx.body ={
            success: false,
            message: "bad request 300"
        }
    }
    

})

router.put('/:id', async (ctx, next) =>{
    
    const id = ctx.params.id
    const body = ctx.request.body || {}


    console.log(id + body)
    atrapaAlgo = await usuariosModel.putFunction(id, body.nombre, body.edad, body.titulado)
    

    if(atrapaAlgo.success){
        ctx.body = {
            success: true,
            message: 'usuario ' + atrapaAlgo.usuario.nombre + ' modificado e identidicado con id: '+ id,
            usuarioModificado: atrapaAlgo,
            usuarioMod: atrapaAlgo.usuarioMod
        }

    }else{

        ctx.body= {success: false,
             code: 300, 
             message: "bad request" +atrapaAlgo.message}
    }
    
    
})


router.delete('/:id', async (ctx, next) =>{
    const id = ctx.params.id
    console.log(id)
    recibeAlgo = await usuariosModel.deleteFunction(id)

    if(recibeAlgo.success){
        ctx.body = {
            succes: true,
            message: 'Usuario con el id: ' + id +' ha sido eliminado'

        }
    }else{
        ctx.body = {success: false, code: 300, mensaje: recibeAlgo.message}
    }
    
})

module.exports = router;