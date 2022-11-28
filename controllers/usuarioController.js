const Usuario = require('../models/usuario');

const createUsuario = (req,res) =>{
    const { nombre, correo, telefono, direccion, parentesco, rol, nacimiento, Vacunas} = req.body
    const newUsuario = new Usuario({
        nombre, 
        correo,
        telefono,
        direccion,
        parentesco,
        rol,
        nacimiento,
        Vacunas
    })

    newUsuario.save((error, Usuario) =>{
        if(error){
            return res.status(400).send({message: "No se pudo registrar al usuario"})
        }
        return res.status(201).sen(Usuario)
    })

}

module.exports = {
    createUsuario
}