const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

const app = express();

dotenv.config();

const usuarioRoutes = require('./routes/usuarioRoutes');
app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/api', usuarioRoutes);

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useFindAndModify: false,
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

