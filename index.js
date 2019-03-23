const express = require('express')
const admin = require('./routes/api/Admin')
const app = express()
const mongoose = require('mongoose')

const Admin = require("./routes/api/Admin");
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

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Admin page</h1>
    <a href="/api/Admin"> View Admin </a>
    `);
})




// Direct routes to appropriate files 

app.use('/api/Admin', Admin)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 5353
app.listen(port, () => console.log(`Server up and running on port ${port}`))
