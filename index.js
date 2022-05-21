require('dotenv').config();

const Server = require('./server');

const servidor = new Server();

servidor.listen();