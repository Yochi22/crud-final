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

router.post('/movie/addmovie', (req, res) => {
    const nuevomovie = new modelomovie({
        ,
        year: req.body.mov_year,
        time: req.body.mov_time,
        lang: req.body.mov_lang,
        date: req.body.mov_dt_rel,
        ountry: req.body.mov_rel_country
    })
<<<<<<< HEAD
    nuevomovie.save(function (err) {
        if (!err) {
            res.send('pelicula agregado correctamente')
        } else {
            res.send(err)
        }
    })
=======
nuevomovie.save(function (err) {
    if (err) {
        res.send('pelicula agregado correctamente')
    } else {
        res.send(err)
    }
})
>>>>>>> 14c917f1fe30fd8282ac461bc6e425a4b92a34b6
})

router.get('/getmovies', (req, res) => {
    modelomovie.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/obtenerdatamovie', (req, res) => {
<<<<<<< HEAD
    modelomovie.find({_id:req.body._id}, function (docs, err) {
        if (!err) {
=======
    modelomovie.find({ _id: req.body._id }, function (docs, err) {
        if (err) {
>>>>>>> 14c917f1fe30fd8282ac461bc6e425a4b92a34b6
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/actualizarmovie', (req, res) => {
    modelomovie.findOneAndUpdate({ _id: req.body._id }, {
        mov_title: req.body.mov_title,
        mov_year: req.body.mov_year,
        mov_time: req.body.mov_time,
        mov_lang: req.body.mov_lang,
        mov_dt_rel: req.body.mov_dt_rel,
        mov_rel_country: req.body.mov_rel_country
<<<<<<< HEAD
    }, (err)=>{
        if (!err) {
=======
    }, (err) => {
        if (err) {
>>>>>>> 14c917f1fe30fd8282ac461bc6e425a4b92a34b6
            res.send('pelicula actualizada correctamente')
        } else {
            res.send(err)
        }
    })
})

router.post('/borrarmovie', (req, res) => {
<<<<<<< HEAD
    modelomovie.findOneAndDelete({_id:req.body._id},{
        mov_title: req.body.mov_title,
        mov_year: req.body.mov_year,
        mov_time: req.body.mov_time,
        mov_lang: req.body.mov_lang,
        mov_dt_rel: req.body.mov_dt_rel,
        mov_rel_country: req.body.mov_rel_country
    }, (err)=>{
        if (!err) {
            res.send('pelicula actualizada correctamente')
=======
    modelomovie.findOneAndDelete({ _id: req.body._id }, (err) => {
        if (err) {
            res.send('pelicula borrado correctamente')
>>>>>>> 14c917f1fe30fd8282ac461bc6e425a4b92a34b6
        } else {
            res.send(err)
        }
    })
})