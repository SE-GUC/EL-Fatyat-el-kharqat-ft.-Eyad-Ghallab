
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



app.use('/api/SSC', updateSSC)





// Require Router Handlers
const Reviewer = require('./routes/api/Reviewer')


//const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')

//const books = require('./routes/api/books')






const investor = require('./routes/api/investor')



// const express = require('express')




// Direct to Route Handlers





// Entry point
app.get('/', (req,res) => res.send(`<h1>Welcome </h1>
<a href="/api/SSC"> Your Companies</a>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))



// Direct to Route Handlers
app.use('/api/Reviewer', Reviewer)
app.use('/api/investors',investor )




app.use('/api/Lawyer', Lawyer)





app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))


