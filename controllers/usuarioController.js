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
        return res.status(201).send(Usuario)
    })

}

const getUsuario = (req, res) => {
    Usuario.find({},(error,usuarios)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(usuarios.length == 0){
            return res.status(404).send({"No se encontraron usuarios"})
        }
        return res.status(200).send(usuario)
    })
}


module.exports = {
    createUsuario
}