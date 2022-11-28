const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({

    nombre:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },

    
    correo:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },

    telefono:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },

    direccion:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },
    parentesco:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },

    rol:{
        type: String,
        enum: [
            admin,
            tutor,
            niño
        ],
        default: tutor
    },

    nacimiento:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },

    Vacunas:{
        type: String,
        required: true,
        minLegth: 1,
        maxLegth: 100
    }

});

module.exports = mongoose.model('Usuario', usuarioSchema);