const express = require('express');
const cors = require('cors');
const koa = require('koa')
const routes = require('./routes')
class Server{

    constructor(){
        this.app = new koa();
        this.port = process.env.PORT;
        this.proyectoPath = 'api/proyecto';

        //middlewares
        this.middleware();
        this.routes();


    }

    middleware(){

            this.app.use(cors());

            this.app.use(
                bodyParser({
                    multipart: true,
                    json: true,
                    formidable:{
                        maxFieldZise : (100*1024*1024),
                        maxFileSize: MAX_BODY
                    }
                })
            );

    }



    listen(){

        this.app.listen(this.port, ()=>{
            console.log('El servidor está corriendo en el puerto: ' + this.port);
        })
    }
}

this.app.use(routes.routes(), routes.allowedMethods())
module.exports = Server;