const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const { mongoLink, PORT } = require('./config')

const app = express()

app.set('view engine', 'handlebars')
app.engine('handlebars', hbs())
app.use(cors())

const start = () => {
    mongoose.connect(mongoLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => {
            console.log('success connect mongo');
        })
        .catch((e) => {
            console.log(e.message);
        })
}
start()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(require('./routes/index'))

app.listen(PORT, () => {
    console.log('success connect server');
})