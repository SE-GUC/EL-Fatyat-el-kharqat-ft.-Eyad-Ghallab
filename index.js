
const express = require('express')
//const investor = require('./routes/api/investor')
const Lawyer= require('./routes/api/Lawyer')
//const books = require('./routes/api/books')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Sumerge</h1>
    <a href="/api/Lawyer">Lawyer</a>
    
    `);
})

// Direct routes to appropriate files 
app.use('/api/Lawyer', Lawyer)

//app.use('/api/books', books)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

// const port = 3000
// app.listen(port, () => console.log(`Server up and running on port ${port}`))

// const express = require('express')


// const Investors = require('./routes/api/investor')

// const app = express()
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome</h1>
//     <a href="/api/investor">Investors</a>
//     `);
// })

// Direct routes to appropriate files 

//app.use('/api/investor', investors)

// Handling 404
// app.use((req, res) => {
//     res.status(404).send({err: 'We can not find what you are looking for'});
//  })

const port = 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`)) 