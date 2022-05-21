const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.proyectoPath = 'api/proyecto';

        //middlewares
        this.middleware();
        this.routes();


    }

    middleware(){
            this.app.use(express.static('public'));
            this.app.use(cors());

            this.app.use(express.json());

    }

    routes(){
        this.app.use(this.proyectoPath)
        }

    listen(){

        this.app.listen(this.port, ()=>{
            console.log('El servidor está corriendo en el puerto: ' + this.port);
        })
    }
}

module.exports = Server;