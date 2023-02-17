const express = require("express")
const app = express()

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