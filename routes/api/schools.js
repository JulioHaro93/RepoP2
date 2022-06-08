const router = require('koa-router')({sensitive:true})

const escuelasModel = require('../../models/schoolFunctions')

router.prefix('/api/escuelas')

router.get('/', async (ctx)=>{

    regresoDeAlgo = await escuelasModel.getFunction()


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

router.get('/:id', async (ctx, next) =>{

    const identificador = ctx.params.id
    regresoDeAlgo = await escuelasModel.funGetById(identificador)
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

    regresaAlgo = await escuelasModel.postFunction(body)

    console.log(regresaAlgo)

    if(regresaAlgo.success=== true){
        ctx.body = {
            success: true,
            message: 'escuela ' + regresaAlgo.escuela.name + ' registrada',
            escuela: regresaAlgo.escuela}

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

    atrapaAlgo = await escuelasModel.putFunction(id, body.nombre, body.nivel, body.direccion)
    if(atrapaAlgo.success){
        ctx.body = {
            success: true,
            message: 'Escuela ' + atrapaAlgo.escuelaMod + ' modificado, id: '+ id,
            escuelaModificada: atrapaAlgo,
            escuelaMod: atrapaAlgo.escuelaMod
        }

    }else{

        ctx.body= {success: false,
             code: 300, 
             message: "bad request" +atrapaAlgo.message}
    }
})

router.delete('/:id', async (ctx, next) =>{
    const id = ctx.params.id
    recibeAlgo = await escuelasModel.deleteFunction(id)
    if(recibeAlgo.success){
        ctx.body = {
            succes: true,
            message: 'Escuela con el id: ' + id +' ha sido eliminada'

        }
    }else{
        ctx.body = {success: false, code: 300, mensaje: recibeAlgo.message}
    }
})
module.exports = router;