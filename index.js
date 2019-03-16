


const express = require('express')
const app = express()
app.use(express.json())









const Investors = require('./routes/api/investor')



const Reviewer = require('./routes/api/reviewer')

const SSC = require('./routes/api/SSC')



const admin = require('./routes/api/Admin')



const Form = require('./routes/api/SPC')


const Lawyer= require('./routes/api/Lawyer')

app.get('/', (req, res) => {

    res.send(`<h1>Welcome to Sumerge page</h1>
    <a href="/api/reviewer"> View Reviewer </a>

    `);
})




// Direct routes to appropriate files 

app.use('/api/reviewer', Reviewer)





// Direct routes to appropriate files 
app.use('/api/Lawyer', Lawyer)

//app.use('/api/books', books)

app.use('/api/SSC', SSC)
app.use('/api/Admin', admin)


// Direct routes to appropriate files 
app.use('/api/SPC', Form)


// Direct routes to appropriate files 

app.use('/api/investor', Investors)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

