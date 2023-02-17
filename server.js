const express =require ("express")
const app = express()

const archivodb = require('./conection')

app.get('/', (req, res)=>{
    res.end('bienvenidos')
})

app.listen(5000, function(){
    console.log("el serv corre correctamente")
})