const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');



const app = express();

dotenv.config();

const usuarioRoutes = require('./routes/usuarioRoutes');
const fileRoutes = require('./routes/fileRoutes')

app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/api', usuarioRoutes);
app.use('/api', fileRoutes)


const options = {
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true,
}
mongoose.connect(process.env.DB,options,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Connected yo database")
    }
})


app.listen(process.env.PORT,() => {
    console.log(`Server started on port ${process.env.PORT}`);
})

