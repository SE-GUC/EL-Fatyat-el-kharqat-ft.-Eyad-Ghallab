<<<<<<< HEAD
//

const express = require('express')

const Reviewer = require('./routes/api/reviewer')
//const admin = require('./routes/api/admin')
//const express = require('express')


const SSC = require('./routes/api/SSC')
=======
const express = require('express')

const admin = require('./routes/api/Admin')
>>>>>>> Admin

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send(`<h1>Welcome to Sumerge page</h1>
    <a href="/api/reviewer"> View Reviewer </a>
=======
    res.send(`<h1>Welcome to Admin page</h1>
    <a href="/api/Admin"> View Admin </a>
>>>>>>> Admin
    `);
})




// Direct routes to appropriate files 

<<<<<<< HEAD
app.use('/api/reviewer', Reviewer)


//const express = require('express')
//const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')
//const books = require('./routes/api/books')
// const app = express()
// app.use(express.json())


// Direct routes to appropriate files 
app.use('/api/Lawyer', Lawyer)

//app.use('/api/books', books)

app.use('/api/SSC', SSC)
=======
app.use('/api/Admin', admin)
>>>>>>> Admin

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 4000
<<<<<<< HEAD
app.listen(port, () => console.log(`Server up and running on port ${port}`))
=======
app.listen(port, () => console.log(`Server up and running on port ${port}`))
>>>>>>> Admin
