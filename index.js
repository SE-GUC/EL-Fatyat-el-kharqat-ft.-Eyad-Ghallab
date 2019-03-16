//const express = require('express')


const SSC = require('./routes/api/SSC')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>
    <a href="/api/SSC">SSC FORM</a>
    `);
})

// Direct routes to appropriate files 

app.use('/api/SSC', SSC)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
