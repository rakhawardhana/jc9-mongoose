var express = require('express')
const mongoose = require('mongoose')

const User = require('./models/user')
 
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

app.get('/', (req, res) => {
    res.send("<h1>API Berhasil di jalankan</h1>")
})

app.post('/users/input', (req, res) => {
    const {name, email, age, password} = req.body

    const data_name = name
    const data_email = email
    const data_password = password
    const data_age = age

    // Create new object user
    const person = new User({
        name: data_name,
        email: data_email,
        password: data_password,
        age: data_age
    })

    // save to database
    person.save()
    .then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err.message)
    })


})















app.listen(port, () => {
    console.log('Berjalan di port ' + port)
})