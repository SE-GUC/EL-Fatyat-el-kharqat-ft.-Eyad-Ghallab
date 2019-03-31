
const express = require('express')
const mongoose = require('mongoose')

//const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')
const cors = require('cors')

//const books = require('./routes/api/books')
const app = express()

const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB '))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())



const investor = require('./routes/api/investor')



// const express = require('express')
const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>investors</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handlers








app.use('/api/Lawyer', Lawyer)
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
//=======
app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))


