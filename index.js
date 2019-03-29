const express = require('express')
const mongoose = require('mongoose')


const spcforms = require('./routes/api/SPC')


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
app.get('/', (req,res) => res.send(`<h1>Welcome To Your Companies</h1>
<a href="/api/SPC"> My Companies</a>`))

app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))


app.use('/api/SPC', spcforms)



app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))