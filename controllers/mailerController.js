
/*
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = process.env.PW 
    if(!token){
        return res.status(400).send({message: "No se entrego contraseña"})
    }
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'rodrigo.jara1901@alumnos.ubiobio.cl',
            pass:token
        }
    })
}

module.exports ={

}

*/
