
const mongoose = require('mongoose')
const UsuariosDB = require ('../databases/users')

const modelUsuario = {

    getFunction: async () =>{

        let persona1 = {

            nombre: "Julio",
            edad: 28
        }

        let persona2 ={

            nombre: "Samantha",
            edad: 29
        }

    // let myArray = [persona1, persona2];

        let myArray = [];

        if(myArray.length === 0){
            return{succes:false, code: 404}
        }else{
            return {success: true, 
                code: 200,
                usuarios: myArray}
        }

    },

     putFunction: async (_id, name, age) =>{

        console.log(_id + name + age)
        if(_id === undefined || name === undefined)
        {
            mensaje= {mensaje: "es necesario un Id para encontrar al usuario"}
            
            return {success: false, code: 300, mensaje}
        }else{

            actualiza = {

                nombre:name,
                edad: age + 5
            }
        }
    
                
        return {success: true, code: 200, actualiza}
            
        
    },

     postFunction:  (body)=>{

        if(body.nombre !== undefined){
        cuerpo = {
            name: body.nombre,
            age: body.edad
        }    
        myArray = [cuerpo]
        console.log(myArray)
        
        return {success: true, 
                code: 200, 
                usuario: myArray}
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
            mensaje = "el usuario con id: " + _id+ " ha sido eliminado"
            return {success: true, code: 200, message: mensaje}
        }
        
    }
}




module.exports = modelUsuario