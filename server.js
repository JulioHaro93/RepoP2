const express = require('express');
const cors = require('koa-cors');
const Koa = require('koa')
const routes = require('./routes')
const bodyParser = require('koa-body')
const MAX_BODY = (25000*1024*1024)
const app = new Koa();
const server = require('http').createServer(app.callback());


app.use(cors());
app.use(bodyParser({
    multipart: true,
    json: true,
    formidable:{
        maxFieldZise : (100*1024*1024),
        maxFileSize: MAX_BODY
    }
})
);

app.use(routes.routes(), routes.allowedMethods())

    /*constructor(){
        this.app = new koa();
        this.port = 8080;
        this.proyectoPath = 'api/proyecto';
        this.app.use(routes.routes(), routes.allowedMethods())
        //middlewares
        this.middleware();

        this.app.use(bodyParser({
                multipart: true,
                json: true,
                formidable:{
                    maxFieldZise : (100*1024*1024),
                    maxFileSize: MAX_BODY
                }
            })
        );
    }*/

    // middleware(){

    //         this.app.use(cors());



    // }



    // listen(){

    //     app.listen(this.port, ()=>{
    //         console.log('El servidor está corriendo en el puerto: ' + this.port);
    //     })
    // }



module.exports = server;