const express = require('express');
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const eschemamovie = new schema({
    mov_title: { type: String, required: true },
    mov_year: { type: Number, required: true },
    mov_time: { type: Number, required: true },
    mov_lang: { type: String, required: true },
    mov_dt_rel: { type: Date, required: true },
    mov_rel_country: { type: String, required: true },
});

const modelomovie = mongoose.model('movies', eschemamovie)
module.exports = router

//   router.get('/ejemplo', (req, res)=>{
//     res.end('saludo carga desde ruta de ejemplo')
//   })

router.post('/addmovie', (req, res) => {
    const nuevomovie = new modelomovie({
        mov_title: req.body.mov_title,
        mov_year: req.body.mov_year,
        mov_time: req.body.mov_time,
        mov_lang: req.body.mov_lang,
        mov_dt_rel: req.body.mov_dt_rel,
        mov_rel_country: req.body.mov_rel_country
    })
    nuevomovie.save(function (err) {
        if (err) {
            res.send('pelicula agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

router.get('/getmovies', (req, res) => {
    modelomovie.find({}, function (docs, err) {
        if (err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/obtenerdatamovie', (req, res) => {
    modelomovie.find({mov_id:req.body.mov_id}, function (docs, err) {
        if (err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/actualizarmovie', (req, res) => {
    modelomovie.findOneAndUpdate({mov_id:req.body.mov_id},{
        mov_title: req.body.mov_title,
        mov_year: req.body.mov_year,
        mov_time: req.body.mov_time,
        mov_lang: req.body.mov_lang,
        mov_dt_rel: req.body.mov_dt_rel,
        mov_rel_country: req.body.mov_rel_country
    }, (err){
        if (err) {
            res.send('pelicula actualizada correctamente')
        } else {
            res.send(err)
        }
    })
})