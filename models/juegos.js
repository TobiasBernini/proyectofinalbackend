const { Schema, model } = require('mongoose');

const schema = new Schema({
    exclusivo: {
        type: String,
        require: true
    },
    plataforma: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    clasificacion: {
        type: String,
        require: true
    },
    empresa: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    fechaLanzamiento: {
        type: Number,
        require: true
    },
    distribuidor: {
        type: String,
        require: true
    }
})

const VideoGame = model('VideoGame', schema);
module.exports = { VideoGame }