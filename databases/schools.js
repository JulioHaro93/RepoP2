const db = require('./db')
const Schema = db.Schema

const EscuelasSchema = new Schema({
    name: {type: String, required: true},
    level: {type: String, required: true},
    location: {type: String, required: true},
}, {versionKey:false})


const Escuelas = db.model('Escuelas',EscuelasSchema, 'Escuelas', 'Escuelas')

module.exports = Escuelas