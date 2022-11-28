const usuario = require('../models/usuario');
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

const getUsuarios = (req, res) => {
    Usuario.find({},(error,usuarios)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(usuarios.length == 0){
            return res.status(404).send({message: "No se encontraron usuarios"})
        }
        return res.status(200).send(usuarios)
    })
}

const updateUsuario = (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    usuario.findByIdAndUpdate(id,req.body, (error,product) => {
        if(error){
            return res.status(400).send({ message: "No se pudo actualizar el usuario"})
        }
        if(!usuario){
            return res.status(404).send({ message: "No se encontro el usuario"})    
        }
        return res.status(200).send({ message: "Usuario actualizado"})

    })
}

const deleteUsuario = (req, res) => {
    const {id} = req.params
    Usuario.findByIdAndDelete(id,(error, usuario) => {
        if(error){
            return res.status(400).send({message: "No se a podido eliminar el usuario"})

        }
        if(!usuario){
            return res.status(404).send({message: "No se a podido encontrar el usuario"})
        }
        return res.status(200).send({message: "Se ha eliminado el usuario"})
    })

}

const getUsuario = (req, res) => {
    const {id} = req.params
    Usuario.findById(id,(error, usuario) => {
        if(error){
            return res.status(400).send({message: "No se a podido modificar el usuario"})

        }
        if(!usuario){
            return res.status(404).send({message: "No se a podido encontrar el usuario"})
        }
        return res.status(200).send(usuario)
    })
}

module.exports = {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario,
    getUsuario
}