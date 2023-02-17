const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/videoclub');

const objetobd = mongoose.connection


objetobd.on('connected', ()=>{
    console.log('conexion xorrecta a mongo')
})
objetobd.on('error', ()=>{
    console.log('error mongo')
})

module.exports = mongoose