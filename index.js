const express = require('express')
const mongoose = require('mongoose')
const updateSSC = require('./routes/api/SSC')

const app = express()

const db = require('./config/keys').mongoURI


mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req,res) => res.send(`<h1>Sumerge forms</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.use('/api/SSC', updateSSC)


app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))