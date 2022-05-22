
const mongoose = require('mongoose')
const UsuariosDB = require ('../databases/users')

const modelUsuario = {

    getFunction: async () =>{


        const usuarios = await UsuariosDB.find({})
        .then(
            users =>{
                return users
            }
        ).catch(err =>{
            return {succes: false, code: 500, 
            message: "Error en la base de datos en el método find()"}
        })


        console.log(usuarios)

        if(usuarios.length === 0){
            return{succes:false, code: 404}
        }else{
            return {success: true, 
                code: 200,
                usuarios: usuarios}
        }

    },

     putFunction: async (i, n, a) =>{
        //console.log(_id + name + age)
        if(i === undefined || n === undefined)
        {
            mensaje= {mensaje: "es necesario un Id para encontrar al usuario"}
            
            return {success: false, code: 300, message: mensaje}
        }else{

            const update = { name: n, age: a };
            const filter = { _id: i };
        
            const usuario = await UsuariosDB.updateOne(filter, update)
            .then(user =>{
               return user})
            .catch(err => {

                return {success: false, 
                    code: 500, 
                    message: "No fue posible actualizar al usuario (catch)"
                }
            })

            if(usuario.modifiedCount >=1){
                return{ 
                    success: true,
                    code: 200,
                    message: "Fue posible modificar al usuario con el id: " + i

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

     postFunction: async (body)=>{

        if(body.nombre !== undefined){
        cuerpo = {
            name: body.nombre,
            age: body.edad
        }    


        const usuario = new UsuariosDB(cuerpo)
        const result = await usuario.save()
        .then( user => {
            return user}
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
                usuario: result}
        }else{
            return{success:false, code: 300}
        }
    },

     deleteFunction: async (_id) =>{
        console.log(_id)
        if(_id=== undefined){
            mensaje = "Es necesario un Id, o el Id no existe"
            return {success: false, code: 300, message: mensaje}
        }else{
            const result = await UsuariosDB.deleteOne({_id})
            .then(num => {
                return num
            })
            .catch(err => {
                return { success: false,
                code: 500,
                message: "No se pudo eliminar al usuario con el id: "+_id
            }
            })


            console.log(result)

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
                    message: "no fue posible eliminar el usuario"
                }
                

            }


        }
        
    }
}




module.exports = modelUsuario