const db = require('./db')
const Schema = db.Schema

const UsuariosSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number}
}, {versionKey:false})


const Usuarios = db.model('Usuarios', UsuariosSchema, 'Usuarios')

module.exports = Usuarios