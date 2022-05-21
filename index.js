require('dotenv').config();

const Server = require('./server');

const app = Server.listen(8080, ()=>{
    console.log('El servidor está corriendo en el puerto: ' + 8080);
})

module.exports = app