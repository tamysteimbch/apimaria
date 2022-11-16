require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000;


// json - middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const professorRoutes = require('./routes/professorRoutes')
app.use('/professor', professorRoutes)

// route test
app.get('/test', (res) => {

    res.json({ message: 'all clear' })

})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.
    connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apimaria.hyub8yd.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Running in http://localhost:${PORT}`);
        })
    })
    .catch((err) => console.log(err))
