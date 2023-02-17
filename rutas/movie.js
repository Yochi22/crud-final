const express = require('express');
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const movieSchema = new schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    time: { type: Number, required: true },
    lang: { type: String, required: true },
    date: { type: Date, required: true },
    country: { type: String, required: true },
  });