const router = require('koa-router')({sensitive:true})

const { getFunction, postFunction, putFunction, deleteFunction } = require('../../models/userFunctions')

router.prefix('/api/usuarios')

router.get('/', async (ctx)=>{

    regresoDeAlgo = getFunction()


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

    regresaAlgo = postFunction(body)

    if(regresaAlgo.success=== true){
        ctx.body = {
            success: true,
            message: 'usuario ' + regresaAlgo.usuario[0].name + ' registrado'}

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



    atrapaAlgo = putFunction(id, body.nombre, body.edad)
    
    console.log(atrapaAlgo)


    if(atrapaAlgo.success){
        ctx.body = {
            success: true,
            message: 'usuario ' + atrapaAlgo.actualiza.nombre + ' modificado e identidicado con id: '+ id,
            usuarioModificado: atrapaAlgo.actualiza}

    }else{

        ctx.body= {success: false,
             code: 300, 
             message: "bad request"}
    }
    
    
})


router.delete('/:id', async (ctx, next) =>{
    const id = ctx.params.id
    console.log(id)
    recibeAlgo = deleteFunction(id)

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