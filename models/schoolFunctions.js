
const mongoose = require('mongoose')
const EscuelasDB = require ('../databases/schools')

const modelEscuela = {

    getFunction: async () =>{


        const escuelas = await EscuelasDB.find({})
        .then(
            schools =>{
                return schools
            }
        ).catch(err =>{
            return {succes: false, code: 500, 
            message: "Error en la base de datos en el método find()"}
        })


        console.log(escuelas)

        if(escuelas.length === 0){
            return{succes:false, code: 404}
        }else{
            return {success: true, 
                code: 200,
                escuelas: escuelas}
        }

    },

    funGetById: async (id) =>{

        const escuela = await EscuelasDB.findOne({_id: id})
        .then(
            schools =>{
                return schools
            }
        ).catch(err =>{
            return {succes: false, code: 500, 
            message: "Error en la base de datos en el método find()"}
        })

        console.log(escuela +"get by id")

        if(escuela.name === undefined){
            return{succes:false, code: 404}
        }else{
            return {success: true, 
                code: 200,
                escuela:{ 
                nombre: escuela.name,
                nivel: escuela.level,
                direccion: escuela.location,
                _id: escuela._id.toString()}
            }
        }
    },


    postFunction: async (body)=>{

        if(body.nombre !== undefined){
        cuerpo = {
            name: body.nombre,
            level: body.nivel,
            location: body.direccion
        }    


        const escuela = new EscuelasDB(cuerpo)
        const result = await escuela.save()
        .then( schools => {
            return schools}
        )
        .catch(err =>{
            return {
                success: false,
                code: 500,
                message: "error en la base de datos"
            }
        })

        
        return {success: true, 
                code: 200, 
                escuela: {
                    nombre: escuela.name,
                    nivel: escuela.level,
                    _id: escuela._id.toString()


                }}
        }else{
            return{success:false, code: 300}
        }
    },

    putFunction: async (i, n, l, d) =>{
         
        if(i === undefined || n === undefined)
        {
            mensaje= {mensaje: "es necesario un Id para encontrar a la escuela"}
            
            return {success: false, code: 300, message: mensaje}
        }else{

            const update = { name: n, level: l, location: d };
            const filter = { _id: i };
        
            const escuela = await EscuelasDB.updateOne(filter, update, {returnDocument: "after"})
            
            .then(school =>{
               return school})
            .catch(err => {

                return {success: false, 
                    code: 500, 
                    message: "No fue posible actualizar la escuela (catch)"
                }
            })
        
        if(escuela.name !== n){

            const escuelaMod = await EscuelasDB.findOne({_id: i})

            const cuerpoReg = {
                nombre: escuelaMod.name,
                nivel: escuelaMod.level,
                direccion: escuelaMod.location,
                _id: escuelaMod._id.toString()
            }
            
            return{ 
                success: true,
                code: 200,
                message: "Fue posible modificar a la escuela con el id: " + i,
                usuario: cuerpoReg
                
            }

      }else{
            return{
            success: false,
            code: 300,
            message: "No fue posible actualizar el usuario porque los datos son los mismos"
            }
        }
    
        }
    },

    deleteFunction: async (_id) =>{

        if(_id=== undefined){
            mensaje = "Es necesario un Id, o el Id no existe"
            return {success: false, code: 300, message: mensaje}
        }else{
            const result = await EscuelasDB.deleteOne({_id: _id})
            .then(num => {
                return num
            })
            .catch(err => {
                return { success: false,
                code: 500,
                message: "No se pudo eliminar el registro de la escuela con el id: "+_id
                }
            })
        

        if(result.deletedCount !==0 ){
            return{
            success: true,
            code: 200,
            message: "Se elimino correctamente"
            }
        }else{
            return{
                success: false,
                code: 500,
                message: "no fue posible eliminar el registro de la escuela"
            }
            

        }


    }
}

}
module.exports = modelEscuela