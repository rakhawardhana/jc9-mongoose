var express = require('express')
const mongoose = require('mongoose')
 
mongoose.connect('mongodb://127.0.0.1:27017/jc-mongoose', {
    // Parser string URL
    useNewUrlParser: true,

    // ensureIndex(), usang
    // createIndex(), baru
    useCreateIndex: true
})

const app = express()
const port = 2019

app.use(express.json())

// Menentukan model
const User = mongoose.model('User', {
    name: String,
    age: Number
})

// Membuat user baru
const person = new User({name: 'Titan', age: 99})

// save untuk simpan / insert user ke database
person.save().then(()=> {console.log('Berhasil input user')})















app.listen(port, () => {
    console.log('Berjalan di port ' + port)
})