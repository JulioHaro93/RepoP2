const db = require('./db')
const Schema = db.Schema

const UsuariosSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    degree: {type: Boolean, required: true},
}, {versionKey:false})


const Usuarios = db.model('Usuarios', UsuariosSchema, 'Usuarios', 'Usuarios')

module.exports = Usuarios