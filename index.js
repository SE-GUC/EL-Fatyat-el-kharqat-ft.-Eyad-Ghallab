
const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const Reviewer = require('./routes/api/Reviewer')




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




// Direct to Route Handlers





// Entry point
app.get('/', (req,res) => res.send(`<h1>Sumerge </h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))


// Direct to Route Handlers
app.use('/api/Reviewer', Reviewer)
app.use('/api/investors',investor )


app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))

