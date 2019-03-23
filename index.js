
const express = require('express')
const mongoose = require('mongoose')
//const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyers')

//const books = require('./routes/api/books')
const app = express()

const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB '))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false})) 





app.use('/api/Lawyers', Lawyer)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))