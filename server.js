const express = require("express")
const app = express()
const cors =require('cors');
const corsOption={
    origin:"*",
    method:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
  };
  
app.use(cors(corsOption));



const archivodb = require('./conection')

const rutamovie = require ('./rutas/movie')
const bodyParser = require ('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/movie', rutamovie ) 

app.get('/', (req, res) => {
    res.end('bienvenidos')
})

app.listen(5000, function () {
    console.log("el serv corre correctamente")
})